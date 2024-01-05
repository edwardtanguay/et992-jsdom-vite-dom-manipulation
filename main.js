import { ButtonArea } from './components/ButtonArea';
import { ControlPanel } from './components/ControlPanel';
import { MainForm } from './components/MainForm';
import './reset.css';
import './style.css';

document.querySelector('#app').innerHTML = `
	${MainForm()}
	${ButtonArea()}
	${ControlPanel()}
`;