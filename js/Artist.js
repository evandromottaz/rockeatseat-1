class Artist {
  constructor(arrow, container) {
    this.arrow = document.querySelector(arrow);
    this.container = document.querySelector(container);
    this.containerHeight = window.getComputedStyle(this.container).height;

    this.init();
  }

  clearPx() {
    return parseInt(this.containerHeight.replace('px', ''));
  }

  onLoad() {
    this.container.style.height = this.clearPx() / 2 + 'px';
  }

  handleClick() {
    const hasActiveClass = this.arrow.classList.contains('active');
    if (hasActiveClass) {
      this.arrow.classList.remove('active');
      this.container.style.height = this.clearPx() / 2 + 'px';
      this.arrow.innerText = 'Ver todos os artistas';
    } else {
      this.arrow.classList.add('active');
      this.container.style.height = this.clearPx() + 'px';
      this.arrow.innerText = 'Ver menos';
    }
  }

  addEvents() {
    this.arrow.addEventListener('touchstart', () => this.handleClick());
    this.arrow.addEventListener('click', () => this.handleClick());
  }

  init() {
    this.onLoad();
    this.addEvents();
  }
}

export default Artist;
