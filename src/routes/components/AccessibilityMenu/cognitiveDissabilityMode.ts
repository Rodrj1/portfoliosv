export const addBordersForCognitive = (cognitiveDissabilityMode: boolean) => {
	const getAllElements = document.body.querySelectorAll('h2, h3, h4');

	const getLinks = document.body.querySelectorAll('a');

	if (cognitiveDissabilityMode === true) {
		getAllElements.forEach((el) => el.classList.add('cognitiveHeader'));

		getLinks.forEach((link) => link.classList.add('cognitiveLink'));
	} else {
		getAllElements.forEach((el) => el.classList.remove('cognitiveHeader'));

		getLinks.forEach((link) => link.classList.remove('cognitiveLink'));
	}
};
