export const ButtonArea = () => {

	setTimeout(() => {
		const btnColorElem = document.querySelector('.btn-color');
		const btnTextColorElem = document.querySelector('.btn-text-color');
		const messageElem = document.querySelector('.message');

		messageElem.style.color = 'red';
		messageElem.style.backgroundColor = 'lightblue';
		messageElem.style.width = '30rem';
		messageElem.style.padding = '1rem';
		messageElem.style.borderRadius = '.5rem';
		messageElem.style.border = '2px solid black';
		messageElem.style.boxShadow = '5px 5px 1px #ff0000, 10px 10px 1px #0000ff';
		messageElem.style.fontSize = "2rem";
		messageElem.innerHTML = "Hello <b> World </b> ";
		messageElem.style.margin = '0 0 1rem 0';

		btnColorElem.addEventListener("click", () => {
			btnColorElem.style.backgroundColor = "red";
			btnColorElem.style.color = "yellow";
		});

		btnTextColorElem.addEventListener("click", () => {
			messageElem.style.color = "blue";
		});
	}, 0);

	return /*html*/ `
	<fieldset>
		<legend>ButtonArea</legend>
		<p class="message">original message</p>
		<button class="btn-color">Change button color</button>
		<button class="btn-text-color">Change text color</button>
	</fieldset>
	`;
};

