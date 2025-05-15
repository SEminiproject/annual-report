'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
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
        // Redirect if the user type is STUDENT
        if (data.type === 'ADMIN') {
          router.push('/dashboard/admin');
        } else {
          setUser(data);
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Session expired. Please log in again.');
        localStorage.removeItem('token');
        setTimeout(() => router.push('/login'), 0); // Defer redirect
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  return (
    <main className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.first_name || user.username}</h1>
      <div className="space-y-2">
        {Object.entries(user).map(([key, value]) => {
          let displayValue = '';

          if (value === null || value === undefined) {
            displayValue = String(value);
          } else if (typeof value === 'object') {
            if (key === 'college' && value.name) {
              displayValue = value.name;
            } else if (key === 'department' && value.name) {
              displayValue = value.name;
            } else {
              displayValue = JSON.stringify(value, null, 2);
            }
          } else {
            displayValue = value.toString();
          }

          return (
            <p key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {displayValue}
            </p>
          );
        })}
      </div>
    </main>
  );
}
