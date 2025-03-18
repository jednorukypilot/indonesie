export type Section = {
	name: string;
	name_short: string;
	color: string;
	styleId: string;
	url: string;
	note: string;
};

export type Device = {
	image: string;
	name: string;
	note?: string | null;
};

export interface TileInfo {
	image: string | null;
	title: string | null;
	name: string | null;
	note: string | null;
}

export type Doctor = {
	name: string;
	image: string;
	education: string;
	focus: string;
	interests: string;
	phone: string;
	email: string;
};
