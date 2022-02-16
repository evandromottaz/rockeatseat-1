import Modal from './Modal.js';
import Artist from './Artist.js';
import Carousel from './Carousel.js';

const modalElement = document.querySelector('[data-modal]');
const arrowArtist = document.querySelector('.bottom-text');

new Modal(modalElement);

new Artist(arrowArtist);

new Carousel('.gallery', '.wrapper').init();
