import { formatCurrency } from '../../lib/invoiceFormat';

export default function TotalsBlock({ invoice }) {
  return (
    <div className="invoice-totals">
      <div className="totals-row row-white">
        <span>Subtotal</span>
        <span>{formatCurrency(invoice.subtotal)}</span>
      </div>
      <div className="totals-row row-gray">
        <span>Sales Tax</span>
        <span>{formatCurrency(invoice.tax)}</span>
      </div>
      <div className="totals-row total-due-row">
        <span>TOTAL DUE</span>
        <span>{formatCurrency(invoice.total)}</span>
      </div>
    </div>
  );
}
