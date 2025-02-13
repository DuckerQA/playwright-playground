/* eslint-disable playwright/no-standalone-expect */
import { STORAGE_STATE } from '../../../../playwright.config';
import { saveUserData } from '../../src/datafactory/globalUserDataGenerator';
import { expect, test as setup } from '../../src/fixtures/merge.fixtures';
import { prepareRandomUser } from '../datafactory/user.factory';
import { RegisterUserModel } from '../models/user.model';

let registerUserData: RegisterUserModel;

setup('Register to the page', async ({ page, registerPage, loginPage }) => {
  const accountCreatedInfo = 'Account Created!';
  registerUserData = prepareRandomUser();

  await registerPage.goto();
  await registerPage.signupLoginButton.click();
  await registerPage.initAccountCreation({
    userLogin: registerUserData.userLogin,
    userEmail: registerUserData.userEmail,
  });

  await expect
    .soft(registerPage.accountInfoHeader)
    .toContainText('Enter Account Information');

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

  //save data after the test as tmp file
  saveUserData(registerUserData);

  const loggedUserInfo = await loginPage.getLoggedInUserLocator(
    registerUserData.userLogin,
  );

  //make user login in directly after register acc
  await registerPage.continueToLoginButton.click();
  await expect(loggedUserInfo).toBeVisible();

  //create StorageState
  await page.context().storageState({ path: STORAGE_STATE });
});
