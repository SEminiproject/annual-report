'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../admin/page.module.css';

export default function Dashboard() {
  const router = useRouter();

 useEffect(() => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    router.push('/login');
  }
}, [router]);


  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card-grid">
        <div className="card">📈 Report Summary</div>
        <div className="card">🗂 Documents</div>
        <div className="card">👤 User Info</div>
      </div>
    </div>
  );
}
