class Modal {
  constructor(modal) {
    this.modal = modal;
    this.onClick(this.modal)
  }

  handleClick(e) {
    const body = document.querySelector('body')
    const nav = document.querySelector('.navigation')
    const cta = document.querySelector('.cta')

    if(!e.parentElement.classList.contains('active')) {
      e.parentElement.classList.add('active')
      nav.classList.add('active')
      cta.classList.add('active')
      nav.appendChild(cta)
      body.setAttribute('style','overflow-y:hidden')
    }
    else {
      e.parentElement.classList.remove('active')
      nav.classList.remove('active')
      body.removeAttribute('style')
      cta.classList.remove('active')
      e.parentElement.parentElement.appendChild(cta)
    }
  }

  onClick(modal) {
    modal.addEventListener('click', ({currentTarget}) => {
      this.handleClick(currentTarget)
    })
  }
}

export default Modal;