export const MainForm = () => {

	setTimeout(() => {
		const messageTitleElem = document.querySelector('.title');
		const btnChangeTitleElem = document.querySelector('.btnChangeTitle');
		messageTitleElem.style.color = 'green';

		btnChangeTitleElem.addEventListener("click", () => {
			messageTitleElem.style.backgroundColor = "red";
		});
	});

	return `
		<form>
			<p class="title">original title</p>
			<input class="inputTitle" type="text"> <button type="button" class="btnChangeTitle">Change</button>	
		</form>
	`;
}