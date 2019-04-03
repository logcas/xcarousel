import './style.css';

const BrowserPrefix = ['webkit', 'ms', 'Moz', 'O'];

function setTranslate(el, direction, distance) {
  if (!el) return;
  direction = direction.toUpperCase();
  BrowserPrefix.forEach(prefix => {
    el.style[prefix + 'Transform'] = `translate${direction}(${distance}px)`;
  });
  el.style['transform'] = `translate${direction}(${distance}px)`;
}

function addClass(el, className) {
  if (!el) return;
  let _className = el.className.split(' ');
  if (_className.includes(className)) return;
  _className.push(className);
  el.className = _className.join(' ');
}

function removeClass(el, className) {
  if (!el) return;
  let _className = el.className.split(' ').filter(c => c !== className);
  el.className = _className.join(' ');
}

function warn(message) {
  console.warn(message);
}

const _init = Symbol('init');
const _playNext = Symbol('playNext');

const PENDING = 'pending';
const PLAYING = 'playing';

export default class XCarousel {
  constructor(el, options = {}) {
    if (!el) throw new Error('el must be provided.');
    typeof el === 'string' && (el = document.querySelector(el));
    this.el = el; // 根元素
    this.startIndex = options.startIndex || 0; // 起始索引
    this.auto = options.auto || true; // 自动播放
    this.delay = options.delay || 4000; // 延迟
    this.width = options.width || (warn('你必须为轮播图指定一个宽度(px)') && 0); // 宽度 px
    this.height = options.height || (warn('你必须为轮播图指定一个高度(px)') && 0); // 高度 px
    this.status = PENDING; // 状态
    this.direction = options.direction || 'right'; // 播放方向
    this[_init]();
  }

  [_init]() {
     // 拷贝第一个和最后一个Element
     // 把最后一个结点插在最前面
     // 把第一个结点插在最后
    const firstChildClone = this.el.firstElementChild.cloneNode(true);
    const lastChildClone = this.el.lastElementChild.cloneNode(true);
    this.el.insertBefore(lastChildClone, this.el.firstChild);
    this.el.appendChild(firstChildClone);
    this.children = [].filter.call(this.el.children, child => child.className.split(' ').includes('x-carousel-item'));
    this.el.style.width = this.width * this.children.length + 'px';
    this.el.style.height = this.height + 'px';
    this.currentIndex = this.startIndex % this.children.length + 1;
    setTranslate(this.el, 'X', -(this.currentIndex + 1) * this.width);
    if (!this.auto) return;
    this.play();
  }

  [_playNext](direction) {
    direction = direction || this.direction;
    if (this.currentIndex === 0 || this.currentIndex === this.children.length - 1) {
      this.currentIndex = this.currentIndex === 0 ? this.children.length - 2 : 1;
      removeClass(this.el, 'x-carousel-move');
      setTranslate(this.el, 'X', -this.width * this.currentIndex);
      this.timer = setTimeout(() => {
        addClass(this.el, 'x-carousel-move');
        this[_playNext](direction);
      });
    } else {
      this.currentIndex = direction === 'right' ? this.currentIndex + 1 : this.currentIndex - 1;
      setTranslate(this.el, 'X', -this.width * this.currentIndex);
      this.timer = setTimeout(() => {
        this[_playNext]();
      }, this.delay);
    }
  }

  play() {
    if (this.status === PENDING) {
      this.status = PLAYING;
      this.timer = setTimeout(() => {
        addClass(this.el, 'x-carousel-move');
        this[_playNext]();
      }, this.delay);
    }
  }

  pause() {
    if (this.status === PLAYING) {
      this.status = PENDING;
      if (this.timer) clearTimeout(this.timer);
      this.timer = null;
    }
  }

  next() {
    if (this.timer) clearTimeout(this.timer);
    addClass(this.el, 'x-carousel-move');
    this[_playNext]('right');
  }

  last() {
    if (this.timer) clearTimeout(this.timer);
    addClass(this.el, 'x-carousel-move');
    this[_playNext]('left');
  }
}