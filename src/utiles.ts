import { Rectangle, Bin } from 'maxrects-packer';
import { SpritePackerOption } from '.';

interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function formatJsonArray(bin: Bin<Rectangle>, option: SpritePackerOption): { frames: { filename: string; frame: Frame }[] } {
  return {
    frames: bin.rects.map(it => {
      const [w, h] = [it.width, it.height];
      return {
        filename: it.data.name as string,
        frame: { x: it.x, y: it.y, w, h }
      };
    })
  };
}

export function formatJsonHash(bin: Bin<Rectangle>, option: SpritePackerOption): { frames: { [key: string]: { frame: Frame } } } {
  return {
    frames: bin.rects.reduce((obj, it) => {
      const [w, h] = [it.width, it.height];
      return {
        ...obj,
        [it.data.name as string]: {
          frame: { x: it.x, y: it.y, w, h }
        }
      };
    }, {})
  };
}

export function formatCss(bin: Bin<Rectangle>, option: SpritePackerOption) {
  let css = `.${option.name} {
  background-image: url(${option.name}.png);
  background-repeat: no-repeat;
  display: block;
}
`;
  css += bin.rects
    .map(
      it => `.${it.data.name} {
  width: ${it.width}px;
  height: ${it.height}px;
  background-position: -${it.x}px -${it.y}px;
}
`
    )
    .join('');
  return css;
}

export const format = {
  JsonArray: formatJsonArray,
  JsonHash: formatJsonHash,
  css: formatCss
};
