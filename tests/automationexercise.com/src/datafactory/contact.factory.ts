import { ContactUsModel } from '../models/contact.model';
import { faker } from '@faker-js/faker';
import * as path from 'path';

export function ContactUsData(): ContactUsModel {
  const contactName = faker.company.name();
  const contactData: ContactUsModel = {
    contactName: contactName,
    contactEmail: faker.internet.email({ firstName: contactName }),
    contactSubject: faker.lorem.sentence(),
    contactMessage: faker.lorem.paragraph(),
  };

  return contactData;
}

export const pdfFile = path.resolve(
  __dirname,
  '../../src/testData/duckerWizard.png',
);
