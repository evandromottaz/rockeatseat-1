class Artist {
  constructor(arrow, container) {
    this.arrow = document.querySelector(arrow);
    this.container = document.querySelector(container);

    this.init();
  }

  onLoad() {
    this.handleClick();
  }

  sumImgsHeight() {
    const cards = this.container.querySelectorAll('.card');
    const gap = 40;
    let totalHeight = 0;

    cards.forEach((card) => (totalHeight += card.offsetHeight + gap));
    return totalHeight;
  }

  hasActiveClass() {
    return this.arrow.classList.contains('active') ? true : false;
  }

  handleClick() {
    this.arrow.classList.toggle('active');
    if (this.hasActiveClass()) {
      this.container.style.height = this.sumImgsHeight() / 2 + 'px';
    } else {
      this.container.style.height = this.sumImgsHeight() + 'px';
    }
  }

  addEvents() {
    this.arrow.addEventListener('touchstart', this.handleClick);
    this.arrow.addEventListener('click', this.handleClick);
  }

  bind() {
    this.handleClick = this.handleClick.bind(this);
  }

  init() {
    this.bind();
    this.addEvents();
  }
}

export default Artist;
