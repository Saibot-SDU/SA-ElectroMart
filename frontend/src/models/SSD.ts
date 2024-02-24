import { ProductType } from "./ProductType";

export class SSD {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate: number = 0.25;
  public discountRate: number = 0.15;
  public productType: ProductType = ProductType.SSD;

  constructor(title: string, imageUrl: string, basePrice: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.basePrice = basePrice;
  }

  public getPrice(): number {
    return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
  }
}
