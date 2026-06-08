export default function NotesSection({ invoice }) {
  return (
    <div className="invoice-notes">
      <p className="notes-label">Notes:</p>
      <p>{invoice.notes}</p>
      <p className="payment-terms">
        <strong>Payment Terms:</strong> {invoice.paymentTerms}
      </p>
    </div>
  );
}
