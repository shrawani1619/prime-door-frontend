import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  const siteName = import.meta.env.VITE_COMPANY_NAME || 'Prime Door & Dock Solutions';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
