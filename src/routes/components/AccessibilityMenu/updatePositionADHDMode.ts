export const updatePosition = (
	event: MouseEvent & {
		currentTarget: EventTarget & HTMLDivElement;
	}
) => {
	let topBackground = document.getElementById('topBackground');
	let bottomBackground = document.getElementById('bottomBackground');

	if (topBackground && bottomBackground) {
		let mouseY = event.clientY - 60;
		let windowHeight = window.innerHeight;

		topBackground.style.height = mouseY + 'px';
		bottomBackground.style.height = windowHeight - mouseY - 120 + 'px';
	}
};
