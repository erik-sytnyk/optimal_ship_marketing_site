import Image from 'next/image';
import {useState} from 'react';

import * as styled from './ContactUsForm.styled';

const OPTIONS = [
  {value: '', label: ''},
  {value: 'quote', label: 'Quote'},
  {value: 'shipment_preparation', label: 'Shipment Preparation'},
  {value: 'shipping_question', label: 'Shipping Question'},
  {value: 'tracking_or_tracing', label: 'Tracking or Tracing'},
  {value: 'sales_or_rates', label: 'Sales or Rates'},
  {value: 'other', label: 'Other'}
];

interface Props {
  emailTo: string;
}

function ContactUsForm({emailTo}: Props) {
  const [name, setName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [topicToHelp, setTopicToHelp] = useState<string>('');
  const [comments, setComments] = useState<string>('');

  function sendForm() {
    const selectedOption = OPTIONS.find(opt => opt.value === topicToHelp);

    const subject = `I need help with ${selectedOption.label}`;

    let body = '';
    if (comments) body += `Comments: ${comments}. \n\n`;

    body += `Name: ${name}, \n Email: ${email}, \n Phone: ${phone}, \n`;
    if (companyName) body += `Company Name: ${companyName}. \n\n`;

    window.open(`mailto:${emailTo}?subject=${subject}&body=${encodeURIComponent(body)}`);
  }

  function renderLabel(label, required = false) {
    return (
      <styled.label>
        {label}
        {required && <span>*</span>}
      </styled.label>
    );
  }

  function render() {
    const disabled = !name || !email || !phone || !topicToHelp;

    return (
      <styled.form>
        <styled.header>
          <div>
            <styled.title>How can we help?</styled.title>
            <styled.description>Send us a message!</styled.description>
          </div>

          <Image src="/images/plane.png" alt="Plane" width="102" height="102" />
        </styled.header>

        <styled.row>
          <div>
            {renderLabel('Name', true)}
            <styled.input name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div>
            {renderLabel('Company Name')}
            <styled.input name="companyName" value={companyName} onChange={e => setCompanyName(e.target.value)} />
          </div>
        </styled.row>

        <styled.row>
          <div>
            {renderLabel('Email', true)}
            <styled.input name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div>
            {renderLabel('Phone', true)}
            <styled.input name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
        </styled.row>

        <styled.row>
          <styled.fullRow>
            {renderLabel('What can we help you with?', true)}
            <styled.select
              name="topicToHelp"
              value={topicToHelp}
              options={OPTIONS}
              onChange={e => setTopicToHelp(e.target.value)}>
              {OPTIONS.map(opt => {
                return (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                );
              })}
            </styled.select>
          </styled.fullRow>
        </styled.row>

        <styled.row>
          <styled.fullRow>
            {renderLabel('Comments')}
            <styled.textArea
              name="comments"
              placeholder="Type your comment"
              value={comments}
              onChange={e => setComments(e.target.value)}
            />
          </styled.fullRow>
        </styled.row>

        <styled.footer>
          <styled.button disabled={disabled} onClick={sendForm}>
            Contact Us
          </styled.button>
          <styled.remark>We will get back to you as soon as possible!</styled.remark>
        </styled.footer>
      </styled.form>
    );
  }

  return render();
}

export default ContactUsForm;
