export default class Carousel {
  constructor(gallery, wrapper) {
    this.gallery = document.querySelector(gallery);
    this.wrapper = document.querySelector(wrapper);
    this.slide = { start: 0, movement: 0, end: 0 };
  }

  imgSlidePosition(finalPosition) {
    const imgs = [...this.wrapper.children];
    const firstImg = imgs[0];
    let wrapperFullWidth = 0;

    imgs.forEach((element) => {
      const marginImg = +window
        .getComputedStyle(element)
        .marginRight.replace('px', '');

      wrapperFullWidth += element.offsetWidth + marginImg;
    });

    if (finalPosition >= firstImg.offsetLeft) {
      finalPosition = 0;
    } else if (finalPosition - this.wrapper.offsetWidth < -wrapperFullWidth) {
      finalPosition = -wrapperFullWidth + this.wrapper.offsetWidth;
    }

    this.moveSlide(finalPosition);
  }

  moveSlide(finalPosition) {
    this.slide.savedPosition = finalPosition;
    this.wrapper.style.transform = `translate3d(${finalPosition}px, 0, 0)`;
  }

  onStart(event) {
    event.preventDefault();
    this.slide.start = event.clientX;
    this.gallery.addEventListener('mousemove', this.onMove);
  }

  updatePosition(clientX) {
    this.slide.movement = (this.slide.start - clientX) * 1.4;
    return this.slide.end - this.slide.movement;
  }

  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.imgSlidePosition(finalPosition);
  }

  onEnd() {
    this.gallery.removeEventListener('mousemove', this.onMove);
    this.slide.end = this.slide.savedPosition;
  }

  addEvents() {
    this.gallery.addEventListener('mousedown', this.onStart);
    this.gallery.addEventListener('mouseup', this.onEnd);
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
