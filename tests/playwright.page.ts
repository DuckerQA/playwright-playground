import { Page } from '@playwright/test';

export class PlaywrightPage {
  button = page.getByRole('link', { name: 'Get started' });

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
  }
}
