# Installation

```
npm i -g @sjchang/sprite-packer
```

# Usage from command line

```text
$ spritepacker --help
Options:
  -f, --file             Set input images path, support glob [string] [required]
  -w, --maxWidth         Set output image max width     [number] [default: 2048]
  -h, --maxHeight        Set output image max height    [number] [default: 2048]
      --format           Set output file type
           [string] [choices: "JsonArray", "JsonHash", "css", "plist"] [default:
                                                                    "JsonArray"]
  -o, --outDir           Set output file dir            [string] [default: "./"]
  -n, --name             Set output file name  [string] [default: "spritesheet"]
      --frameName, --fn  Set frame name   [string] [default: "[dir][name][ext]"]
  -b, --border           Set image border                  [number] [default: 0]
  -p, --padding          Set frames spacing                [number] [default: 0]
  -s, --sep              Set file separator              [string] [default: "/"]
  -v, --version          Show version number                           [boolean]
      --help             Show help                                     [boolean]

Examples:
  spritepacker  -f "./*.png"
```

# Example

```bash
$ spritepacker -f "./.test/image/**/*.png" -n icons -o ./.test
```

### File directory

```
$ tree ./.test/image/
./.test/image/
├── ban.png
├── endLine.png
├── fruits
│   ├── 10.png
│   ├── 11.png
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   ├── 6.png
│   ├── 7.png
│   ├── 8.png
│   └── 9.png
├── gameover.png
├── ground.png
├── light.png
├── no.png
├── p1.png
├── p5.png
├── pao.png
├── tryagain.png
└── yes.png
```

### Output sprite image

