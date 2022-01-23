import React from 'react';
import {
	Switch,
	Route,
	BrowserRouter as Router
} from 'react-router-dom';
import styled from 'styled-components';
import PageContent from './components/page-content';
import ModelPage from './components/model-page';

const Wrapper = styled.div`
    background-color: white;
    min-width: 76vw;
    height: 100%;
`;

export const App = () => {
	return (
		<Router>
			<Wrapper className='app'>
				<div className='app-content'>
					<Switch>
						<Route path='/model'>
							<ModelPage/>
						</Route>
						<Route path='/'>
							<PageContent/>
						</Route>
					</Switch>

				</div>
			</Wrapper>
		</Router>
	);
};
