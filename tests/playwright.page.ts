import { Locator, Page } from '@playwright/test';

export class PlaywrightPage {
  button: Locator;

  constructor(private page: Page) {
    this.button = page.getByRole('link', { name: 'Get started' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
  }
}
