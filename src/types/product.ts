import { Model } from './model';

export interface Product {
    title: string;
    subcategory: string;
    familyId: string;
    models: Model[];
}

export interface Products {
    products: Product [];
}
