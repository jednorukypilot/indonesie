import type { Device, Doctor } from '../../lib/types';

export const sectionTitle = 'Terénní veterinární medicína koní';

export const servicesNote =
	'Ternénní veterinární medicína koní. vyjížíme zejména v Praze a Středočeském kraji. Po\u00A0dohodě je možné vyjet do celé\u00A0ČR.';

export const servicePoints = [
	'akutní medicína',
	'interní medicína',
	'předkupní vyšetření',
	'ortopedie',
	'stomatologie',
	'chirurgie',
	'preventivní péče'
];

export const doctors: Doctor[] = [
	{
		name: 'MVDr. Barbora Schillová',
		image: 'favicon.png',
		education: 'Vystudovala Veterinární a farmaceutickou univerzitu v Brně',
		focus: 'Zaměření',
		interests: 'Zájmy',

		phone: '+420 777 777 777',
		email: 'emailnadoktorku@seznam.cz'
	},
	{
		name: 'MVDr. Monika Jasanská',
		image: 'favicon.png',
		education: 'Vystudovala Veterinární univerzitu v Brně',
		focus: 'Zaměření',
		interests: 'Zájmy',
		phone: '+420 777 777 777',
		email: 'emailnadoktorku@seznam.cz'
	},
	{
		name: 'MVDr. Magda xxx',
		image: 'favicon.png',
		education: 'Vystudovala Veterinární univerzitu v Košicích',
		focus: 'Zaměření',
		interests: 'Zájmy',
		phone: '+420 777 777 777',
		email: 'emailnadoktorku@seznam.cz'
	}
];

export const devices: Device[] = [
	{
		image: 'favicon.png',
		name: 'RTG',
		note: 'Rentgen'
	},
	{
		image: 'favicon.png',
		name: 'Sono',
		note: 'Ultrazvuk'
	},
	{
		image: 'favicon.png',
		name: 'Bruska',
		note: 'Zubní broušení'
	},
	{
		image: 'favicon.png',
		name: 'Endoskop',
		note: 'Endoskopie'
	}
];
