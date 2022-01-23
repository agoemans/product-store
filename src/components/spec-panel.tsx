import React from 'react';
import styled from 'styled-components';
import { SpecInfo } from '../types/spec-info';

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  	width: 100%;
  	border-bottom: 1px solid #495057;  
  	min-height: 200px;
`;

const PanelBase = styled.div`
	display: flex;
	flex-direction: row;
	font-family: 'Heebo',sans-serif;
	padding: 10px;
	align-items: baseline;
`;

const PanelTitle = styled(PanelBase)`
	font-size: 24px;
`;

const PanelContent = styled(PanelBase)`	
	font-size: 16px;
  	color: #495057;  	
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function SpecPanel (props: SpecInfo) {
	const { title, promoText } = props;
	return (
		<PanelContainer>
			<PanelTitle>{title}</PanelTitle>
			{promoText.map((text: string, idx: number) =>
				<PanelContent key={`promo-txt-${idx}`}>{text}</PanelContent>
			)}
			<Spacer/>
		</PanelContainer>
	);
}
