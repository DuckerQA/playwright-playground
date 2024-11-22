import { userData } from '../../src/datafactory/globalUserDataGenerator';
import { RegisterPage } from '../../src/pages/register.page';
import { expect, test } from '@playwright/test';

test.describe('Verify register page', () => {
  test('should return an error when attempting to register with an already registered email', async ({
    page,
  }) => {
    const registerPage = new RegisterPage(page);
    const errorMessageDuplicateEmail = 'Email Address already exist!';

    await registerPage.goto();
    await registerPage.signupLoginButton.click();
    await registerPage.initAccountCreation({
      userLogin: userData.userLogin,
      userEmail: userData.userEmail,
    });
    await expect(registerPage.validationEmailDuplicate).toContainText(
      errorMessageDuplicateEmail,
    );
  });
});
