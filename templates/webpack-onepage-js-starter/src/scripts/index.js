function testTextComponent() {
  const element = document.createElement('div');

  element.innerHTML = 'This text is injected by JS file';
  element.innerHTML = process.env.NODE_ENV.toString();
  element.classList.add('hello');
  element.classList.add('hello--man');

  return element;
}


document.body.appendChild(testTextComponent());
