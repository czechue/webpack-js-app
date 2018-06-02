import _ from 'lodash';
import '../styles/style.scss';
// import stockImage from './images/stock.jpg'
import printMe from './print.js';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// Lodash, now imported by this script
	element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');
	element.classList.add('hello');

	// Add the image to our existing div.
	// const myImg = new Image();
	// myImg.src = stockImage;
	// element.appendChild(myImg);

	// Output management
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());

// Enabling Hot Module Replacement
if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module! ');
		printMe();
	});
}
