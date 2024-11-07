import { prepareRandomUser } from '../src/datafactory/user.factory';
import { saveUserData } from '../src/datafactory/userDataSaver';
import { RegisterUserModel } from '../src/models/user.model';
import { RegisterPage } from '../src/pages/register.page';
import { expect, test } from '@playwright/test';

test.describe('Verify register', () => {
  let registerUserData: RegisterUserModel;

  test.beforeEach(async () => {
    registerUserData = prepareRandomUser();
  });

  test('Register to the page', async ({ page }) => {
    const accountCreatedInfo = 'Account Created!';
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await registerPage.initAccountCreation({
      userLogin: registerUserData.userLogin,
      userEmail: registerUserData.userEmail,
    });
    await registerPage.completeRegistrationDetails({
      password: registerUserData.password,
      birthDay: registerUserData.birthDay,
      birthMonth: registerUserData.birthMonth,
      birthYear: registerUserData.birthYear,
      firstName: registerUserData.firstName,
      lastName: registerUserData.lastName,
      address: registerUserData.address,
      country: registerUserData.country,
      state: registerUserData.state,
      city: registerUserData.city,
      zipcode: registerUserData.zipcode,
      mobileNumber: registerUserData.mobileNumber,
    });

    await expect.soft(registerPage.accountCreatedMessage).toBeVisible();
    await expect(registerPage.accountCreatedMessage).toContainText(
      accountCreatedInfo,
    );

    //save data after the test
    saveUserData(registerUserData);
  });
});
