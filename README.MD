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
       [string] [choices: "JsonArray", "JsonHash", "css"] [default: "JsonArray"]
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
$ spritepacker -f "./test/image/**/*.png" -n icons -o ./test
```

### File directory

```
$ tree ./test/image/
./test/image/
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

### Output JsonHash

```bash
$ spritepacker -f "./test/image/**/*.png" -n icons -o ./test --format JsonHash --frameName [dir][name]
```

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

### Output css

```bash
$ spritepacker -f "./test/image/**/*.png" -n icons -o ./test --format css --frameName [dir][name] -s __
```

> will replace "/" with "\_\_"

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

# Usage from node

```ts
import spritePacker from '@csj/sprite-packer';

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
