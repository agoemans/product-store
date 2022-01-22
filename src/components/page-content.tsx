import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    fetchProducts,
    selectProducts,
    selectStatus
} from '../reducers';
import ProductsPage from './products-page';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function PageContent () {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [status, dispatch]);

    return (
        <Wrapper>
            <ProductsPage products={products}/>;
        </Wrapper>
    );
}
