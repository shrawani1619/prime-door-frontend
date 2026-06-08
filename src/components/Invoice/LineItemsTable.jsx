import { formatCurrency } from '../../lib/invoiceFormat';

export default function LineItemsTable({ items }) {
  return (
    <table className="invoice-items-table">
      <thead>
        <tr>
          <th className="col-desc">DESCRIPTION</th>
          <th className="col-qty">QTY</th>
          <th className="col-price">UNIT PRICE</th>
          <th className="col-total">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr key={`${item.description}-${idx}`} className={idx % 2 === 0 ? 'row-white' : 'row-gray'}>
            <td className="col-desc">{item.description}</td>
            <td className="col-qty">{item.qty}</td>
            <td className="col-price">{formatCurrency(item.unitPrice)}</td>
            <td className="col-total">{formatCurrency(item.total)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
