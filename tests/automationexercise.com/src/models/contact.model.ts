export interface ContactUsModel {
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
}

export interface ContactFormDataModel {
  contactName: ContactUsModel['contactName'];
  contactEmail: ContactUsModel['contactEmail'];
  contactSubject: ContactUsModel['contactSubject'];
  contactMessage: ContactUsModel['contactMessage'];
  uploadedFile: string;
}
