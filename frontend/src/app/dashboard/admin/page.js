'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function AdminDashboard() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocalDepartments() {
      try {
        const res = await fetch('/departments.json');
        const data = await res.json();
        setDepartments(data);
      } catch (err) {
        console.error('Error loading local departments:', err);
      } finally {
        setLoading(false);
      }
    }

    loadLocalDepartments();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Admin Dashboard</h1>
      {loading ? (
        <p className={styles.loading}>Loading departments...</p>
      ) : (
        <div className={styles.grid}>
          {departments.map((dept, idx) => (
            <div key={idx} className={styles.card}>
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
