import Modal from './Modal.js';
import Artist from './Artist.js'

const modalElement = document.querySelector('[data-modal]')
const arrowArtist = document.querySelector('.bottom-text')

const modal = new Modal(modalElement)
const artist = new Artist(arrowArtist)