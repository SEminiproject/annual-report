'use client';

import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar({ extraItems = [] }) {
  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Logout', href: '/user/logout' },
    ...extraItems,
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Annual Report Portal</div>
        <ul className={styles.navLinks}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
