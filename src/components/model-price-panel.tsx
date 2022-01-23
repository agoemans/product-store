import React from 'react';
import styled from 'styled-components';
import { ModelPriceInfo } from '../types/model-price-info';

const PanelContainer = styled.div`
	display: flex;
	flex-direction: column;
  	width: 360px;
`;

const TextBase = styled.div`
	font-family: 'Heebo',sans-serif;
	padding: 10px;
	align-items: center;
`;

const FullPriceContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const FullPriceAmount = styled(TextBase)`	
	font-size: 32px;
  	color: #0096c7;  	
  	font-weight: bolder;
`;

const LeaseContainer = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: 1%;
  	border: 1px solid #0096c7;
	background-color: #f9f9f9f9;
	min-height: 50px;
	justify-content: space-between;
	align-items: center;
`;

const LeaseTitle = styled(TextBase)`	
	font-size: 16px;
  	color: #343a40;  	
`;

const LeaseContent = styled(TextBase)`	
	font-size: 16px;
  	font-weight: bold;
  	color: #343a40;  	
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function ModelPricePanel (props: ModelPriceInfo) {
	const { monthlyPrice, promotionPriceDisplay, numOfMonths } = props;
	return (
		<PanelContainer>
			<FullPriceContainer>
				<FullPriceAmount>{promotionPriceDisplay}</FullPriceAmount>
			</FullPriceContainer>
			<LeaseContainer>
				<LeaseTitle>Lease plan of {numOfMonths} months</LeaseTitle>
				<LeaseContent>{monthlyPrice} / mnth</LeaseContent>
			</LeaseContainer>
			<Spacer/>
		</PanelContainer>
	);
}
