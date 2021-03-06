import React from 'react';
import styled from 'styled-components';
import ProductCard from './product-card';
import { Product, Products } from '../types/product';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function ProductsPage (props: Products) {
	const { products } = props;
	return (
		<Wrapper>
			{products.map((product: Product) => (
				<ProductCard key={product.title} title={product.title} subcategory={product.subcategory} familyId={product.familyId} models={product.models}/>
			))}
		</Wrapper>
	);
}
