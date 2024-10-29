import { PlaywrightPage } from './playwright.page';
import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const button = page.getByRole('link', { name: 'Get started' });
  button.click();
  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});

test('get started link pom', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);
  await playwrightPage.goto();
  await playwrightPage.button.click();
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible();
});
