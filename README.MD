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
  -b, --border           Set image border                  [number] [default: 1]
  -p, --padding          Set frames spacing                [number] [default: 1]
  -s, --sep              Set file separator              [string] [default: "/"]
      --trim             Remove transparent pixels    [boolean] [default: false]
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
    {
      "filename": "ground.png",
      "trimmed": false,
      "sourceSize": { "w": 720, "h": 127 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 720, "h": 127 },
      "frame": { "x": 1, "y": 1, "w": 720, "h": 127 }
    },
    {
      "filename": "endLine.png",
      "trimmed": false,
      "sourceSize": { "w": 711, "h": 8 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 711, "h": 8 },
      "frame": { "x": 1, "y": 129, "w": 711, "h": 8 }
    },
    {
      "filename": "tryagain.png",
      "trimmed": false,
      "sourceSize": { "w": 533, "h": 90 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 533, "h": 90 },
      "frame": { "x": 1, "y": 138, "w": 533, "h": 90 }
    },
    {
      "filename": "fruits/11.png",
      "trimmed": false,
      "sourceSize": { "w": 408, "h": 408 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 408, "h": 408 },
      "frame": { "x": 1, "y": 229, "w": 408, "h": 408 }
    },
    {
      "filename": "gameover.png",
      "trimmed": false,
      "sourceSize": { "w": 358, "h": 247 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 358, "h": 247 },
      "frame": { "x": 1, "y": 638, "w": 358, "h": 247 }
    },
    {
      "filename": "p1.png",
      "trimmed": false,
      "sourceSize": { "w": 319, "h": 292 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 319, "h": 292 },
      "frame": { "x": 722, "y": 1, "w": 319, "h": 292 }
    },
    {
      "filename": "p5.png",
      "trimmed": false,
      "sourceSize": { "w": 319, "h": 292 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 319, "h": 292 },
      "frame": { "x": 410, "y": 294, "w": 319, "h": 292 }
    },
    {
      "filename": "fruits/10.png",
      "trimmed": false,
      "sourceSize": { "w": 308, "h": 309 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 308, "h": 309 },
      "frame": { "x": 730, "y": 294, "w": 308, "h": 309 }
    },
    {
      "filename": "fruits/9.png",
      "trimmed": false,
      "sourceSize": { "w": 308, "h": 308 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 308, "h": 308 },
      "frame": { "x": 1, "y": 886, "w": 308, "h": 308 }
    },
    {
      "filename": "fruits/8.png",
      "trimmed": false,
      "sourceSize": { "w": 258, "h": 258 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 258, "h": 258 },
      "frame": { "x": 310, "y": 886, "w": 258, "h": 258 }
    },
    {
      "filename": "light.png",
      "trimmed": false,
      "sourceSize": { "w": 256, "h": 256 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 256, "h": 256 },
      "frame": { "x": 410, "y": 604, "w": 256, "h": 256 }
    },
    {
      "filename": "fruits/7.png",
      "trimmed": false,
      "sourceSize": { "w": 193, "h": 193 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 193, "h": 193 },
      "frame": { "x": 569, "y": 861, "w": 193, "h": 193 }
    },
    {
      "filename": "fruits/6.png",
      "trimmed": false,
      "sourceSize": { "w": 183, "h": 183 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 183, "h": 183 },
      "frame": { "x": 667, "y": 604, "w": 183, "h": 183 }
    },
    {
      "filename": "yes.png",
      "trimmed": false,
      "sourceSize": { "w": 182, "h": 89 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 182, "h": 89 },
      "frame": { "x": 535, "y": 138, "w": 182, "h": 89 }
    },
    {
      "filename": "fruits/5.png",
      "trimmed": false,
      "sourceSize": { "w": 153, "h": 152 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 153, "h": 152 },
      "frame": { "x": 851, "y": 604, "w": 153, "h": 152 }
    },
    {
      "filename": "no.png",
      "trimmed": false,
      "sourceSize": { "w": 127, "h": 89 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 127, "h": 89 },
      "frame": { "x": 569, "y": 1055, "w": 127, "h": 89 }
    },
    {
      "filename": "fruits/4.png",
      "trimmed": false,
      "sourceSize": { "w": 119, "h": 119 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 119, "h": 119 },
      "frame": { "x": 697, "y": 1055, "w": 119, "h": 119 }
    },
    {
      "filename": "fruits/3.png",
      "trimmed": false,
      "sourceSize": { "w": 108, "h": 108 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 108, "h": 108 },
      "frame": { "x": 851, "y": 757, "w": 108, "h": 108 }
    },
    {
      "filename": "fruits/2.png",
      "trimmed": false,
      "sourceSize": { "w": 80, "h": 80 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 80, "h": 80 },
      "frame": { "x": 960, "y": 757, "w": 80, "h": 80 }
    },
    {
      "filename": "fruits/1.png",
      "trimmed": false,
      "sourceSize": { "w": 52, "h": 52 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 52, "h": 52 },
      "frame": { "x": 410, "y": 229, "w": 52, "h": 52 }
    },
    {
      "filename": "ban.png",
      "trimmed": false,
      "sourceSize": { "w": 24, "h": 41 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 24, "h": 41 },
      "frame": { "x": 310, "y": 1145, "w": 24, "h": 41 }
    },
    {
      "filename": "pao.png",
      "trimmed": false,
      "sourceSize": { "w": 38, "h": 40 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 38, "h": 40 },
      "frame": { "x": 335, "y": 1145, "w": 38, "h": 40 }
    }
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
    "ground": {
      "trimmed": false,
      "sourceSize": { "w": 720, "h": 127 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 720, "h": 127 },
      "frame": { "x": 1, "y": 1, "w": 720, "h": 127 }
    },
    "endLine": {
      "trimmed": false,
      "sourceSize": { "w": 711, "h": 8 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 711, "h": 8 },
      "frame": { "x": 1, "y": 129, "w": 711, "h": 8 }
    },
    "tryagain": {
      "trimmed": false,
      "sourceSize": { "w": 533, "h": 90 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 533, "h": 90 },
      "frame": { "x": 1, "y": 138, "w": 533, "h": 90 }
    },
    "fruits/11": {
      "trimmed": false,
      "sourceSize": { "w": 408, "h": 408 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 408, "h": 408 },
      "frame": { "x": 1, "y": 229, "w": 408, "h": 408 }
    },
    "gameover": {
      "trimmed": false,
      "sourceSize": { "w": 358, "h": 247 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 358, "h": 247 },
      "frame": { "x": 1, "y": 638, "w": 358, "h": 247 }
    },
    "p1": {
      "trimmed": false,
      "sourceSize": { "w": 319, "h": 292 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 319, "h": 292 },
      "frame": { "x": 722, "y": 1, "w": 319, "h": 292 }
    },
    "p5": {
      "trimmed": false,
      "sourceSize": { "w": 319, "h": 292 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 319, "h": 292 },
      "frame": { "x": 410, "y": 294, "w": 319, "h": 292 }
    },
    "fruits/10": {
      "trimmed": false,
      "sourceSize": { "w": 308, "h": 309 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 308, "h": 309 },
      "frame": { "x": 730, "y": 294, "w": 308, "h": 309 }
    },
    "fruits/9": {
      "trimmed": false,
      "sourceSize": { "w": 308, "h": 308 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 308, "h": 308 },
      "frame": { "x": 1, "y": 886, "w": 308, "h": 308 }
    },
    "fruits/8": {
      "trimmed": false,
      "sourceSize": { "w": 258, "h": 258 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 258, "h": 258 },
      "frame": { "x": 310, "y": 886, "w": 258, "h": 258 }
    },
    "light": {
      "trimmed": false,
      "sourceSize": { "w": 256, "h": 256 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 256, "h": 256 },
      "frame": { "x": 410, "y": 604, "w": 256, "h": 256 }
    },
    "fruits/7": {
      "trimmed": false,
      "sourceSize": { "w": 193, "h": 193 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 193, "h": 193 },
      "frame": { "x": 569, "y": 861, "w": 193, "h": 193 }
    },
    "fruits/6": {
      "trimmed": false,
      "sourceSize": { "w": 183, "h": 183 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 183, "h": 183 },
      "frame": { "x": 667, "y": 604, "w": 183, "h": 183 }
    },
    "yes": {
      "trimmed": false,
      "sourceSize": { "w": 182, "h": 89 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 182, "h": 89 },
      "frame": { "x": 535, "y": 138, "w": 182, "h": 89 }
    },
    "fruits/5": {
      "trimmed": false,
      "sourceSize": { "w": 153, "h": 152 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 153, "h": 152 },
      "frame": { "x": 851, "y": 604, "w": 153, "h": 152 }
    },
    "no": {
      "trimmed": false,
      "sourceSize": { "w": 127, "h": 89 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 127, "h": 89 },
      "frame": { "x": 569, "y": 1055, "w": 127, "h": 89 }
    },
    "fruits/4": {
      "trimmed": false,
      "sourceSize": { "w": 119, "h": 119 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 119, "h": 119 },
      "frame": { "x": 697, "y": 1055, "w": 119, "h": 119 }
    },
    "fruits/3": {
      "trimmed": false,
      "sourceSize": { "w": 108, "h": 108 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 108, "h": 108 },
      "frame": { "x": 851, "y": 757, "w": 108, "h": 108 }
    },
    "fruits/2": {
      "trimmed": false,
      "sourceSize": { "w": 80, "h": 80 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 80, "h": 80 },
      "frame": { "x": 960, "y": 757, "w": 80, "h": 80 }
    },
    "fruits/1": {
      "trimmed": false,
      "sourceSize": { "w": 52, "h": 52 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 52, "h": 52 },
      "frame": { "x": 410, "y": 229, "w": 52, "h": 52 }
    },
    "ban": {
      "trimmed": false,
      "sourceSize": { "w": 24, "h": 41 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 24, "h": 41 },
      "frame": { "x": 310, "y": 1145, "w": 24, "h": 41 }
    },
    "pao": {
      "trimmed": false,
      "sourceSize": { "w": 38, "h": 40 },
      "spriteSourceSize": { "x": 0, "y": 0, "w": 38, "h": 40 },
      "frame": { "x": 335, "y": 1145, "w": 38, "h": 40 }
    }
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
  background-position: -1px -1px;
}
.endLine {
  width: 711px;
  height: 8px;
  background-position: -1px -129px;
}
.tryagain {
  width: 533px;
  height: 90px;
  background-position: -1px -138px;
}
.fruits__11 {
  width: 408px;
  height: 408px;
  background-position: -1px -229px;
}
.gameover {
  width: 358px;
  height: 247px;
  background-position: -1px -638px;
}
.p1 {
  width: 319px;
  height: 292px;
  background-position: -722px -1px;
}
.p5 {
  width: 319px;
  height: 292px;
  background-position: -410px -294px;
}
.fruits__10 {
  width: 308px;
  height: 309px;
  background-position: -730px -294px;
}
.fruits__9 {
  width: 308px;
  height: 308px;
  background-position: -1px -886px;
}
.fruits__8 {
  width: 258px;
  height: 258px;
  background-position: -310px -886px;
}
.light {
  width: 256px;
  height: 256px;
  background-position: -410px -604px;
}
.fruits__7 {
  width: 193px;
  height: 193px;
  background-position: -569px -861px;
}
.fruits__6 {
  width: 183px;
  height: 183px;
  background-position: -667px -604px;
}
.yes {
  width: 182px;
  height: 89px;
  background-position: -535px -138px;
}
.fruits__5 {
  width: 153px;
  height: 152px;
  background-position: -851px -604px;
}
.no {
  width: 127px;
  height: 89px;
  background-position: -569px -1055px;
}
.fruits__4 {
  width: 119px;
  height: 119px;
  background-position: -697px -1055px;
}
.fruits__3 {
  width: 108px;
  height: 108px;
  background-position: -851px -757px;
}
.fruits__2 {
  width: 80px;
  height: 80px;
  background-position: -960px -757px;
}
.fruits__1 {
  width: 52px;
  height: 52px;
  background-position: -410px -229px;
}
.ban {
  width: 24px;
  height: 41px;
  background-position: -310px -1145px;
}
.pao {
  width: 38px;
  height: 40px;
  background-position: -335px -1145px;
}
```

</details>

### Output plist

> Support cocos creator

```bash
$ spritepacker -f "./.test/image/**/*.png"-n icons -o ./.test --format plist --trim
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
        <key>spriteSize</key>
        <string>{720,127}</string>
        <key>spriteSourceSize</key>
        <string>{720,127}</string>
        <key>textureRect</key>
        <string>{{1,1},{720,127}}</string>
      </dict>
      <key>endLine.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{711,8}</string>
        <key>spriteSourceSize</key>
        <string>{711,8}</string>
        <key>textureRect</key>
        <string>{{1,129},{711,8}}</string>
      </dict>
      <key>tryagain.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{533,90}</string>
        <key>spriteSourceSize</key>
        <string>{533,90}</string>
        <key>textureRect</key>
        <string>{{1,138},{533,90}}</string>
      </dict>
      <key>fruits/11.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{404,404}</string>
        <key>spriteSourceSize</key>
        <string>{408,408}</string>
        <key>textureRect</key>
        <string>{{1,229},{404,404}}</string>
      </dict>
      <key>gameover.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{358,247}</string>
        <key>spriteSourceSize</key>
        <string>{358,247}</string>
        <key>textureRect</key>
        <string>{{1,634},{358,247}}</string>
      </dict>
      <key>p1.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{319,292}</string>
        <key>spriteSourceSize</key>
        <string>{319,292}</string>
        <key>textureRect</key>
        <string>{{722,1},{319,292}}</string>
      </dict>
      <key>p5.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{319,292}</string>
        <key>spriteSourceSize</key>
        <string>{319,292}</string>
        <key>textureRect</key>
        <string>{{406,294},{319,292}}</string>
      </dict>
      <key>fruits/9.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{308,308}</string>
        <key>spriteSourceSize</key>
        <string>{308,308}</string>
        <key>textureRect</key>
        <string>{{726,294},{308,308}}</string>
      </dict>
      <key>fruits/10.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,-1}</string>
        <key>spriteSize</key>
        <string>{304,303}</string>
        <key>spriteSourceSize</key>
        <string>{308,309}</string>
        <key>textureRect</key>
        <string>{{1,882},{304,303}}</string>
      </dict>
      <key>fruits/8.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{258,258}</string>
        <key>spriteSourceSize</key>
        <string>{258,258}</string>
        <key>textureRect</key>
        <string>{{306,882},{258,258}}</string>
      </dict>
      <key>light.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{-1,0}</string>
        <key>spriteSize</key>
        <string>{254,256}</string>
        <key>spriteSourceSize</key>
        <string>{256,256}</string>
        <key>textureRect</key>
        <string>{{406,603},{254,256}}</string>
      </dict>
      <key>fruits/7.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{-1,1}</string>
        <key>spriteSize</key>
        <string>{187,187}</string>
        <key>spriteSourceSize</key>
        <string>{193,193}</string>
        <key>textureRect</key>
        <string>{{565,860},{187,187}}</string>
      </dict>
      <key>fruits/6.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{183,183}</string>
        <key>spriteSourceSize</key>
        <string>{183,183}</string>
        <key>textureRect</key>
        <string>{{661,603},{183,183}}</string>
      </dict>
      <key>yes.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{182,89}</string>
        <key>spriteSourceSize</key>
        <string>{182,89}</string>
        <key>textureRect</key>
        <string>{{535,138},{182,89}}</string>
      </dict>
      <key>fruits/5.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{153,152}</string>
        <key>spriteSourceSize</key>
        <string>{153,152}</string>
        <key>textureRect</key>
        <string>{{845,603},{153,152}}</string>
      </dict>
      <key>no.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{127,89}</string>
        <key>spriteSourceSize</key>
        <string>{127,89}</string>
        <key>textureRect</key>
        <string>{{565,1048},{127,89}}</string>
      </dict>
      <key>fruits/4.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{119,119}</string>
        <key>spriteSourceSize</key>
        <string>{119,119}</string>
        <key>textureRect</key>
        <string>{{693,1048},{119,119}}</string>
      </dict>
      <key>fruits/3.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{108,108}</string>
        <key>spriteSourceSize</key>
        <string>{108,108}</string>
        <key>textureRect</key>
        <string>{{845,756},{108,108}}</string>
      </dict>
      <key>fruits/2.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{80,80}</string>
        <key>spriteSourceSize</key>
        <string>{80,80}</string>
        <key>textureRect</key>
        <string>{{954,756},{80,80}}</string>
      </dict>
      <key>fruits/1.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{52,52}</string>
        <key>spriteSourceSize</key>
        <string>{52,52}</string>
        <key>textureRect</key>
        <string>{{406,229},{52,52}}</string>
      </dict>
      <key>ban.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{24,41}</string>
        <key>spriteSourceSize</key>
        <string>{24,41}</string>
        <key>textureRect</key>
        <string>{{306,1141},{24,41}}</string>
      </dict>
      <key>pao.png</key>
      <dict>
        <key>spriteOffset</key>
        <string>{0,0}</string>
        <key>spriteSize</key>
        <string>{38,40}</string>
        <key>spriteSourceSize</key>
        <string>{38,40}</string>
        <key>textureRect</key>
        <string>{{999,603},{38,40}}</string>
      </dict>
    </dict>
    <key>metadata</key>
    <dict>
      <key>format</key>
      <integer>3</integer>
      <key>pixelFormat</key>
      <string>RGBA8888</string>
      <key>size</key>
      <string>{1042,1186}</string>
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
