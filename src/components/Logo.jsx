import { Link } from 'react-router-dom';
import { LOGO_SRC, COMPANY_NAME } from '../lib/branding';

export default function Logo({ to = '/', className = '', imgClassName = 'h-12 w-auto', linked = true }) {
  const image = (
    <img src={LOGO_SRC} alt={COMPANY_NAME} className={imgClassName} />
  );

  if (!linked) {
    return <div className={className}>{image}</div>;
  }

  return (
    <Link to={to} className={`inline-flex items-center shrink-0 ${className}`}>
      {image}
    </Link>
  );
}
