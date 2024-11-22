import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class TestCasePage extends BasePage {
  readonly tabTestCases: Locator;
  readonly titleTestCases: Locator;
  readonly collapsedElementTestCase1: Locator;
  readonly bodyTestCase1Details: Locator;
  constructor(page: Page) {
    super(page);
    this.tabTestCases = this.page.getByRole('link', {
      name: 'Test Cases',
      exact: true,
    });
    this.titleTestCases = this.page.locator('h2.title b');
    this.collapsedElementTestCase1 = this.page.getByRole('link', {
      name: 'Test Case 1: Register User',
    });
    this.bodyTestCase1Details = this.page.locator('#collapse1 .list-group');
  }
}
