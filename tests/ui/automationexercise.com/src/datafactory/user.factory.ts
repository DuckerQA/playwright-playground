import { RegisterUserModel } from '../models/user.model';
import { faker } from '@faker-js/faker';

/**
 * Prepare a random user data model for registration
 */
export function prepareRandomUser(): RegisterUserModel {
  const userLoginGenerated = generateFakeLoginName();
  const randomMonth = faker.helpers.arrayElement(months);
  const randomCountry = faker.helpers.arrayElement(countries);

  // Generate address fields separately
  const { fullAddress } = generateRandomAddress();

  // Populate the user data object
  const randomUserData: RegisterUserModel = {
    userLogin: userLoginGenerated,
    userEmail: faker.internet.email({ firstName: userLoginGenerated }),
    password: faker.internet.password({ length: 10 }),
    birthDay: faker.number.int({ min: 1, max: 31 }).toString(),
    birthMonth: randomMonth,
    birthYear: faker.number.int({ min: 1900, max: 2021 }).toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: fullAddress, // Use full address here
    country: randomCountry,
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
  };

  return randomUserData;
}

/**
 * Generate a random address with company name, street address, and P.O. Box
 */
const generateRandomAddress = () => {
  const streetAddress = faker.location.streetAddress();
  const poBox = `P.O. Box ${faker.number.int({ min: 100, max: 9999 })}`;
  const companyName = faker.company.name();
  const fullAddress = `${companyName}, ${streetAddress}, ${poBox}`;

  return { streetAddress, poBox, companyName, fullAddress };
};

/**
 * Generate a fake login name based on random first and last names
 */
const generateFakeLoginName = (): string => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const username = `${firstName.charAt(0).toLowerCase()}${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}`;
  return username;
};

// Array of months
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Array of available countries
const countries = [
  'India',
  'United States',
  'Canada',
  'Australia',
  'Israel',
  'New Zealand',
  'Singapore',
];
