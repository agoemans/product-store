import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingStatus } from '../types/status';
import { ApplicationState } from '../types/reducer-state';
import { Product } from '../types/product';

const initialState: ApplicationState = {
	productList: [],
	status: LoadingStatus.Idle,
	error: 'none'
};
const url: string = 'https://searchapi.samsung.com/v6/front/b2c/product/card/detail/newhybris?siteCode=nl&modelList=SM-G990BLGDEUB,SM-G990BLVDEUB,SM-G990BZADEUB,SM-G990BZAGEUB,SM-G990BZWDEUB,SM-G990BLGGEUB,SM-G990BLVGEUB,SM-G990BZWGEUB,SM-F711BZKBEUB,SM-F711BLVBEUB,SM-F711BZGBEUB,SM-F711BZEBEUB,SM-F711BZKFEUB,SM-F711BLVFEUB,SM-F711BZGFEUB,SM-F711BZEFEUB,SM-F711BZABEUB,SM-F711BLIBEUB,SM-F711BZWBEUB,SM-F711BZAFEUB,SM-F711BLIFEUB,SM-F711BZWFEUB,SM-F926BZSDEUB,SM-F926BZGDEUB,SM-F926BZKDEUB,SM-F926BZSGEUB,SM-F926BZGGEUB,SM-F926BZKGEUB,SM-G991BZADEUB,SM-G991BZAGEUB,SM-G991BZIDEUB,SM-G991BZIGEUB,SM-G991BZVDEUB,SM-G991BZVGEUB,SM-G991BZWDEUB,SM-G991BZWGEUB,SM-G996BIDDEUB,SM-G996BIDGEUB,SM-G996BZKDEUB,SM-G996BZKGEUB,SM-G996BZRDEUB,SM-G996BZRGEUB,SM-G996BZSDEUB,SM-G996BZSGEUB,SM-G996BZVDEUB,SM-G996BZVGEUB,SM-G998BDBDEUB,SM-G998BDBGEUB,SM-G998BDBHEUB,SM-G998BZKDEUB,SM-G998BZKGEUB,SM-G998BZKHEUB,SM-G998BZNDEUB,SM-G998BZNGEUB,SM-G998BZNHEUB,SM-G998BZSDEUB,SM-G998BZSGEUB,SM-G998BZSHEUB,SM-G998BZTDEUB,SM-G998BZTGEUB,SM-G998BZTHEUB,SM-A528BLGCEUB,SM-A528BLVCEUB,SM-A528BZKCEUB,SM-A528BZKIEUB,SM-A528BZWCEUB,SM-T733NZKEEUB,SM-T220NZAAEUB,SM-P610NZAALUX,SM-T733NZKAEUB,SM-T733NLGAEUB,SM-T733NLIAEUB,SM-T733NZSAEUB,SM-T736BZKAEUB,SM-T736BZKEEUB,SM-T220NZSAEUB,SM-P610NZAELUX,SM-P610NZBALUX,SM-P610NZBELUX,QE55Q70AATXXN,QE65Q70AATXXN,QE75Q70AATXXN,QE85Q70AATXXN,QE55Q80AATXXN,QE65Q80AATXXN,QE75Q80AATXXN,QE85Q80AATXXN,QE50Q60AAUXXN,QE55Q60AAUXXN,QE65Q60AAUXXN,QE55QN95AATXXN,QE75QN95AATXXN&commonCodeYN=N&saleSkuYN=N&onlyRequestSkuYN=Y&keySummaryYN=N&shopSiteCode=nl';

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
	const response = await fetch(url);
	const result = await response.json();
	return result?.response?.resultData?.productList;
});

export const productslice = createSlice({
	name: 'products',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.status = LoadingStatus.Loading;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.status = LoadingStatus.Succeeded;
			state.productList = action.payload;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.status = LoadingStatus.Failed;
			state.error = 'Failed';
		});
	}
});

export const selectProducts = (state: any) => {
	const updatedList: Product [] = state.products?.productList?.map((product: any) => {
		const models: any = product.modelList.map((model: any) => {
			const { modelCode, displayName, thumbUrl, thumbUrlAlt, ratings, reviewCount, galleryImage, galleryImageAlt, ctaType, usp, promotionPriceDisplay, pviTypeName, pviSubtypeName, ctaEngText } = model;
			return {
				modelCode,
				displayName,
				thumbUrl,
				thumbUrlAlt,
				ratings: Math.round(ratings * 10) / 10,
				reviewCount,
				galleryImage,
				galleryImageAlt,
				ctaType,
				promotionText: usp,
				promotionPriceDisplay,
				productType: pviTypeName,
				productSubType: pviSubtypeName,
				buyText: ctaEngText,
				chipDetails: {
					colorLabel: model.fmyChipList[0].fmyChipType,
					colorName: model.fmyChipList[0].fmyChipLocalName,
					color: model.fmyChipList[0].fmyChipCode,
					memoryText: model.fmyChipList[1]?.fmyChipType,
					memoryDetail: model.fmyChipList[1]?.fmyChipLocalName
				},
				monthlyPriceInfo: {
					monthlyPrice: model.monthlyPriceInfo?.leasingMonthly,
					numOfMonths: model.monthlyPriceInfo?.leasingMonths
				}
			};
		});
		return {
			title: product.fmyMarketingName,
			subcategory: product.categorySubTypeEngName,
			familyId: product.familyId,
			models,
			chipOptions: product.chipOptions[1]?.optionList.map((chipOption: any) => {
				return { name: chipOption.optionLocalName, type: chipOption.optionCode };
			}),
			chipColors: product.chipOptions[0]?.optionList.map((chipOption: any) => {
				return { name: chipOption.optionLocalName, color: chipOption.optionCode };
			})
		};
	});
	return updatedList;
};
export const selectErrorMessage = (state: any) => state.error;
export const selectStatus = (state: any) => state.status;

export const selectModels = (state: any) => state.products?.productList?.find((product: any) => product.familyId === '409404'); // this is a test
export default productslice.reducer;
