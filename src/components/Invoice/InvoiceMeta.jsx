import { formatInvoiceDate } from '../../lib/invoiceFormat';

export default function InvoiceMeta({ invoice }) {
  return (
    <div className="invoice-meta-row">
      <h1 className="invoice-title">INVOICE</h1>
      <div className="invoice-meta-right">
        <p>
          <span className="label">Invoice #:</span> {invoice.invoiceNumber}
        </p>
        <p>
          <span className="label">Date:</span> {formatInvoiceDate(invoice.date)}
        </p>
        <p>
          <span className="label">Due Date:</span> {formatInvoiceDate(invoice.dueDate)}
        </p>
      </div>
    </div>
  );
}
