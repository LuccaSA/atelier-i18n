export interface IPrincipal {
	id: number;
	name: string;
	firstName: string;
	lastName: string;
	culture: ICulture;
	mail: string;
}

export interface ICulture {
	id: number;
	code: string;
	name: string;
}