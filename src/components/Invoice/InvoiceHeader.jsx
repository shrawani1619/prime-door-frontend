import './Invoice.css';
import { ADDRESS, COMPANY_NAME, EMAIL, PHONE_DISPLAY } from '../../lib/contactInfo';

export default function InvoiceHeader() {
  return (
    <>
      <img src="/assets/prime_logo.png" alt={COMPANY_NAME} className="invoice-logo" />
      <hr className="invoice-divider-navy" />
      <div className="invoice-company-info">
        <p className="company-name">{COMPANY_NAME}</p>
        <p>{ADDRESS}</p>
        <p>Phone: {PHONE_DISPLAY}</p>
        <p>Email: {EMAIL}</p>
      </div>
      <hr className="invoice-divider-gray" />
    </>
  );
}
