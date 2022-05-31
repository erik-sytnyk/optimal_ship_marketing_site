import dataService from 'src/services/dataService';

import ContactUsForm from './components/ContactUsForm';

import * as styled from './ContactUs.styled';

function ContactUs() {
  const data = dataService.getContactUs();

  const contacts = data.contacts;
  const homeOffice = data.homeOffice;
  const salesOffice = data.salesOffice;

  return (
    <styled.wrapper>
      <styled.contactsContainer>
        <styled.title>{data.title}</styled.title>
        <styled.text>{data.description}</styled.text>

        <styled.text>
          <span>{contacts.title}</span>
          <br />
          <span>
            P: <a href={`tel:+1-${contacts.phone}`}>{contacts.phone}</a>
          </span>
          <br />
          <span>
            E:{' '}
            <a href={`mailto:${contacts.email}`} target="_blank" rel="noreferrer">
              {contacts.email}
            </a>
          </span>
        </styled.text>

        <styled.text>
          <span>{homeOffice.title}</span>
          <br />
          <span dangerouslySetInnerHTML={{__html: homeOffice.address}} />
        </styled.text>

        <styled.text>
          <span>{salesOffice.title}</span>
          <br />
          <span dangerouslySetInnerHTML={{__html: salesOffice.address}} />
        </styled.text>
      </styled.contactsContainer>

      <ContactUsForm emailTo={contacts.email} />
    </styled.wrapper>
  );
}

export default ContactUs;
