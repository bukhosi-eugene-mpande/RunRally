'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavTrail: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-gray-500">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>

              {isLast ? (
                <span className="text-gray-500">{value}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default NavTrail;
