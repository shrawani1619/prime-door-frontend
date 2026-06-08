import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function DownloadButton({ invoiceNumber, onDownloadApi }) {
  async function handleDownload() {
    if (onDownloadApi) {
      await onDownloadApi();
      return;
    }

    const el = document.getElementById('invoice-document');
    if (!el) return;

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = (canvas.height * pdfW) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
    pdf.save(`${invoiceNumber}.pdf`);
  }

  return (
    <button type="button" onClick={handleDownload} className="invoice-download-btn">
      Download PDF
    </button>
  );
}
