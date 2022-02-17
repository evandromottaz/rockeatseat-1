export default class Carousel {
  constructor(gallery, wrapper) {
    this.gallery = document.querySelector(gallery);
    this.wrapper = document.querySelector(wrapper);
    this.slide = { start: 0, movement: 0, end: 0, savedPosition: 0 };
  }

  imgSlidePosition(finalPosition) {
    const imgs = [...this.wrapper.children];
    const firstImg = imgs[0];
    let totalOffsetWidth = 0;

    imgs.forEach((img) => {
      const marginImg = +window
        .getComputedStyle(img)
        .marginRight.replace('px', '');

      totalOffsetWidth += img.offsetWidth + marginImg;
    });

    if (finalPosition >= firstImg.offsetLeft) {
      finalPosition = 0;
    } else if (finalPosition - this.wrapper.offsetWidth < -totalOffsetWidth) {
      finalPosition = -totalOffsetWidth + this.wrapper.offsetWidth;
    }

    this.moveSlide(finalPosition);
  }

  moveSlide(finalPosition) {
    this.slide.savedPosition = finalPosition;
    this.wrapper.style.transform = `translate3d(${finalPosition}px, 0, 0)`;
  }

  onStart(event) {
    event.preventDefault();

    let move = { type: '', clientX: 0 };
    if (event.type === 'mousedown') {
      move.clientX = event.clientX;
      move.type = 'mousemove';
    } else {
      move.clientX = event.changedTouches[0].clientX;
      move.type = 'touchmove';
    }

    this.slide.start = move.clientX;
    this.gallery.addEventListener(move.type, this.onMove);
  }

  updatePosition(clientX) {
    this.slide.movement = (this.slide.start - clientX) * 1.4;
    return this.slide.end - this.slide.movement;
  }

  onMove(event) {
    let clientX;
    if (event.type === 'mousemove') {
      clientX = event.clientX;
    } else {
      clientX = event.changedTouches[0].clientX;
    }
    const finalPosition = this.updatePosition(clientX);
    console.log(event);
    this.imgSlidePosition(finalPosition);
  }

  onEnd() {
    this.gallery.removeEventListener('mousemove', this.onMove);
    this.slide.end = this.slide.savedPosition;
  }

  addEvents() {
    this.gallery.addEventListener('mousedown', this.onStart);
    this.gallery.addEventListener('mouseup', this.onEnd);
    this.gallery.addEventListener('touchstart', this.onStart);
    this.gallery.addEventListener('touchend', this.onEnd);
  }

  bind() {
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);
  }

  init() {
    this.bind();
    this.imgSlidePosition();
    this.addEvents();
  }
}
