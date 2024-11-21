import { userData } from '../../src/datafactory/globalUserDataGenerator';
import { LoginPage } from '../../src/pages/login.page';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  test('should log in successfully with valid credentials', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const loggedUserInfo = await loginPage.getLoggedInUserLocator(
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

  test('should display an error for invalid password', async ({ page }) => {
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

  test('should allow the user to log out successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const loggedUserInfo = await loginPage.getLoggedInUserLocator(
      userData.userLogin,
    );

    await loginPage.goto();
    await loginPage.login({
      email: userData.userEmail,
      password: userData.password,
    });
    await expect(loggedUserInfo).toBeVisible();
    await expect(loginPage.logoutButton).toBeVisible();
    await loginPage.logoutButton.click();
    await expect(page).toHaveURL('login');
  });
});
