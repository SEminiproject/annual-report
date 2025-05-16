import Navbar from "@/app/components/navbar";
import styles from './page.module.css';

export default function StaffDashBoard() {
  const extraNavItems = [
    { label: "Profile", href: '/user/profile' },
  ];

  return (
    <>
      <Navbar extraItems={extraNavItems} />
      <div className={styles.container}>
        <h1 className={styles.heading}>Staff Dashboard</h1>
      </div>
    </>
  );
}
