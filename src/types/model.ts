export interface Model {
    modelCode: string;
    displayName: string;
    thumbUrl: string;
    thumbUrlAlt: string;
    ratings: string;
	reviewCount: string;
    galleryImage: string [];
    galleryImageAlt: string [];
    ctaType: string;
    promotionText: string[];
    promotionPriceDisplay: string;
    productType: string;
    productSubType: string;
    buyText: string;
    chipDetails: ChipDetails;
	monthlyPriceInfo: MonthlyPriceInfo;
}

export interface Models {
    models: Model [];
}

export interface ChipDetails {
	colorLabel: string;
	colorName: string;
    color: string;
    memoryText: string;
    memoryDetail: string;
}

export interface MonthlyPriceInfo {
	monthlyPrice: string;
	numOfMonths: string;
}
