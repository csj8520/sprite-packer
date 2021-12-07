import fs from 'fs/promises';
import path from 'path';
import _glob from 'glob';
import Jimp from 'jimp';
import { promisify } from 'es6-promisify';
import { MaxRectsPacker, IRectangle } from 'maxrects-packer';
import globParent from 'glob-parent';
import { format } from './format';
import { scanOpacity } from './utiles';
import { FormatType, MPRectangle, SpritePackerOption } from './type';
export * from './type';
const glob = promisify(_glob);

export { format };

const defaultOption: Partial<SpritePackerOption> = {
  maxWidth: 2048,
  maxHeight: 2048,
  format: 'JsonArray',
  outDir: process.cwd(),
  name: 'spritesheet',
  frameName: '[dir][name][ext]',
  border: 1,
  padding: 1,
  sep: '/',
  trim: false,
  saveFile: false
};

const supportImages = /.+\.(jpeg|jpg|png|bmp|tiff|tif|gif)$/;

export default async function spritePacker<T extends FormatType = 'JsonArray'>(
  option: SpritePackerOption<T>
): Promise<{ image: Buffer; data: ReturnType<typeof format[T]['format']> }>;

export default async function spritePacker<T extends FormatType = 'JsonArray'>(option: SpritePackerOption<T>) {
  option = Object.assign({}, defaultOption, option);
  const files = (await glob(option.file)) as string[];
  if (files.length === 0) throw new Error('Cannot find any files');
  files.forEach(it => {
    if (!supportImages.test(it)) throw new Error(`File type is not supported: ${it}`);
  });

  const rootDir = globParent(option.file);
  const imgs: MPRectangle.MPRectangleData[] = await Promise.all(
    files.map(async it => {
      const shortPath = it.replace(rootDir + '/', '');
      const paser = path.parse(shortPath);
      const name = option
        .frameName!.replace('[dir]', paser.dir && paser.dir + '/')
        .replace('[name]', paser.name)
        .replace('[ext]', paser.ext)
        .split('/')
        .join(option.sep!);

      const jimp = await Jimp.read(it);
      const { width, height } = jimp.bitmap;

      if (option.trim) {
        let top = scanOpacity(jimp, [0, height - 1], [0, width - 1], 'horizontal');
        let bottom = scanOpacity(jimp, [height - 1, top], [0, width - 1], 'horizontal');
        let left = scanOpacity(jimp, [0, width - 1], [top, height - 1 - bottom], 'vertical');
        let right = scanOpacity(jimp, [width - 1, 0], [top, height - 1 - bottom], 'vertical');
        top % 2 === 1 && top--;
        bottom % 2 === 1 && bottom--;
        left % 2 === 1 && left--;
        right % 2 === 1 && right--;
        let _width = width - left - right;
        let _height = height - top - bottom;

        jimp.crop(left, top, _width, _height);
        return {
          jimp,
          name,
          sourceSize: { width, height },
          size: { width: _width, height: _height },
          trim: { left, right, top, bottom }
        };
      }

      return {
        jimp,
        name,
        sourceSize: { width, height },
        size: { width, height },
        trim: { left: 0, right: 0, top: 0, bottom: 0 }
      };
    })
  );
  const packer = new MaxRectsPacker<MPRectangle>(option.maxWidth!, option.maxHeight!, option.padding!, {
    smart: true,
    pot: false,
    square: false,
    allowRotation: false,
    tag: false,
    border: option.border!
  });
  packer.addArray(imgs.map(it => ({ width: it.jimp.bitmap.width, height: it.jimp.bitmap.height, data: it } as any)));

  const bin = packer.bins[0];
  const img = new Jimp(bin.width, bin.height);
  bin.rects.forEach(it => img.composite(it.data.jimp, it.x, it.y));

  const useFormat = format[option.format!];
  if (!useFormat) throw new Error(`format: ${option.format} is not support`);

  const image = await img.getBufferAsync('image/png');
  const data = useFormat.format(bin, option);

  if (option.saveFile) {
    await fs.writeFile(path.join(option.outDir!, `${option.name!}.png`), image);

    await fs.writeFile(path.join(option.outDir!, `${option.name!}.${useFormat.extName}`), useFormat.toRaw(data as any));
  }
  return { image, data };
}
