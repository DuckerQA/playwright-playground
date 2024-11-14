/* eslint-disable no-console */

/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test';

test('RANDOM TEST 123 @logged', async ({ page }) => {
  console.log(process.env.BASE_URL);
  await page.goto('/');
  await page.addLocatorHandler(
    page.getByLabel('Consent', { exact: true }),
    async () => {
      await page.getByLabel('Consent', { exact: true }).click();
    },
  );

  await page.getByRole('link', { name: ' Women' }).click();
  await page.locator('#Women li').filter({ hasText: 'Tops' }).click();
  await page.getByRole('link', { name: 'Tops' }).click();
  console.log('TEST DONE');
  //   await page.locator('.overlay-content > .btn').first().click();
  //   await page.getByRole('button', { name: 'Continue Shopping' }).click();
});
