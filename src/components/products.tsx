import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    fetchProducts, selectProducts
} from '../reducers';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`
    display: flex;
    flex-direction: column;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductTitle = styled.h3`
    display: flex;
`;

const ModelsContainer = styled.div`
    display: flex;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Button = styled.button`
    display: flex;
    font-size: 1.5em;
    width: 40px;
    height: 40px;
`;

export default function Products () {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Header>{products.map((product: any) => (
                <ProductContainer key={product.familyId}>
                    <ProductTitle>
                        {product.fmyMarketingName}
                    </ProductTitle>
                    <div>{product.categorySubTypeEngName}</div>
                    {product.modelList.map((model: any) => (
                        <ModelsContainer key={model.modelCode}>{model.displayName}</ModelsContainer>
                    ))}
                </ProductContainer>
            ))}</Header>
            <ButtonContainer>
                <Button aria-label="Fetch data" onClick={() => dispatch(fetchProducts())}>FETCH</Button>
            </ButtonContainer>
        </Wrapper>
    );
}
