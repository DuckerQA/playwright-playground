import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify Products Page', () => {
  test('should navigate to products page and display list of products @logged', async ({
    productsPage,
  }) => {
    await productsPage.goToAllProducts();
    await expect(productsPage.productsTitle).toContainText('All Products');
    await expect(productsPage.productsList).toBeVisible();
    await expect(productsPage.firstProduct).toBeVisible();
  });

  test('should navigate to products page and view all subcategories from the WOMEN category', async ({
    productsPage,
  }) => {
    await productsPage.goToAllProducts();
    await productsPage.womenCategory.click();
    await expect(productsPage.womenSubcategory('Dress')).toBeVisible();
    await expect(productsPage.womenSubcategory('Tops')).toBeVisible();
    await expect(productsPage.womenSubcategory('Saree')).toBeVisible();
  });
});
