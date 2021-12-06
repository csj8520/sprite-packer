import { Bin, Rectangle } from 'maxrects-packer';
import { SpritePackerOption } from '..';

import { formatJsonArray } from './format-json-array';
import { formatJsonHash } from './format-json-hash';
import { formatCss } from './format-css';
import { formatPlist } from './format-plist';

export interface FormatObj<T = string> {
  format: (bin: Bin<Rectangle>, option: SpritePackerOption) => T;
  extName: string;
  toRaw: (t: T) => string;
}

export const format = {
  JsonArray: formatJsonArray,
  JsonHash: formatJsonHash,
  css: formatCss,
  plist: formatPlist
};
