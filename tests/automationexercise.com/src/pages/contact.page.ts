import { ContactFormDataModel } from '../models/contact.model';
import { BasePage } from './base.page';
import { Locator, Page, expect } from '@playwright/test';

export class ContactPage extends BasePage {
  readonly contactFormHeader: Locator;
  readonly nameInputField: Locator;
  readonly emailInputField: Locator;
  readonly subjectInputField: Locator;
  readonly messageTextArea: Locator;
  readonly fileUploadInput: Locator;
  readonly submitButton: Locator;
  readonly successMessageAlert: Locator;
  readonly backToHomeButton: Locator;
  constructor(page: Page) {
    super(page);
    this.url = 'contact_us';
    this.contactFormHeader = this.page.locator('.contact-form .title');
    this.nameInputField = this.page.locator('[data-qa="name"]');
    this.emailInputField = this.page.locator('[data-qa="email"]');
    this.subjectInputField = this.page.locator('[data-qa="subject"]');
    this.messageTextArea = this.page.locator('[data-qa="message"]');
    this.fileUploadInput = this.page.locator('[name="upload_file"]');
    this.submitButton = this.page.locator('[data-qa="submit-button"]');
    this.successMessageAlert = this.page.locator(
      '.contact-form .alert-success',
    );
    this.backToHomeButton = this.page.locator('#form-section .btn-success');
  }

  async fillContactForm(formData: ContactFormDataModel): Promise<void> {
    await this.nameInputField.fill(formData.contactName);
    await this.emailInputField.fill(formData.contactEmail);
    await this.subjectInputField.fill(formData.contactSubject);
    await this.messageTextArea.fill(formData.contactMessage);
    await this.fileUploadInput.setInputFiles(formData.uploadedFile);

    this.page.once('dialog', (dialog) => {
      dialog.accept().catch(() => {});
    });

    await this.submitButton.click();
  }

  async assertBackToHomeButton(): Promise<void> {
    await expect(this.page).toHaveURL('/');
  }
}
