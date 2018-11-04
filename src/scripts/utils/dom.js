export const insertHtml = (element, position, html) => {
  return element.insertAdjacentHTML(position, html);
};
export const querySelector = selector => document.querySelector(selector);
export const querySelectorAll = selector => [...document.querySelectorAll(selector)];
export const createElement = tagName => document.createElement(tagName);
export const findElementsByClassName = className => [...document.getElementsByClassName(className)];
export const findElementByClassName = (className) => {
  const elements = findElementsByClassName(className);
  if (elements.length > 0) {
    return elements[0];
  }
  return null;
};
export const addListener = (target, type, listener, ...args) => {
  if (typeof target === 'object' && 'addEventListener' in target) {
    target.addEventListener(type, listener);
  } else if (typeof target === 'string') {
    const elements = [...document.querySelectorAll(target)];

    if (elements.length > 0) {
      elements.forEach(element => element.addEventListener(type, listener, ...args));
    }
  }
};
export const removeListener = (target, type, listener, ...args) => {
  if (typeof target === 'object' && 'addEventListener' in target) {
    target.removeEventListener(type, listener);
  } else if (typeof target === 'string') {
    const elements = [...document.querySelectorAll(target)];

    if (elements.length > 0) {
      elements.forEach(element => element.removeEventListener(type, listener, ...args));
    }
  }
};
