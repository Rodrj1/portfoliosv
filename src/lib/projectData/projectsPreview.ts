import searcher from '$lib/images/searcher.webp';
import anylthin from '$lib/images/anylthinbattle.webp';
import arcfiction from '$lib/images/arcfiction.webp';
import cemetery from '$lib/images/cemetery.webp';
import dualipa from '$lib/images/newdua.webp';
import usingjikan from '$lib/images/usingjikan.png';

export const projectsPreview = [
	{
		name: 'Basic Agency Concept',
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/0e11b9e81dbff0e91cdf326ac726a1b28233636f-870x582.jpg?w=720&fm=webp&q=65',
		imageAlt: 'The Webby Awards Logo',
		link: 'https://basicagencymock.netlify.app/',
		type: 'Design'
	},
	{
		name: 'Dua Lipa Albums',
		image: dualipa,
		imageAlt: 'Dua Lipa Concept two albums.',
		link: 'https://dualipaconcept.netlify.app/',
		type: 'Design'
	},
	{
		name: 'Usingjikan',
		image: usingjikan,
		imageAlt: 'Usingjikan Logo.',
		link: 'https://usingjikan.netlify.app/',
		type: 'Design'
	},
	{
		name: 'Forest of An Ylthin',
		image: anylthin,
		imageAlt: 'Card Battle from the game of An Ylthin',
		link: '/projects/anylthin',
		type: 'Game'
	},
	{
		name: 'ARCFiction',
		image: arcfiction,
		imageAlt: 'Home menu featuring multiple tv shows',
		link: '/projects/arcfiction',
		type: 'Website'
	},
	{
		name: 'City of Hithair',
		image: cemetery,
		imageAlt: 'Cemetery Level with skeletons from the game: City of Hithair',
		link: '/projects/cityofhithair',
		type: 'Game'
	},
	{
		name: 'Google Custom Design',
		image: searcher,
		imageAlt: 'Google Searcher',
		link: '/projects/googleclone',
		type: 'Website'
	}
];
