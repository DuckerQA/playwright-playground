import { userData } from '../../src/datafactory/globalUserDataGenerator';
import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify login', () => {
  test('should log in successfully with valid credentials', async ({
    loginPage,
  }) => {
    await loginPage.login({
      email: userData.userEmail,
      password: userData.password,
    });
    await loginPage.assertLoggedIn(userData.userLogin);
    await expect(loginPage.logoutButton).toBeVisible();
  });

  test('should display an error for invalid password', async ({
    loginPage,
  }) => {
    const ERROR_MESSAGE_INVALID_LOGIN = 'Your email or password is incorrect!';

    await loginPage.login({
      email: userData.userEmail,
      password: 'WrongPassword123',
    });
    await expect(loginPage.validationLocator).toContainText(
      ERROR_MESSAGE_INVALID_LOGIN,
    );
  });

  test('should allow the user to log out successfully', async ({
    loginPage,
  }) => {
    await loginPage.login({
      email: userData.userEmail,
      password: userData.password,
    });
    await loginPage.assertLoggedIn(userData.userLogin);
    await expect(loginPage.logoutButton).toBeVisible();
    await loginPage.logoutButton.click();
    await loginPage.assertLoggedOut;
  });
});
