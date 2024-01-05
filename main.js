import { ButtonArea } from './components/ButtonArea';
import { MainForm } from './components/MainForm';
import './style.css';

document.querySelector('#app').innerHTML = `
	<p class="message">original message</p>
	${MainForm()}
	<hr>
	${ButtonArea()}
`;