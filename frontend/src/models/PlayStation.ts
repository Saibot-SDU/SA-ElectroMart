export class PlayStation {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate: number = 0.25;
  public discountRate: number = 0.15;

  constructor(title: string, imageUrl: string, basePrice: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.basePrice = basePrice;
  }

  public getPrice(): number {
    return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
  }
}