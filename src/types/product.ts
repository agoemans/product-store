import { Model } from './model';

export interface Product {
    title: string;
    subcategory: string;
    familyId: string;
    models: Model[];
    chipOptions?: ChipOptions,
    chipColors?: ChipColors
}

export interface Products {
    products: Product [];
}

export interface ChipOptions {
	name: string;
	type: string;
}

export interface ChipColors {
	name: string;
	color: string;
}
