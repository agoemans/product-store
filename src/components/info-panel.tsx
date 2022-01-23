import React from 'react';
import styled from 'styled-components';
import { PanelDetails } from '../types/info-panel';

const PanelContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
  	width: 100%;
  	border-bottom: 1px solid #495057;
  	min-height: 70px;
`;

const PanelBase = styled.div`
	display: flex;
	flex-direction: row;
	font-family: 'Heebo',sans-serif;
	padding: 10px;
	align-items: center;
`;

const PanelTitle = styled(PanelBase)`
	font-size: 24px;
`;

const PanelContent = styled(PanelBase)`	
	font-size: 16px;
  	color: #495057;
`;

export default function InfoPanel (props: PanelDetails) {
	const { title, info } = props;
	return (
		<PanelContainer>
			<PanelTitle>{title}</PanelTitle>
			<PanelContent>{info}</PanelContent>
		</PanelContainer>
	);
}
