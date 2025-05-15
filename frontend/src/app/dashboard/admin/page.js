'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Navbar from "@/app/components/navbar";
import { useRouter } from 'next/navigation';


export default function AdminDashboard() {

  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const extraNavItems = [
    { label: "Profile", href: '/user/profile' },
  ];

  useEffect(() => {
    async function loadDepartments() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("User not authenticated.");
          router.push("/user/login")
          return;
        }

        const res = await fetch('http://localhost:8000/department/', {
          headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
          }
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch departments. Status: ${res.status}`);
        }

        const data = await res.json();
        setDepartments(data);
      } catch (err) {
        console.error('Error loading departments:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadDepartments();
  }, []);

  return (
    <>
      <Navbar extraItems={extraNavItems} />
      <div className={styles.container}>
        <h1 className={styles.heading}>Admin Dashboard</h1>
        {loading ? (
          <p className={styles.loading}>Loading departments...</p>
        ) : error ? (
          <p className={styles.error}>Error: {error}</p>
        ) : (
          <div className={styles.grid}>
            {departments.length > 0 ? (
              departments.map((dept, idx) => (
                <div key={idx} className={styles.card}>
                  <h3>{dept.name}</h3>
                  
                </div>
              ))
            ) : (
              <p>No departments found for your college.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
