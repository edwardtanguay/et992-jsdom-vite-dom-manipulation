export const ButtonArea = () => {

	setTimeout(() => {
		const btnColorElem = document.querySelector('.btn-color');

		btnColorElem.addEventListener("click", () => {
			btnColorElem.style.backgroundColor = "red";
			btnColorElem.style.color = "yellow";
		});
	}, 0);

	return `
	<button class="btn-color">Change color</button>
	<button class="btn-text-color">Change text color</button>
	`;
};

