import { useParams } from 'react-router-dom';
import InvoicePage from '../../components/Invoice/InvoicePage';
import { api } from '../../lib/api';

export default function AdminInvoiceView() {
  const { id } = useParams();

  return (
    <InvoicePage
      invoiceId={id}
      fetchInvoice={api.getAdminInvoice}
      downloadInvoice={api.downloadAdminInvoice}
      backTo="/admin/invoices"
      backLabel="← Back to Invoices"
    />
  );
}
