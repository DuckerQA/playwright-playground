import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify Products Page', () => {
  test('should navigate to products page and display list of products @logged', async ({
    productsPage,
  }) => {
    await productsPage.goToAllProducts();
    await expect(productsPage.productsList).toBeVisible();
    await expect(productsPage.firstProduct).toBeVisible();
  });

  test('should navigate to products page and view all subcategories from the WOMEN category', async ({
    productsPage,
  }) => {
    const dressSubcategory = 'Dress';
    const topsSubcategory = 'Tops';
    const sareeSubcategory = 'Saree';
    await productsPage.goToAllProducts();
    await productsPage.womenCategory.click();
    await expect(productsPage.womenSubcategory(dressSubcategory)).toBeVisible();
    await expect(productsPage.womenSubcategory(topsSubcategory)).toBeVisible();
    await expect(productsPage.womenSubcategory(sareeSubcategory)).toBeVisible();
  });
});
