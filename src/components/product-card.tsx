import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Product } from '../types/product';
import { Model } from '../types/model';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-shadow: 2px 2px 2px #8f8f8f3b;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    display: flex;
    font-family: 'Heebo', sans-serif;
    font-size: 32px;
    margin-bottom: 4px;
`;

const SubCategory = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Heebo', sans-serif;
    font-size: 18px;
`;

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
`;

const BgImageContainer = styled.div`
    display: flex;    
    padding: 2px;
    margin: 2px;
    height: 300px;
    width: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;  
`;

const ModelIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModelIcon = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    height: 20px;
    width: 20px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      border: 1px solid #6b705c;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    height: 100px;
    width: 100px;    
    background-color: #0096c7;
    justify-content: center;
    box-shadow: 2px 2px 4px #023e8a8c;  
`;

const BuyNowText = styled.div`
    display: flex;
    font-family: 'Heebo', sans-serif;
    font-size: 18px;    
    color: #caf0f8;
    text-shadow: 1px 1px 1px #023e8a85;
`;

const PriceText = styled.div`
    display: flex;
    font-family: 'Heebo', sans-serif;  
    color: #caf0f8;
    font-size: 22px;
    font-weight: bold;
    text-shadow: 1px 1px 1px #023e8a85;
`;

const PromotionText = styled.div`
    display: flex;
    align-items: center;
`;

const LearnMoreContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LearnMoreBtn = styled.button`    
    border-radius: 20px;
    padding: 10px 24px;
    border: 1px solid #6b705c;
    background-color: rgba(0, 0, 0, 0);
    color: #6b705c;
    display: inline-block;
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    align-self: center;

    &:hover {
      color: white;
      background-color: #6b705c;
    }
`;

export default function ProductCard (props: Product) {
    const { title, subcategory, models } = props;
    const [imageUrl, setImageUrl] = useState('');
    const [promotionTexts, setPromotionTexts] = useState([]);
    const [price, setPrice] = useState('');
    const [buyNowText, setBuyNowText] = useState('');

    useEffect(() => {
        setImageUrl(models[0].thumbUrl);
        console.log('what is this', imageUrl, models);
    }, [setImageUrl]);

    return (
        <Wrapper>
            <HeaderContainer>
                <Title>{title}</Title>
                <SubCategory>{subcategory}</SubCategory>
            </HeaderContainer>
            <MiddleContainer>
                <LeftPanel>
                    <BgImageContainer style={{ backgroundImage: `url('https:${imageUrl}')` }}/>
                    <ModelIconContainer>
                        {models.map((model: Model) =>
                            <ModelIcon key={model.modelCode}
                                       style={{ backgroundColor: `${model.chipDetails.color}` }}
                                       onClick={() => {
                                           setImageUrl(model.thumbUrl);
                                           setPromotionTexts(model.promotionText);
                                           setPrice(model.promotionPriceDisplay);
                                           setBuyNowText(model.buyText);
                                       }}
                            />
                        )}
                    </ModelIconContainer>
                </LeftPanel>
                <RightPanel>
                    {/*{promotionTexts.map((promotionText: string, idx: number) =>*/}
                    {/*    <PromotionText key={`promotion-text-${idx}`}>{promotionText}</PromotionText>*/}
                    {/*)}*/}
                    <PriceContainer>
                        <BuyNowText>{buyNowText}</BuyNowText>
                        <PriceText>{price}</PriceText>
                    </PriceContainer>
                    <LearnMoreContainer>
                        <LearnMoreBtn>click to learn more</LearnMoreBtn>
                    </LearnMoreContainer>
                </RightPanel>
            </MiddleContainer>
        </Wrapper>
    );
}
