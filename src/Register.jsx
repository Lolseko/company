import React, { useState } from 'react';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [profession, setProfession] = useState('');
  const [otherProfession, setOtherProfession] = useState('');
  const [orderHistory, setOrderHistory] = useState([]);
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);
  const [showEarningsSummary, setShowEarningsSummary] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    // e.g., make an API call to register the user

    // Set registration complete flag to true
    setRegistrationComplete(true);
  };

  const handleProfessionChange = (event) => {
    const selectedProfession = event.target.value;
    setProfession(selectedProfession);

    if (selectedProfession !== 'other') {
      setOtherProfession('');
    }
  };

  const handleOtherProfessionChange = (event) => {
    setOtherProfession(event.target.value);
  };

  const handleOrderHistory = (event) => {
    event.preventDefault();
    // Fetch order history based on user data
    // e.g., make an API call to retrieve order history

    // Dummy data for demonstration
    const dummyOrderHistory = [
      { id: 1, date: '2023-05-01', status: 'Delivered' },
      { id: 2, date: '2023-04-22', status: 'Cancelled' },
      { id: 3, date: '2023-03-15', status: 'In Progress' },
    ];

    setOrderHistory(dummyOrderHistory);
  };

  const handleCalculateEarnings = (event) => {
    event.preventDefault();
    // Calculate monthly earnings based on order history
    // e.g., make an API call to calculate earnings

    // Dummy data for demonstration
    const dummyMonthlyEarnings = 5000;

    setMonthlyEarnings(dummyMonthlyEarnings);
    setShowEarningsSummary(true);
  };

  if (registrationComplete) {
    if (orderHistory.length > 0 && !showEarningsSummary) {
      return (
        <div className="registration-container">
          <h2>Order History</h2>
          <ul>
            {orderHistory.map((order) => (
              <li key={order.id}>
                Order ID: {order.id} | Date: {order.date} | Status: {order.status}
              </li>
            ))}
          </ul>
          <button onClick={handleCalculateEarnings}>Calculate Monthly Earnings</button>
        </div>
      );
    }

    if (showEarningsSummary) {
      return (
        <div className="registration-container">
          <h2>Earnings Summary</h2>
          <p>Monthly Earnings: ${monthlyEarnings}</p>
        </div>
      );
    }

    return (
      <div className="registration-container">
        <h2>Profession Selection</h2>
        <form onSubmit={handleOrderHistory}>
          <div>
            <label htmlFor="profession">Select Your Profession:</label>
            <select
              id="profession"
              value={profession}
              onChange={handleProfessionChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="painter">Painter</option>
              <option value="other">Other</option>
            </select>
          </div>
          {profession === 'other' && (
            <div>
              <label htmlFor="otherProfession">Specify Other Profession:</label>
              <input
                type="text"
                id="otherProfession"
                value={otherProfession}
                onChange={handleOtherProfessionChange}
                required
              />
            </div>
          )}
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }

  return (
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} className="auth-form-container">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

