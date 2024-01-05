import { ButtonArea } from './components/ButtonArea';
import './style.css';

document.querySelector('#app').innerHTML = `
	<p class="message">original message</p>
	${ButtonArea()}
`;