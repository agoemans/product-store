import React from 'react';

import styled from 'styled-components';
import PageContent from './components/page-content';

const Wrapper = styled.div`
    background-color: white;
    min-width: 76vw;
    height: 100%;
`;

export const App = () => {
    return (
        <Wrapper className='app'>
            <div className='app-content'>
                <PageContent/>
            </div>
        </Wrapper>
    );
};
