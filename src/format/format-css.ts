import { FormatObj } from '.';

export const formatCss: FormatObj<string> = {
  format(bin, option) {
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
  },
  extName: 'css',
  toRaw: t => t
};
