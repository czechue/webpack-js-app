import styles from '../styles/main.scss';
console.log(styles);
const app = document.querySelector('#app');

app.innerHTML = 'Test Name 2';
app.classList.add('normal');
app.insertAdjacentHTML('afterbegin', `
  <p class="heading--lg">Add some testing text</p>
`)
