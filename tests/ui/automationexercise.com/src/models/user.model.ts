export interface RegisterUserModel {
  userLogin: string;
  userEmail: string;
  password: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export interface RegisterUserInitModel {
  userLogin: RegisterUserModel['userLogin'];
  userEmail: RegisterUserModel['userEmail'];
}

export interface RegistrationDetailsModel {
  password: RegisterUserModel['password'];
  birthDay: RegisterUserModel['birthDay'];
  birthMonth: RegisterUserModel['birthMonth'];
  birthYear: RegisterUserModel['birthYear'];
  firstName: RegisterUserModel['firstName'];
  lastName: RegisterUserModel['lastName'];
  address: RegisterUserModel['address'];
  country: RegisterUserModel['country'];
  state: RegisterUserModel['state'];
  city: RegisterUserModel['city'];
  zipcode: RegisterUserModel['zipcode'];
  mobileNumber: RegisterUserModel['mobileNumber'];
}
