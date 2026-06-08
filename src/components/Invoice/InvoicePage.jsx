import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';
import InvoiceHeader from './InvoiceHeader';
import InvoiceMeta from './InvoiceMeta';
import BillingBlock from './BillingBlock';
import LineItemsTable from './LineItemsTable';
import TotalsBlock from './TotalsBlock';
import NotesSection from './NotesSection';
import DownloadButton from './DownloadButton';
import './Invoice.css';

export default function InvoicePage({ invoiceId, fetchInvoice, downloadInvoice, backTo, backLabel }) {
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!invoiceId) return;
    setLoading(true);
    fetchInvoice(invoiceId)
      .then(setInvoice)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [invoiceId, fetchInvoice]);

  if (loading) {
    return <div className="invoice-loading">Loading invoice...</div>;
  }

  if (error) {
    return <div className="invoice-error">Error: {error}</div>;
  }

  if (!invoice) return null;

  return (
    <>
      <SEO title={`Invoice ${invoice.invoiceNumber}`} />
      <div className="invoice-wrapper">
        <div className="invoice-actions no-print">
          {backTo && (
            <Link to={backTo} className="invoice-print-btn no-print" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              {backLabel || '← Back'}
            </Link>
          )}
          <DownloadButton
            invoiceNumber={invoice.invoiceNumber}
            onDownloadApi={
              downloadInvoice ? () => downloadInvoice(invoice._id, invoice.invoiceNumber) : undefined
            }
          />
          <button type="button" className="invoice-print-btn" onClick={() => window.print()}>
            Print
          </button>
        </div>

        <div className="invoice-document" id="invoice-document">
          <InvoiceHeader />
          <InvoiceMeta invoice={invoice} />
          <BillingBlock invoice={invoice} />
          <LineItemsTable items={invoice.items} />
          <TotalsBlock invoice={invoice} />
          <NotesSection invoice={invoice} />
        </div>
      </div>
    </>
  );
}
