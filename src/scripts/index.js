import '../styles/main.scss';
import DOM from './utils/dom';

// import stockImage from '../images/stock.jpg';

export default class Header {
  constructor(document) {
    this.domUtils = new DOM(document);
  }
}
