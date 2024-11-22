import { ContactUsData, pdfFile } from '../../src/datafactory/contact.factory';
import { expect, test } from '../../src/fixtures/merge.fixtures';

test.describe('Verify Contact us', () => {
  test('should submit the form and display a success message', async ({
    contactPage,
  }) => {
    const contactData = ContactUsData();
    const CONTACT_PAGE_HEADER = 'Get In Touch';
    const SUCCESS_ALERT_MESSAGE =
      'Success! Your details have been submitted successfully.';

    // Verify Contact Page Header
    await expect(contactPage.contactFormHeader).toHaveText(CONTACT_PAGE_HEADER);

    // Fill and Submit the Contact Form
    await contactPage.fillContactForm({
      ...contactData,
      uploadedFile: pdfFile,
    });

    // Verify Success Message
    await expect(contactPage.successMessageAlert).toHaveText(
      SUCCESS_ALERT_MESSAGE,
    );

    // Return to Home Page with a dedicated button
    await contactPage.backToHomeButton.click();
    await contactPage.assertBackToHomeButton;
  });
});
