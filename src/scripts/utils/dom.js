export default class DOM {
  constructor(document) {
    this.document = document;
  }

  static insertHtml(element, position, html) {
    return element.insertAdjacentHTML(position, html);
  }

  querySelector(selector) {
    return this.document.querySelector(selector);
  }

  querySelectorAll(selector) {
    return [...this.document.querySelectorAll(selector)];
  }

  createElement(tagName) {
    return this.document.createElement(tagName);
  }


  findElementsByClassName(className) {
    return [...this.document.getElementsByClassName(className)];
  }

  findElementByClassName(className) {
    const elements = this.findElementsByClassName(className);
    if (elements.length > 0) {
      return elements[0];
    }
    return null;
  }

  addListener(target, type, listener, ...args) {
    if (typeof target === 'object' && 'addEventListener' in target) {
      target.addEventListener(type, listener);
    } else if (typeof target === 'string') {
      const elements = [...this.document.querySelectorAll(target)];

      if (elements.length > 0) {
        elements.forEach(element => element.addEventListener(type, listener, ...args));
      }
    }
  }

  removeListener(target, type, listener, ...args) {
    if (typeof target === 'object' && 'addEventListener' in target) {
      target.removeEventListener(type, listener);
    } else if (typeof target === 'string') {
      const elements = [...this.document.querySelectorAll(target)];

      if (elements.length > 0) {
        elements.forEach(element => element.removeEventListener(type, listener, ...args));
      }
    }
  }
}
