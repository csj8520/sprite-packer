import Jimp from 'jimp';
import { Bin, IRectangle } from 'maxrects-packer';
import { format } from '.';

export type FormatType = keyof typeof format;

export interface MPRectangle extends IRectangle {
  data: MPRectangle.MPRectangleData;
}
export namespace MPRectangle {
  export interface MPRectangleData {
    jimp: Jimp;
    name: string;
    sourceSize: { width: number; height: number };
    size: { width: number; height: number };
    trim: { left: number; right: number; top: number; bottom: number };
  }
}

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
  trim?: boolean;
  sep?: string;
  saveFile?: boolean;
}

export interface FormatObj<T = string> {
  format: (bin: Bin<MPRectangle>, option: SpritePackerOption) => T;
  extName: string;
  toRaw: (t: T) => string;
}
