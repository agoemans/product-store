export interface Model {
    modelCode: string;
    displayName: string;
    thumbUrl: string;
    thumbUrlAlt: string;
    ratings: string;
    galleyImage: string [];
    galleyImageAlr: string [];
    stockStatusText: string;
    promotionText: string[];
    promotionPriceDisplay: string;
    productType: string;
    productSubType: string;
    buyText: string;
    chipDetails: ChipDetails;
}

export interface Models {
    models: Model [];
}

export interface ChipDetails {
    color: string;
    memoryText: string;
    memoryDetail: string;
}
