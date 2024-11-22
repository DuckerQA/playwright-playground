import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify Test Case page', () => {
  test('should navigate to Test Cases and display Test Case details', async ({
    testCasePage,
  }) => {
    const TEST_CASE_TITLE = 'Test Cases';

    await testCasePage.tabTestCases.click();
    await expect(testCasePage.titleTestCases).toHaveText(TEST_CASE_TITLE);
    await testCasePage.collapsedElementTestCase1.click();
    await expect(testCasePage.bodyTestCase1Details).toBeVisible();
  });
});
