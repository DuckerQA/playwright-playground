import { TestCasePage } from '../../src/pages/testcase.page';
import { test as baseTest, expect } from '@playwright/test';

const test = baseTest.extend<{ testCasePage: TestCasePage }>({
  testCasePage: async ({ page }, use) => {
    const testCasePage = new TestCasePage(page);
    await testCasePage.goto();
    await use(testCasePage);
  },
});

test.describe('Verify Test Case page', () => {
  test('should navigate to Test Cases and display Test Case details', async ({
    testCasePage,
  }) => {
    const testCaseTitle = 'Test Cases';

    await testCasePage.tabTestCases.click();
    await expect(testCasePage.titleTestCases).toHaveText(testCaseTitle);
    await testCasePage.collapsedElementTestCase1.click();
    await expect(testCasePage.bodyTestCase1Details).toBeVisible();
  });
});
