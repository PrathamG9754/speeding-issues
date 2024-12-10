import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankAccountPassword, setBankAccountPassword] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    const itemModel = e.target.itemModel.value;
    setCartItems([...cartItems, { name: itemName, model: itemModel }]);
    e.target.itemName.value = '';
    e.target.itemModel.value = '';
  };

  const handleRemoveItem = (index) => {
    setCartItems(cartItems.filter((item, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerInfo = {
      name: customerName,
      address: address,
      aadharNumber: aadharNumber,
      phoneNumber: phoneNumber,
      bankAccountNumber: bankAccountNumber,
      bankAccountPassword: bankAccountPassword,
    };
    const order = { customerInfo, cartItems };
    console.log(order);
    // Send the order to the server or database
  };

  const styles = {
    container: {
      background: '#ffffff',
      padding: '20px 30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      margin: '20px auto',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontSize: '14px',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      marginBottom: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
    },
    button: {
      backgroundColor: '#4caf50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 15px',
      fontSize: '14px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    removeButton: {
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '5px 10px',
      fontSize: '12px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    list: {
      listStyle: 'none',
      padding: '0',
    },
    listItem: {
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cart</h1>
      <form onSubmit={handleAddItem} style={styles.formGroup}>
        <label style={styles.label}>
          Item Name:
          <input type="text" name="itemName" style={styles.input} />
        </label>
        <label style={styles.label}>
          Item Model:
          <input type="text" name="itemModel" style={styles.input} />
        </label>
        <button type="submit" style={styles.button}>
          Add to Cart
        </button>
      </form>
      <h2 style={styles.title}>Cart Items:</h2>
      <ul style={styles.list}>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item.name} - {item.model}
            <button
              onClick={() => handleRemoveItem(index)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 style={styles.title}>Customer Information:</h2>
      <form onSubmit={handleSubmit} style={styles.formGroup}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Aadhar Number:
          <input
            type="number"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Phone Number:
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Bank Account Number:
          <input
            type="number"
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Bank Account Password:
          <input
            type="password"
            value={bankAccountPassword}
            onChange={(e) => setBankAccountPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Cart;
