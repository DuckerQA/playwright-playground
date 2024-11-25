import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ProductPage extends BasePage {
  readonly viewFirstProduct: Locator;
  readonly productName: Locator;
  readonly productCategory: Locator;
  readonly productPrice: Locator;
  readonly productAvailability: Locator;
  readonly productCondition: Locator;
  readonly productBrand: Locator;
  constructor(page: Page) {
    super(page);
    this.viewFirstProduct = this.page
      .locator('.features_items .choose > .nav > li > a')
      .first();
    this.productName = this.page.locator('.product-information h2');
    this.productCategory = this.page.getByText('Availability');
    this.productPrice = this.page.locator('.product-information span > span');
    this.productAvailability = this.page.getByText('Availability:');
    this.productCondition = this.page.getByText('Condition:');
    this.productBrand = this.page.getByText('Brand:');
  }
  async goToFirstProduct(): Promise<void> {
    await this.viewFirstProduct.click();
  }
}
