function testTextComponent() {
    const element = document.createElement('div');

    element.innerText = '... or even from the JavaScript like that';
    element.classList.add('random');
    element.classList.add('random--dude');

    return element;
}

const div = document.querySelector('.center-js');
div.appendChild(testTextComponent());
