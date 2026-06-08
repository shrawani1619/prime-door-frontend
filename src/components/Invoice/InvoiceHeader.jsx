import './Invoice.css';

export default function InvoiceHeader() {
  return (
    <>
      <img src="/assets/prime_logo.png" alt="Prime Door & Dock Solutions" className="invoice-logo" />
      <hr className="invoice-divider-navy" />
      <div className="invoice-company-info">
        <p className="company-name">Prime Door & Dock Solutions</p>
        <p>200 Sterling Blvd, Englewood, NJ 07631</p>
        <p>Phone: +1 (551) 426-3018</p>
        <p>Email: info@primedoordock.com</p>
        <p>Website: www.primedoordock.com</p>
      </div>
      <hr className="invoice-divider-gray" />
    </>
  );
}
