import React, { useEffect } from 'react';
import styled from 'styled-components';

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

export default function ProductsPage (props: any) {
    const { products } = props;
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
        </Wrapper>
    );
}
