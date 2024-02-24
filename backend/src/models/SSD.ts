import { ProductType } from "./ProductType";

export class SSD {
    private title: string;
    private imageUrl: string;
    private basePrice: number;
    private taxRate: number = 0.25;
    private discountRate: number = 0.15;
    private productType: ProductType = ProductType.SSD;

    constructor(title: string, imageUrl: string, basePrice: number) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.basePrice = basePrice;
    }

    public getPrice(): number {
        return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
    }
}
