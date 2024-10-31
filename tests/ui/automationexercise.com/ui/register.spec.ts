import { prepareRandomUser } from '../src/datafactory/user.factory';
import { RegisterUserModel } from '../src/models/user.model';
import { expect, test } from '@playwright/test';

test.describe('Verify register', () => {
  let registerUserData: RegisterUserModel;

  test.beforeEach(async () => {
    registerUserData = prepareRandomUser();
  });
  test('Register to the page', async ({ page }) => {
    await page.goto('https://www.automationexercise.com/login');
    await page.addLocatorHandler(
      page.getByLabel('Consent', { exact: true }),
      async () => {
        await await page.getByLabel('Consent', { exact: true }).click();
      },
    );
    await page
      .locator('[data-qa="signup-name"]')
      .fill(registerUserData.userLogin);
    await page
      .locator('[data-qa="signup-email"]')
      .fill(registerUserData.userEmail);
    await page.locator('[data-qa="signup-button"]').click();

    await expect(page.locator('.login-form h2.title').first()).toContainText(
      'Enter Account Information',
    );

    await page.locator('#id_gender1').check();
    await page.locator('#password').fill(registerUserData.password);
    await page.locator('#days').selectOption(registerUserData.birthDay);
    await page.locator('#months').selectOption(registerUserData.birthMonth);
    await page.locator('#years').selectOption(registerUserData.birthYear);
    await page.locator('#uniform-optin #optin').check();
    await page.locator('#first_name').fill(registerUserData.firstName);
    await page.locator('#last_name').fill(registerUserData.lastName);
    await page.locator('#address1').fill(registerUserData.address);
    await page.locator('#country').selectOption(registerUserData.country);
    await page.locator('#state').fill(registerUserData.state);
    await page.locator('#city').fill(registerUserData.city);
    await page.locator('#zipcode').fill(registerUserData.zipcode);
    await page.locator('#mobile_number').fill(registerUserData.mobileNumber);
    await page.locator('[data-qa="create-account"]').click();

    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    await expect(page.locator('[data-qa="account-created"]')).toContainText(
      'Account Created!',
    );

    console.log(
      'email:',
      registerUserData.userEmail,
      'password:',
      registerUserData.password,
    );
  });
});
