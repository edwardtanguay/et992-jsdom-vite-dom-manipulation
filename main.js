import { ButtonArea } from './components/ButtonArea';
import './style.css';

document.querySelector('#app').innerHTML = `
	<p class="message">original message</p>
	${ButtonArea()}
`;

const messageElem = document.querySelector('.message');
const btnTextColorElem = document.querySelector('.btn-text-color');

messageElem.style.color = 'red';
messageElem.style.backgroundColor = 'lightblue';
messageElem.style.width = '20rem';
messageElem.style.padding = '1rem';
messageElem.style.borderRadius = '.5rem';
messageElem.style.border = '2px solid black';
messageElem.style.boxShadow = '5px 5px 1px #ff0000, 10px 10px 1px #0000ff';
messageElem.style.fontSize = "3rem";
messageElem.innerHTML = "Hello <b> World </b> ";

// event
btnTextColorElem.addEventListener("click", () => {
	messageElem.style.color = "blue";
});