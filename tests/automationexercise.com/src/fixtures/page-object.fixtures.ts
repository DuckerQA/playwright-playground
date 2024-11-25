import { ContactPage } from '../pages/contact.page';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import { ProductsPage } from '../pages/products.page';
import { RegisterPage } from '../pages/register.page';
import { TestCasePage } from '../pages/testcase.page';
import { test as baseTest } from '@playwright/test';

interface Pages {
  testCasePage: TestCasePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  contactPage: ContactPage;
  productsPage: ProductsPage;
  productPage: ProductPage;
}

export const pageObjectTest = baseTest.extend<Pages>({
  testCasePage: async ({ page }, use) => {
    const testCasePage = new TestCasePage(page);
    await testCasePage.goto();
    await use(testCasePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await use(registerPage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
    await use(contactPage);
  },
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await productsPage.goto();
    await use(productsPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
});
