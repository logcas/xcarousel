# XCarousel
基于原生JavaScript的轮播图组件。

## Install
```
npm install xcarousel -S
```

## Usage
1. 首先，你的HTML结构必须是这样的，并且指定的类名必须传入。同时，请在`div.x-carousel-wrapper`元素中（也就是第一层）指定你的轮播图宽高，以便得到最好的显示效果。
```html
<div class="x-carousel-wrapper" style="width: 830px;height: 472px;">
      <div id="carousel" class="x-carousel">
        <div class="x-carousel-item">
          <a href="#">
            <img src="http://img.lxzmww.xyz/carousel/banner1.jpg">
          </a>
        </div>
        <div class="x-carousel-item">
          <a href="#">
            <img src="http://img.lxzmww.xyz/carousel/banner2.jpg">
          </a>
        </div>
        <div class="x-carousel-item">
          <a href="#">
            <img src="http://img.lxzmww.xyz/carousel/banner3.jpg">
          </a>
        </div>
        <div class="x-carousel-item">
          <a href="#">
            <img src="http://img.lxzmww.xyz/carousel/banner4.jpg">
          </a>
        </div>
        <div class="x-carousel-item">
          <a href="#">
            <img src="http://img.lxzmww.xyz/carousel/banner5.jpg">
          </a>
        </div>
      </div>
    </div>
```

2. 在脚本文件中引入，然后生成一个`XCarousel`实例，传入选项：
```js
const cal = new XCarousel('#carousel', {
  width: 830, // 宽，单位px，必须传入
  height: 420, // 高，单位px，必须传入
  auto: true, // 是否自动播放，可选
  startIndex: 3, // 开始的位置，可选
  delay: 2000, // 延迟
  direction: 'left', // 播放方向
});
```
3. 基于上面的HTML结构，你可以自定义下一张、上一下的按钮。

## API
### `XCarousel(el, options)`
- `el`：传入一个`XCarousel`的根元素，通常为wrapper的下一层，注意不是wrapper。
- `options`：选项，有以下属性：
  1. `width`：轮播图宽度，单位为px，必须传入。
  2. `height`：轮播图高度，单位为px，必须传入。
  3. `auto`：是否自动播放，布尔值，默认为`true`。
  4. `startIndex`：开始的位置（索引），默认为0，即轮播图第一个元素。
  5. `delay`：时延，即每张轮播图停留的时间，默认为2000毫秒。
  6. `direction`：轮播图播放方向，默认为`right`，可选为`left`。

### `cal.play()`
播放轮播图

### `cal.pause()`
暂停轮播图的播放

### `cal.next()`
下一张

### `cal.last()`
上一张

## License
MIT