export const MainForm = () => {

	setTimeout(() => {
		const messageTitleElem = document.querySelector('.title');
		const newTitleElem = document.querySelector('.newTitle');
		const btnChangeTitleElem = document.querySelector('.btnChangeTitle');

		messageTitleElem.style.color = 'green';
		messageTitleElem.style.marginBottom = '1rem';
		newTitleElem.value = 'new title text'

		btnChangeTitleElem.addEventListener("click", () => {
			messageTitleElem.innerText = newTitleElem.value;
		});
	});

	return /*html*/ `
	<fieldset>
		<legend>MainForm</legend>
		<form>
			<p class="title">original title</p>
			<input class="newTitle" type="text"> <button type="button" class="btnChangeTitle">Change</button>	
		</form>
	</fieldset>
	`;
};