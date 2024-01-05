import { ButtonArea } from './components/ButtonArea';
import { MainForm } from './components/MainForm';
import './reset.css';
import './style.css';

document.querySelector('#app').innerHTML = `
	${MainForm()}
	${ButtonArea()}
`;