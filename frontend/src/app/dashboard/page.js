"use client";

import { useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState([
    { id: 1, title: "Box 1", content: "This is the first box." },
    { id: 2, title: "Box 2", content: "This is the second box." },
    { id: 3, title: "Box 3", content: "This is the third box." }
  ]);

  const [count, setCount] = useState(data.length + 1);

  const addBox = () => {
    const newBox = {
      id: count,
      title: `Box ${count}`,
      content: `This is box number ${count}.`
    };
    setData([...data, newBox]);
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>Dynamic Dashboard</h1>
      <button onClick={addBox}>Add Box</button>

      <div className="grid">
        {data.map((item) => (
          <div className="box" key={item.id}>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
          font-family: sans-serif;
        }

        button {
          margin-bottom: 20px;
          padding: 10px 20px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(5px, 200px));
          gap: 20px;
        }

        .box {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          aspect-ratio: 1 / 1; /* Makes it a square */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          text-align: center;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }

        h3 {
          margin: 0 0 8px;
        }
      `}</style>
    </div>
  );
}
