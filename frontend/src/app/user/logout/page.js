'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear token and other session info
    localStorage.removeItem('token');

    // Add a small delay for UI feedback (optional)
    
      router.push('/user/login');
   
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Logging Out...</h2>
        <p className={styles.label}>You are being logged out. Redirecting to login page.</p>
      </div>
    </div>
  );
}
