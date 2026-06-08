const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
}

async function downloadFile(path, filename) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || 'Download failed');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export const api = {
  login: (body) => request('/auth/login', { method: 'POST', body: JSON.stringify(body) }),
  submitQuote: (body) =>
    request('/public/quote-request', { method: 'POST', body: JSON.stringify(body) }),
  submitContact: (body) =>
    request('/public/contact', { method: 'POST', body: JSON.stringify(body) }),
  getJobs: () => request('/portal/jobs'),
  getJob: (id) => request(`/portal/jobs/${id}`),
  getInvoices: () => request('/portal/invoices'),
  getPortalInvoice: (id) => request(`/portal/invoices/${id}`),
  downloadPortalInvoice: (id, invoiceNumber) =>
    downloadFile(`/portal/invoices/${id}/download`, `${invoiceNumber}.pdf`),

  getAdminDashboard: () => request('/admin/dashboard'),
  getCustomers: () => request('/admin/customers'),
  createCustomer: (body) =>
    request('/admin/customers', { method: 'POST', body: JSON.stringify(body) }),
  updateCustomer: (id, body) =>
    request(`/admin/customers/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  getQuotes: () => request('/admin/quotes'),
  updateQuote: (id, body) =>
    request(`/admin/quotes/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  getAdminJobs: () => request('/admin/jobs'),
  createJob: (body) => request('/admin/jobs', { method: 'POST', body: JSON.stringify(body) }),
  updateJob: (id, body) =>
    request(`/admin/jobs/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  getAdminInvoices: () => request('/admin/invoices'),
  getAdminInvoice: (id) => request(`/admin/invoices/${id}`),
  createInvoice: (body) =>
    request('/admin/invoices', { method: 'POST', body: JSON.stringify(body) }),
  updateInvoice: (id, body) =>
    request(`/admin/invoices/${id}`, { method: 'PUT', body: JSON.stringify(body) }),
  downloadAdminInvoice: (id, invoiceNumber) =>
    downloadFile(`/admin/invoices/${id}/download`, `${invoiceNumber}.pdf`),
};
