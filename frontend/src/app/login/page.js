import React from 'react';

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-wrapper">
      <h1>Annual Report Portal</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
