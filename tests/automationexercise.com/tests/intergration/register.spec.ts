import { userData } from '../../src/datafactory/globalUserDataGenerator';
import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify register page', () => {
  test('should return an error when attempting to register with an already registered email', async ({
    registerPage,
  }) => {
    const ERROR_MESSAGE_DUPLICATE_EMAIL = 'Email Address already exist!';

    await registerPage.signupLoginButton.click();
    await registerPage.initAccountCreation({
      userLogin: userData.userLogin,
      userEmail: userData.userEmail,
    });
    await expect(registerPage.validationEmailDuplicate).toContainText(
      ERROR_MESSAGE_DUPLICATE_EMAIL,
    );
  });
});
