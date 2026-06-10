import { Link } from 'react-router-dom';
import { LOGO_SRC, COMPANY_NAME } from '../lib/branding';

export default function Logo({
  to = '/',
  className = '',
  imgClassName = 'h-12 w-auto',
  linked = true,
  variant = 'default',
}) {
  const image = <img src={LOGO_SRC} alt={COMPANY_NAME} className={imgClassName} />;

  const content =
    variant === 'onDark' ? (
      <span className="inline-flex bg-white rounded-xl px-4 py-3 shadow-md ring-1 ring-black/5">
        {image}
      </span>
    ) : (
      image
    );

  if (!linked) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link to={to} className={`inline-flex items-center shrink-0 ${className}`}>
      {content}
    </Link>
  );
}
