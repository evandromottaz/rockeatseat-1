class Artist {
  constructor(arrow) {
    this.arrow = arrow;
    this.onTouch(this.arrow)
  }

  handleTouch(arrow) {
    const containerArtists = arrow.previousElementSibling
    if(containerArtists.getBoundingClientRect().height === 400) {
      const artists = document.querySelectorAll('.best-artist .container .card')
      let gap = 40
      let i = 0
      artists.forEach(artist => i += artist.getBoundingClientRect().height + gap);
      containerArtists.style.height = `${i}px`;
      arrow.innerText = 'Ver menos';
      arrow.classList.add('active')
    } else {
      containerArtists.style.height = '400px';
      arrow.innerText = 'Ver todos os artistas';
      arrow.classList.remove('active')
    }
  }

  onTouch(arrow) {
    arrow.addEventListener('touchstart', ({target}) => {
      this.handleTouch(target)
    })
  }
}

export default Artist;