'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/user/login');
      return;
    }

    fetch('http://localhost:8000/dashboard/', {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid or expired token');
        return res.json();
      })
      .then((data) => {
        // Redirect based on user type
        if (data.type === 'ADMIN') {
          router.push('/dashboard/admin');
        } else if (data.type === 'STUDENT') {
          router.push('/dashboard/student');
        } else if (data.type === 'STAFF') {
          router.push('/dashboard/staff');
        } else {
          setError('Unknown user type.');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Session expired. Please log in again.');
        localStorage.removeItem('token');
        setTimeout(() => router.push('/user/login'), 0);
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  return null; // Or some fallback if not redirecting
}
