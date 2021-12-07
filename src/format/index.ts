import { formatJsonArray } from './format-json-array';
import { formatJsonHash } from './format-json-hash';
import { formatCss } from './format-css';
import { formatPlist } from './format-plist';

export const format = {
  JsonArray: formatJsonArray,
  JsonHash: formatJsonHash,
  css: formatCss,
  plist: formatPlist
};
