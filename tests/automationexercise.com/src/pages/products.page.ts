import { BasePage } from './base.page';
import { Locator, Page, expect } from '@playwright/test';

export class ProductsPage extends BasePage {
  readonly tabProducts: Locator;
  readonly productsTitle: Locator;
  readonly firstProduct: Locator;
  readonly productsList: Locator;
  readonly womenCategory: Locator;
  readonly womenSubcategory: (name: string) => Locator;

  constructor(page: Page) {
    super(page);
    this.tabProducts = this.page.getByRole('link', {
      name: 'Products',
    });
    this.productsTitle = this.page.locator(
      '.features_items .title.text-center',
    );
    this.firstProduct = this.page.locator('.single-products').nth(0);
    this.productsList = this.page.locator('.features_items');
    this.womenCategory = this.page.getByRole('link', { name: 'Women' });
    this.womenSubcategory = (name: string) =>
      page.locator(`#Women ul li > a:has-text("${name}")`);
  }
  async goToAllProducts(): Promise<void> {
    await this.tabProducts.click();
    await expect(this.productsTitle).toContainText('All Products');
  }
}