![sprite image](https://raw.githubusercontent.com/csj8520/sprite-packer/master/doc/icons.png)

### Default output JsonArray

> Support phaser...

<details>
<summary>See output JsonArray data</summary>

```json
{
  "frames": [
    { "filename": "ground.png", "frame": { "x": 0, "y": 0, "w": 720, "h": 127 } },
    { "filename": "endLine.png", "frame": { "x": 0, "y": 127, "w": 711, "h": 8 } },
    { "filename": "tryagain.png", "frame": { "x": 0, "y": 135, "w": 533, "h": 90 } },
    { "filename": "fruits/11.png", "frame": { "x": 0, "y": 225, "w": 408, "h": 408 } },
    { "filename": "gameover.png", "frame": { "x": 0, "y": 633, "w": 358, "h": 247 } },
    { "filename": "p1.png", "frame": { "x": 720, "y": 0, "w": 319, "h": 292 } },
    { "filename": "p5.png", "frame": { "x": 408, "y": 292, "w": 319, "h": 292 } },
    { "filename": "fruits/10.png", "frame": { "x": 727, "y": 292, "w": 308, "h": 309 } },
    { "filename": "fruits/9.png", "frame": { "x": 0, "y": 880, "w": 308, "h": 308 } },
    { "filename": "fruits/8.png", "frame": { "x": 308, "y": 880, "w": 258, "h": 258 } },
    { "filename": "light.png", "frame": { "x": 408, "y": 601, "w": 256, "h": 256 } },
    { "filename": "fruits/7.png", "frame": { "x": 566, "y": 857, "w": 193, "h": 193 } },
    { "filename": "fruits/6.png", "frame": { "x": 664, "y": 601, "w": 183, "h": 183 } },
    { "filename": "yes.png", "frame": { "x": 533, "y": 135, "w": 182, "h": 89 } },
    { "filename": "fruits/5.png", "frame": { "x": 847, "y": 601, "w": 153, "h": 152 } },
    { "filename": "no.png", "frame": { "x": 566, "y": 1050, "w": 127, "h": 89 } },
    { "filename": "fruits/4.png", "frame": { "x": 693, "y": 1050, "w": 119, "h": 119 } },
    { "filename": "fruits/3.png", "frame": { "x": 847, "y": 753, "w": 108, "h": 108 } },
    { "filename": "fruits/2.png", "frame": { "x": 955, "y": 753, "w": 80, "h": 80 } },
    { "filename": "fruits/1.png", "frame": { "x": 408, "y": 225, "w": 52, "h": 52 } },
    { "filename": "ban.png", "frame": { "x": 308, "y": 1139, "w": 24, "h": 41 } },
    { "filename": "pao.png", "frame": { "x": 1000, "y": 601, "w": 38, "h": 40 } }
  ]
}
```

</details>

### Output JsonHash

> Support phaser...

```bash
$ spritepacker -f "./.test/image/**/*.png" -n icons -o ./.test --format JsonHash --frameName [dir][name]
```

<details>
<summary>See output JsonHash data</summary>

```json
{
  "frames": {
    "ground": { "frame": { "x": 0, "y": 0, "w": 720, "h": 127 } },
    "endLine": { "frame": { "x": 0, "y": 127, "w": 711, "h": 8 } },
    "tryagain": { "frame": { "x": 0, "y": 135, "w": 533, "h": 90 } },
    "fruits/11": { "frame": { "x": 0, "y": 225, "w": 408, "h": 408 } },
    "gameover": { "frame": { "x": 0, "y": 633, "w": 358, "h": 247 } },
    "p1": { "frame": { "x": 720, "y": 0, "w": 319, "h": 292 } },
    "p5": { "frame": { "x": 408, "y": 292, "w": 319, "h": 292 } },
    "fruits/10": { "frame": { "x": 727, "y": 292, "w": 308, "h": 309 } },
    "fruits/9": { "frame": { "x": 0, "y": 880, "w": 308, "h": 308 } },
    "fruits/8": { "frame": { "x": 308, "y": 880, "w": 258, "h": 258 } },
    "light": { "frame": { "x": 408, "y": 601, "w": 256, "h": 256 } },
    "fruits/7": { "frame": { "x": 566, "y": 857, "w": 193, "h": 193 } },
    "fruits/6": { "frame": { "x": 664, "y": 601, "w": 183, "h": 183 } },
    "yes": { "frame": { "x": 533, "y": 135, "w": 182, "h": 89 } },
    "fruits/5": { "frame": { "x": 847, "y": 601, "w": 153, "h": 152 } },
    "no": { "frame": { "x": 566, "y": 1050, "w": 127, "h": 89 } },
    "fruits/4": { "frame": { "x": 693, "y": 1050, "w": 119, "h": 119 } },
    "fruits/3": { "frame": { "x": 847, "y": 753, "w": 108, "h": 108 } },
    "fruits/2": { "frame": { "x": 955, "y": 753, "w": 80, "h": 80 } },
    "fruits/1": { "frame": { "x": 408, "y": 225, "w": 52, "h": 52 } },
    "ban": { "frame": { "x": 308, "y": 1139, "w": 24, "h": 41 } },
    "pao": { "frame": { "x": 1000, "y": 601, "w": 38, "h": 40 } }
  }
}
```

</details>

### Output css

```bash
$ spritepacker -f "./.test/image/**/*.png" -n icons -o ./.test --format css --frameName [dir][name] -s __
```

> will replace "/" with "\_\_"

<details>
<summary>See output css data</summary>

```css
.icons {
  background-image: url(icons.png);
  background-repeat: no-repeat;
  display: block;
}
.ground {
  width: 720px;
  height: 127px;
  background-position: -0px -0px;
}
.endLine {
  width: 711px;
  height: 8px;
  background-position: -0px -127px;
}
.tryagain {
  width: 533px;
  height: 90px;
  background-position: -0px -135px;
}
.fruits__11 {
  width: 408px;
  height: 408px;
  background-position: -0px -225px;
}
.gameover {
  width: 358px;
  height: 247px;
  background-position: -0px -633px;
}
.p1 {
  width: 319px;
  height: 292px;
  background-position: -720px -0px;
}
.p5 {
  width: 319px;
  height: 292px;
  background-position: -408px -292px;
}
.fruits__10 {
  width: 308px;
  height: 309px;
  background-position: -727px -292px;
}
.fruits__9 {
  width: 308px;
  height: 308px;
  background-position: -0px -880px;
}
.fruits__8 {
  width: 258px;
  height: 258px;
  background-position: -308px -880px;
}
.light {
  width: 256px;
  height: 256px;
  background-position: -408px -601px;
}
.fruits__7 {
  width: 193px;
  height: 193px;
  background-position: -566px -857px;
}
.fruits__6 {
  width: 183px;
  height: 183px;
  background-position: -664px -601px;
}
.yes {
  width: 182px;
  height: 89px;
  background-position: -533px -135px;
}
.fruits__5 {
  width: 153px;
  height: 152px;
  background-position: -847px -601px;
}
.no {
  width: 127px;
  height: 89px;
  background-position: -566px -1050px;
}
.fruits__4 {
  width: 119px;
  height: 119px;
  background-position: -693px -1050px;
}
.fruits__3 {
  width: 108px;
  height: 108px;
  background-position: -847px -753px;
}
.fruits__2 {
  width: 80px;
  height: 80px;
  background-position: -955px -753px;
}
.fruits__1 {
  width: 52px;
  height: 52px;
  background-position: -408px -225px;
}
.ban {
  width: 24px;
  height: 41px;
  background-position: -308px -1139px;
}
.pao {
  width: 38px;
  height: 40px;
  background-position: -1000px -601px;
}
```

</details>

### Output plist

> Support cocos creator

```bash
$ spritepacker -f "./.test/image/**/*.png" -n icons -o ./.test --format plist --frameName [dir][name]
```

<details>
<summary>See output plist data</summary>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>frames</key>
    <dict>
      <key>ground.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{720,127}</string>
        <key>textureRect</key>
        <string>{0,0},{720,127}</string>
      </dict>
      <key>endLine.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{711,8}</string>
        <key>textureRect</key>
        <string>{0,127},{711,8}</string>
      </dict>
      <key>tryagain.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{533,90}</string>
        <key>textureRect</key>
        <string>{0,135},{533,90}</string>
      </dict>
      <key>fruits/11.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{408,408}</string>
        <key>textureRect</key>
        <string>{0,225},{408,408}</string>
      </dict>
      <key>gameover.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{358,247}</string>
        <key>textureRect</key>
        <string>{0,633},{358,247}</string>
      </dict>
      <key>p1.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{319,292}</string>
        <key>textureRect</key>
        <string>{720,0},{319,292}</string>
      </dict>
      <key>p5.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{319,292}</string>
        <key>textureRect</key>
        <string>{408,292},{319,292}</string>
      </dict>
      <key>fruits/10.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{308,309}</string>
        <key>textureRect</key>
        <string>{727,292},{308,309}</string>
      </dict>
      <key>fruits/9.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{308,308}</string>
        <key>textureRect</key>
        <string>{0,880},{308,308}</string>
      </dict>
      <key>fruits/8.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{258,258}</string>
        <key>textureRect</key>
        <string>{308,880},{258,258}</string>
      </dict>
      <key>light.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{256,256}</string>
        <key>textureRect</key>
        <string>{408,601},{256,256}</string>
      </dict>
      <key>fruits/7.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{193,193}</string>
        <key>textureRect</key>
        <string>{566,857},{193,193}</string>
      </dict>
      <key>fruits/6.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{183,183}</string>
        <key>textureRect</key>
        <string>{664,601},{183,183}</string>
      </dict>
      <key>yes.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{182,89}</string>
        <key>textureRect</key>
        <string>{533,135},{182,89}</string>
      </dict>
      <key>fruits/5.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{153,152}</string>
        <key>textureRect</key>
        <string>{847,601},{153,152}</string>
      </dict>
      <key>no.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{127,89}</string>
        <key>textureRect</key>
        <string>{566,1050},{127,89}</string>
      </dict>
      <key>fruits/4.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{119,119}</string>
        <key>textureRect</key>
        <string>{693,1050},{119,119}</string>
      </dict>
      <key>fruits/3.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{108,108}</string>
        <key>textureRect</key>
        <string>{847,753},{108,108}</string>
      </dict>
      <key>fruits/2.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{80,80}</string>
        <key>textureRect</key>
        <string>{955,753},{80,80}</string>
      </dict>
      <key>fruits/1.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{52,52}</string>
        <key>textureRect</key>
        <string>{408,225},{52,52}</string>
      </dict>
      <key>ban.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{24,41}</string>
        <key>textureRect</key>
        <string>{308,1139},{24,41}</string>
      </dict>
      <key>pao.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSourceSize</key>
        <string>{38,40}</string>
        <key>textureRect</key>
        <string>{1000,601},{38,40}</string>
      </dict>
    </dict>
    <key>metadata</key>
    <dict>
      <key>format</key>
      <integer>3</integer>
      <key>pixelFormat</key>
      <string>RGBA8888</string>
      <key>size</key>
      <string>{1039,1188}</string>
      <key>textureFileName</key>
      <string>icons.png</string>
    </dict>
  </dict>
</plist>
```

</details>

# Usage from node

```ts
import spritePacker from '@sjchang/sprite-packer';

const result = await spritePacker({
  file: './*.png',
  maxWidth: 2048,
  maxHeight: 2048,
  format: 'JsonArray'
});

// Image Buffer
result.image;
// JSON or CSS
result.data;
// coding
```
