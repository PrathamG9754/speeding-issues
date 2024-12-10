import React from 'react';

const CongratulationsPage = () => {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    color: '#333',
    padding: '20px',
  };

  const messageStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    maxWidth: '600px',
    margin: '20px',
    fontSize: '24px',
    lineHeight: '1.5',
  };

  const highlightStyle = {
    color: '#ff6347',
    fontWeight: 'bold',
  };

  return (
    <div style={pageStyle}>
      <div style={messageStyle}>
        <h1>Congratulations!</h1>
        <p>
          Your Car will be delivered soon.. <span style={highlightStyle}>KEEP the Cash ready</span>
        </p>
      </div>
    </div>
  );
};

export default CongratulationsPage;