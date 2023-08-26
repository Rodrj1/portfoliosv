import searcher from '$lib/images/searcher.webp';
import anylthin from '$lib/images/anylthinbattle.webp';
import arcfiction from '$lib/images/arcfiction.webp';
import cemetery from '$lib/images/cemetery.webp';
import dualipa from '$lib/images/dua.webp';

export const projectsPreview = [
	{
		name: 'Basic Agency Concept',
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/0e11b9e81dbff0e91cdf326ac726a1b28233636f-870x582.jpg?w=720&fm=webp&q=65',
		imageAlt: 'The Webby Awards Logo',
		link: 'https://basicagencymock.netlify.app/'
	},
	{
		name: 'Dua Lipa Albums',
		image: dualipa,
		imageAlt: 'Dua Lipa Concept two albums.',
		link: 'https://dualipaconcept.netlify.app/'
	},
	{
		name: 'Forest of An Ylthin',
		image: anylthin,
		imageAlt: 'Card Battle from the game of An Ylthin',
		link: '/projects/anylthin'
	},
	{
		name: 'ARCFiction',
		image: arcfiction,
		imageAlt: 'Home menu featuring multiple tv shows',
		link: '/projects/arcfiction'
	},
	{
		name: 'City of Hithair',
		image: cemetery,
		imageAlt: 'Cemetery Levle with skeletons from the game: City of Hithair',
		link: '/projects/cityofhithair'
	},
	{
		name: 'Google Custom Design',
		image: searcher,
		imageAlt: 'Google Searcher',
		link: '/projects/googleclone'
	}
];
