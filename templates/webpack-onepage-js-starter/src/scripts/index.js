function component() {
  const element = document.createElement('div');

  element.innerHTML = 'From JS file';
  element.classList.add('hello');
  element.classList.add('normal');

  return element;
}

document.body.appendChild(component());
