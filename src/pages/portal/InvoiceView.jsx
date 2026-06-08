import { useParams } from 'react-router-dom';
import InvoicePage from '../../components/Invoice/InvoicePage';
import { api } from '../../lib/api';

export default function PortalInvoiceView() {
  const { id } = useParams();

  return (
    <InvoicePage
      invoiceId={id}
      fetchInvoice={api.getPortalInvoice}
      downloadInvoice={api.downloadPortalInvoice}
      backTo="/portal/invoices"
      backLabel="← Back to Invoices"
    />
  );
}
