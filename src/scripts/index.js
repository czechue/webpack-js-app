import _ from 'lodash';
import stockImage from '../images/stock.jpg';
import '../styles/style.scss';
import printMe from './modules/print.js';
import { cube } from './modules/math';

const navBarElem = document.querySelector('.navbar');

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// Lodash, now imported by this script
	element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');
	element.classList.add('hello');
	element.classList.add('hello--test');

	// Tree Shaking
	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(2)
	].join('\n\n');

	

	// Add the image to our existing div.
	const myImg = new Image();
	myImg.src = stockImage;
	element.appendChild(myImg);

	// Output management
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

function formComponent() {
	const formView = `
	<div class="login-page">
		<div class="form">
			<form name="loginForm" class="login-form">
				<input id="firstName" data-testid="firstName" type="text" placeholder="First Name" />
				<input id="lastName" data-testid="lastName" type="text" placeholder="Last Name" />
				<input id="email" data-testid="email" type="email" placeholder="Email" />
				<button id="login-button" data-testid="button" type="button">Submit</button>
			</form>
		</div>
	</div>
	`
	
	navBarElem.insertAdjacentHTML('afterbegin', formView);
}

function onSubmit() {
	const button = document.getElementById('login-button');
	const userData = {
		firstName: '',
		lastName: '',
		email: ''
	}

	const setUserData = function() {
		userData.firstName = document.getElementById('firstName').value;
		userData.lastName = document.getElementById('lastName').value;
		userData.email = document.getElementById('email').value;
	}

	const displayNewPanel = function () {
		const panelView = `
		<div data-testid="success" class="success">
			<p data-testid="success-firstName">First name: ${userData.firstName}</p>
			<p data-testid="success-lastName">Last name: ${userData.lastName}</p>
			<p data-testid="success-email">Email: ${userData.email}</p>
		</div>`
		navBarElem.insertAdjacentHTML('afterbegin', panelView)
	}

	button.addEventListener('click', () => {
		// const promise = new Promise((resolve => {
		// 	resolve(setUserData())
		// }))
		// promise.then(() => displayNewPanel() )
		setUserData()
		displayNewPanel()
	})
}


document.body.appendChild(component());
formComponent()
onSubmit()
