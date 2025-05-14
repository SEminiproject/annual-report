import React from 'react';
import './DashboardPage.css';

const data = [
  { title: 'Total Current Students', value: '25,569', color: '#3b82f6' },
  { title: 'Total Current Teachers', value: '7,500', color: '#6366f1' },
  { title: 'Total Current Schools', value: '512', color: '#f97316' },
  { title: 'Total Budget', value: '৳ 51,9500', color: '#22c55e' },
];

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {data.map((card, index) => (
        <div
          key={index}
          className="dashboard-card"
          style={{ backgroundColor: card.color }}
        >
          <h3>{card.title}</h3>
          <p className="value">{card.value}</p>
          <button className="details-btn">See Details</button>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
