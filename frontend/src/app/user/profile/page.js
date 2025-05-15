'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './UserProfile.css'; // assuming your CSS is saved here
import Navbar from '@/app/components/navbar';


export default function UserProfile() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/user/login');
      return;
    }

    fetch('http://localhost:8000/user/user', {
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
        setUser(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Session expired. Please log in again.');
        localStorage.removeItem('token');
        setTimeout(() => router.push('/user/login'), 0);
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="card">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="card">
        <h1 className="title">User Profile</h1>
        <div className="formGroup">
          <label className="label">Email</label>
          <p>{user.email}</p>
        </div>
        <div className="formGroup">
          <label className="label">Username</label>
          <p>{user.username}</p>
        </div>
        
        {/* Add other user fields here as needed */}
      </div>
    </div>
    </>
  );
}
