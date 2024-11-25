import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify Product Page', () => {
  test('should display product details correctly  @logged', async ({
    productsPage,
    productPage,
  }) => {
    await productsPage.goToAllProducts();
    await productPage.goToFirstProduct();
    await expect(productPage.productName).toBeVisible();
    await expect(productPage.productCategory).toBeVisible();
    await expect(productPage.productPrice).toBeVisible();
    await expect(productPage.productAvailability).toBeVisible();
    await expect(productPage.productCondition).toBeVisible();
    await expect(productPage.productBrand).toBeVisible();
  });
});
