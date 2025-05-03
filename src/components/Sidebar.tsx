'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Portal', href: '/hostPortal' },
  { label: 'Ad Layout', href: '/hostPortal#ad-layout' },
  { label: 'Ad Management', href: '/hostPortal#ad-management' },
  { label: 'Payouts', href: '/hostPortal#payouts' },
  { label: 'Settings', href: '/hostPortal#settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-white shadow-md fixed top-0 left-0 z-10 hidden md:block">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">CLAD</h1>
      </div>
      <nav className="mt-4 space-y-1 px-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`block px-4 py-2 rounded-md font-medium transition ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
