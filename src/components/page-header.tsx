import React from 'react';
import styled from 'styled-components';
import {	useHistory } from 'react-router-dom';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 100px;
	padding: 10px;
	background-color: #343a40;
	color: white;
	cursor: pointer;
`;

const Header = styled.h2`
	display:flex;
	font-family: 'Heebo',sans-serif;
	color: white;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-size: 48px;
	font-weight: 100;
	margin: 0;
`;

export default function PageHeader () {
	const history = useHistory();
	const goHome = () => history.push('/');

	return (
		<Wrapper onClick={goHome}>
			<Header>Product Page</Header>
		</Wrapper>
	);
}
