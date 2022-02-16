import Modal from './Modal.js';
import Artist from './Artist.js';
import Carousel from './Carousel.js';

new Modal('[data-modal]');

new Artist('.bottom-text', '.best-artist .container');

new Carousel('.gallery', '.wrapper').init();
