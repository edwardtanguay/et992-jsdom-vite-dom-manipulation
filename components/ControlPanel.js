export const ControlPanel = () => {

	setTimeout(() => {
		const newTitleElem = document.querySelector('.newTitle');
		const btnChangeForm = document.querySelector('.btnChangeForm');
		const btnChangeText = document.querySelector('.btnChangeText');
		const messageElem = document.querySelector('.message');

		btnChangeForm.style.marginBottom = '1rem';

		btnChangeForm.addEventListener("click", () => {
			newTitleElem.style.backgroundColor = 'yellow';
		});
		btnChangeText.addEventListener("click", () => {
			messageElem.innerText = "Changed by control panel";
		});
	});

	return /*html*/ `
	
	<fieldset>
		<legend>ControlPanel</legend>
		<div>
		<button class="btnChangeForm">Change form field background color</button>
		</div>
		<div>
		<button class="btnChangeText">Change button area text</button>
		</div>
	</fieldset>
	`;
};