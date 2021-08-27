import fs from 'fs/promises';
import path from 'path';
import _glob from 'glob';
import Jimp from 'jimp';
import { promisify } from 'es6-promisify';
import { MaxRectsPacker } from 'maxrects-packer';
import globParent from 'glob-parent';
import { format } from './utiles';
const glob = promisify(_glob);

type FormatType = keyof typeof format;

export interface SpritePackerOption<T extends FormatType = FormatType> {
  file: string;
  maxWidth?: number;
  maxHeight?: number;
  format?: T;
  outDir?: string;
  name?: string;
  frameName?: string;
  border?: number;
  padding?: number;
  sep?: string;
  saveFile?: boolean;
}

const defaultOption: Partial<SpritePackerOption> = {
  maxWidth: 2048,
  maxHeight: 2048,
  format: 'JsonArray',
  outDir: process.cwd(),
  name: 'spritesheet',
  frameName: '[dir][name][ext]',
  border: 0,
  padding: 0,
  sep: '/',
  saveFile: false
};

const supportImages = /.+\.(jpeg|jpg|png|bmp|tiff|tif|gif)$/;

export default async function spritePacker<T extends FormatType = FormatType>(
  option: SpritePackerOption<T>
): Promise<{ image: Buffer; data: ReturnType<typeof format[T]> }>;

export default async function spritePacker<T extends FormatType = FormatType>(option: SpritePackerOption<T>) {
  option = Object.assign({}, defaultOption, option);
  const files = (await glob(option.file)) as string[];
  if (files.length === 0) throw new Error('Cannot find any files');
  files.forEach(it => {
    if (!supportImages.test(it)) throw new Error(`File type is not supported: ${it}`);
  });

  const rootDir = globParent(option.file);
  const imgs = await Promise.all(
    files.map(async it => {
      const shortPath = it.replace(rootDir + '/', '');
      const paser = path.parse(shortPath);
      const name = option
        .frameName!.replace('[dir]', paser.dir && paser.dir + '/')
        .replace('[name]', paser.name)
        .replace('[ext]', paser.ext)
        .split('/')
        .join(option.sep!);

      return { jimp: await Jimp.read(it), name };
    })
  );
  const packer = new MaxRectsPacker(option.maxWidth!, option.maxHeight!, option.padding!, {
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
  bin.rects.forEach(it => {
    if (it.rot) it.data.jimp as Jimp;
    img.composite(it.data.jimp, it.x, it.y);
  });

  if (!format[option.format!]) throw new Error(`format: ${option.format} is not support`);

  const image = await img.getBufferAsync('image/png');
  const data = format[option.format!](bin, option);

  if (option.saveFile) {
    await fs.writeFile(path.join(option.outDir!, `${option.name!}.png`), image);
    if (option.format === 'css') {
      await fs.writeFile(path.join(option.outDir!, `${option.name!}.css`), data as string);
    } else {
      await fs.writeFile(path.join(option.outDir!, `${option.name!}.json`), JSON.stringify(data));
    }
  }
  return { image, data };
}
