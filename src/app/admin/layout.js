"use client";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import './admin.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div className="admin-layout">
      <nav className="admin-nav">
        <div className="admin-nav-brand">BSSE Admin</div>
        <div className="admin-nav-links">
          <Link 
            href="/admin/registrations" 
            className={pathname === '/admin/registrations' ? 'active' : ''}
          >
            Registered Data
          </Link>
          <Link 
            href="/admin/results" 
            className={pathname === '/admin/results' ? 'active' : ''}
          >
            Results
          </Link>
        </div>
        <button onClick={handleLogout} className="admin-logout">
          Logout
        </button>
      </nav>
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
}
