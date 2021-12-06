import { FormatObj } from '.';

export interface Frame {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const formatJsonArray: FormatObj<{ frames: { filename: string; frame: Frame }[] }> = {
  format(bin, option) {
    return {
      frames: bin.rects.map(it => {
        const [w, h] = [it.width, it.height];
        return {
          filename: it.data.name as string,
          frame: { x: it.x, y: it.y, w, h }
        };
      })
    };
  },
  extName: 'json',
  toRaw: t => JSON.stringify(t)
};
