import { LoginUserModel } from '../models/user.model';
import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class LoginPage extends BasePage {
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly validationLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.loginEmail = page.locator('[data-qa="login-email"]');
    this.loginPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.logoutButton = page.getByRole('link', { name: 'Logout' }); // page.getByText('Logout', { exact: true }) alternative
    this.validationLocator = page.locator('.login-form p');
  }

  async login(userLogin: LoginUserModel): Promise<void> {
    await this.signUpLoginLink.click();
    await this.loginEmail.fill(userLogin.email);
    await this.loginPassword.fill(userLogin.password);
    await this.loginButton.click();
  }

  async checkIfLoginIsDisplayed(userLogin: string): Promise<Locator> {
    return this.page
      .locator('li')
      .filter({ hasText: `Logged in as ${userLogin}` });
  }
}
