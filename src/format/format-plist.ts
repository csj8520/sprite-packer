import { FormatObj } from '.';

export const formatPlist: FormatObj<string> = {
  format(bin, option) {
    const frams = bin.rects.map(it => {
      return `
      <key>${it.data.name}</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{${it.width},${it.height}}</string>
        <key>textureRect</key>
        <string>{${it.x},${it.y}},{${it.width},${it.height}}</string>
      </dict>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>frames</key>
    <dict>${frams.join('')}
    </dict>
    <key>metadata</key>
    <dict>
      <key>format</key>
      <integer>3</integer>
      <key>pixelFormat</key>
      <string>RGBA8888</string>
      <key>size</key>
      <string>{${bin.width},${bin.height}}</string>
      <key>textureFileName</key>
      <string>${option.name!}.png</string>
    </dict>
  </dict>
</plist>
`;
  },
  extName: 'plist',
  toRaw: t => t
};
