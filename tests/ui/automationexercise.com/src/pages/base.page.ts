import { Locator, Page } from '@playwright/test';

export class BasePage {
  public url = '';
  readonly page: Page;
  readonly cookieBanner: Locator;
  constructor(page: Page) {
    this.page = page;
    this.cookieBanner = page.getByLabel('Consent', { exact: true });
  }

  async goto(parameters = ''): Promise<void> {
    await this.page.goto(`${this.url}${parameters}`, {
      waitUntil: 'domcontentloaded',
    });
    await this.cookiesBannerHandler();
  }

  async cookiesBannerHandler(): Promise<void> {
    await this.page.addLocatorHandler(this.cookieBanner, async () => {
      await this.cookieBanner.click();
    });
  }
}
