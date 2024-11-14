import { userData } from '../../src/datafactory/globalUserDataGenerator';
import { LoginPage } from '../../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  test('Login with valid data', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loggedUserInfo = await loginPage.checkIfLoginIsDisplayed(
      userData.userLogin,
    );

    await loginPage.goto();
    await loginPage.login({
      email: userData.userEmail,
      password: userData.password,
    });
    await expect(loggedUserInfo).toBeVisible();
    await expect(loginPage.logoutButton).toBeVisible();
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkErrorForInvalidLogin = 'Your email or password is incorrect!';

    await loginPage.goto();
    await loginPage.login({
      email: userData.userEmail,
      password: 'WrongPassword123',
    });
    await expect(loginPage.validationLocator).toContainText(
      checkErrorForInvalidLogin,
    );
  });
});
