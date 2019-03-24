function component() {
  const element = document.createElement('div');

  element.innerHTML = 'This text is injected by JS file';
  element.innerHTML = process.env.NODE_ENV.toString();
  element.classList.add('hello');
  element.classList.add('type');

  return element;
}

document.body.appendChild(component());
