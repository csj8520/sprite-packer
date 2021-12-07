import Jimp from 'jimp';

export const scanOpacity = (jimp: Jimp, line: [number, number], item: [number, number], direction: 'horizontal' | 'vertical'): number => {
  const lr = line[0] > line[1];
  const ir = item[0] > item[1];
  const [l1, l2] = lr ? [...line].reverse() : line;
  const [i1, i2] = ir ? [...item].reverse() : item;
  let count = 0;

  for (let l = l1; l <= l2; l++) {
    const _l = lr ? l2 - (l - l1) : l;
    let opacity = true;
    for (let i = i1; i <= i2; i++) {
      const _i = ir ? i2 - (i - i1) : i;
      const [_x, _y] = direction === 'horizontal' ? [_i, _l] : [_l, _i];
      opacity = jimp.getPixelColor(_x, _y) === 0;
      if (!opacity) return count;
    }
    count++;
  }
  return count;
};
