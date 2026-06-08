export default function BillingBlock({ invoice }) {
  return (
    <div className="billing-block">
      <div className="billing-col">
        <p className="billing-col-label">BILL TO</p>
        {invoice.billToLines?.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="billing-col">
        <p className="billing-col-label">SERVICE LOCATION</p>
        {invoice.serviceLocationLines?.length ? (
          invoice.serviceLocationLines.map((line) => <p key={line}>{line}</p>)
        ) : (
          <p>—</p>
        )}
      </div>
    </div>
  );
}
