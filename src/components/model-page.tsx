import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectProducts } from '../reducers';
import { Model } from '../types/model';
import { Product } from '../types/product';
import InfoPanel from './info-panel';
import SpecPanel from './spec-panel';
import ModelPricePanel from './model-price-panel';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-family: 'Heebo', sans-serif;
	font-size: 50px;
	margin-bottom: 4px;
`;

const ExtraInfoContainer = styled.div`
  	display: flex;
`;

const RatingsText = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 12px;
  	color:#6c757d;
`;

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;height: 600px;  	
`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  	justify-content: space-evenly;
`;

const BgImageContainer = styled.div`
    display: flex;    
    padding: 2px;
    margin: 2px;
    height: 500px;
    width: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;  
`;

const GalleryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  	margin: 0 10px;
`;

const GalleryImage = styled.img`
	display: flex;
	align-items: center;
	background-color: #f9f9f9;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 5%;
	box-sizing: border-box;
	height: 64px;
	width: 64px;    
	margin: 0 5px;
	cursor: pointer;
	box-shadow: 1px 1px 1px #8ac7f39c;
    &:hover {
      border: 2px solid #0096c7;
    }
`;

const LeftPanel = styled.div`
	display: flex;
	flex-direction: column;		
  	justify-content: center;
  	align-items: flex-start;
`;

const BuyNowText = styled.div`
	display: flex;
	font-family: 'Heebo', sans-serif;
	background-color:#23a96f;
	color: white;
	text-shadow: 1px 1px 1px #023e8a85;
	width: 360px;
	height: 50px;
	
	justify-content: center;
	align-items: center;
	font-size: 20px;
`;

const Spacer = styled.div`
    flex: 1 1 auto;
`;

export default function ModelPage () {
	const products = useSelector(selectProducts);

	const useQuery = () => {
		const { search } = useLocation();
		return React.useMemo(() => new URLSearchParams(search), [search]);
	};

	const query = useQuery();
	const familyId = query.get('familyId');
	const modelCode = query.get('modelCode');
	const filteredProducts: Product[] = products.filter((product: Product) => product.familyId === familyId);
	const product:Product = filteredProducts[0];
	const filteredModels: Model[] = product.models.filter((model: Model) => model.modelCode === modelCode);
	console.log(filteredModels);
	const model: Model = filteredModels[0];

	const { displayName, ratings, reviewCount, thumbUrl, chipDetails: { memoryDetail, colorName }, galleryImage, promotionText } = model;
	const { monthlyPriceInfo: { monthlyPrice, numOfMonths }, promotionPriceDisplay, buyText } = model;
	const [mainImgUrl, setMainImgUrl] = useState('');

	useEffect(() => {
		setMainImgUrl(thumbUrl);
	}, [setMainImgUrl]);

	return (
		<Wrapper>
			<HeaderContainer>
				<Title>{displayName}</Title>
				<ExtraInfoContainer>
					<RatingsText>Ratings:{ratings} ({reviewCount} reviews)</RatingsText>
				</ExtraInfoContainer>
				<Spacer/>
			</HeaderContainer>
			<MiddleContainer>
				<LeftPanel>
					<BgImageContainer style={{ backgroundImage: `url('https:${mainImgUrl}')` }} />
					<Spacer/>
					<GalleryContainer>
						{galleryImage.map((galleryImg: string, idx: number) =>
							<GalleryImage key={`galley-image-${idx}`}
										  style={{ backgroundImage: `url('https:${galleryImg}')` }}
										  onClick={() => {
											  setMainImgUrl(galleryImg);
										  }}
							/>
						)}
					</GalleryContainer>
				</LeftPanel>
				<RightPanel>
					<InfoPanel title='Color' info={colorName}/>
					<InfoPanel title='Capacity' info={memoryDetail}/>
					<SpecPanel title='Tech Specs' promoText={promotionText}/>
					<ModelPricePanel monthlyPrice={monthlyPrice} promotionPriceDisplay={promotionPriceDisplay} numOfMonths={numOfMonths}/>
					<BuyNowText>{buyText}</BuyNowText>
				</RightPanel>
			</MiddleContainer>
		</Wrapper>
	);
}
