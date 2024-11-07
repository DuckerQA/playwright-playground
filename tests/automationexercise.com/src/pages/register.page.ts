import {
  RegisterUserInitModel,
  RegistrationDetailsModel,
} from '../models/user.model';
import { BasePage } from './base.page';
import { Locator, Page, expect } from '@playwright/test';

export class RegisterPage extends BasePage {
  readonly signUpName: Locator;
  readonly signUpEmail: Locator;
  readonly signUpButton: Locator;
  readonly accountInfoHeader: Locator;
  readonly gender: Locator;
  readonly password: Locator;
  readonly birthDay: Locator;
  readonly birthMonth: Locator;
  readonly birthYear: Locator;
  readonly optInCheckbox: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpName = page.locator('[data-qa="signup-name"]');
    this.signUpEmail = page.locator('[data-qa="signup-email"]');
    this.signUpButton = page.locator('[data-qa="signup-button"]');
    this.accountInfoHeader = page.locator('.login-form h2.title').first();
    this.gender = page.locator('#id_gender1');
    this.password = page.locator('#password');
    this.birthDay = page.locator('#days');
    this.birthMonth = page.locator('#months');
    this.birthYear = page.locator('#years');
    this.optInCheckbox = page.locator('#uniform-optin #optin');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.address = page.locator('#address1');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.locator('#mobile_number');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.accountCreatedMessage = page.locator('[data-qa="account-created"]');
  }

  async initAccountCreation(
    userInitRegister: RegisterUserInitModel,
  ): Promise<void> {
    await this.signUpLoginLink.click();
    await this.signUpName.fill(userInitRegister.userLogin);
    await this.signUpEmail.fill(userInitRegister.userEmail);
    await this.signUpButton.click();
    await expect
      .soft(this.accountInfoHeader)
      .toContainText('Enter Account Information');
  }

  async completeRegistrationDetails(
    registerUserData: RegistrationDetailsModel,
  ): Promise<void> {
    await this.gender.check();
    await this.gender.check();
    await this.password.fill(registerUserData.password);
    await this.birthDay.selectOption(registerUserData.birthDay);
    await this.birthMonth.selectOption(registerUserData.birthMonth);
    await this.birthYear.selectOption(registerUserData.birthYear);
    await this.optInCheckbox.check();
    await this.firstName.fill(registerUserData.firstName);
    await this.lastName.fill(registerUserData.lastName);
    await this.address.fill(registerUserData.address);
    await this.country.selectOption(registerUserData.country);
    await this.state.fill(registerUserData.state);
    await this.city.fill(registerUserData.city);
    await this.zipcode.fill(registerUserData.zipcode);
    await this.mobileNumber.fill(registerUserData.mobileNumber);
    await this.createAccountButton.click();
  }
}
