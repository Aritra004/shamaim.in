import React, {useState} from 'react';
import './maddress.css';

const Maddress = () => {
    const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  const handleAddAddress = () => {
    setShowModal(true);
  };

  const handleSaveAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress('');
    setShowModal(false);
  };

  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(index, 1);
      return updatedAddresses;
    });
  };
  return (
    <div className="ma-container">
      <h1 className="ma-title">Manage Address</h1>
      <h2 className="ma-sub">Current Address:</h2>
      {addresses.map((address, index) => (
        <div className="ma-p">
        <input type="radio" name="address" key={index} />
        <label key={index}>{address}</label>
        <button onClick={() => handleDeleteAddress(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddAddress} className="ma-button">Add Address</button>

      {showModal && (
        <div className="m-modal">
          <div className="m-modal-content">
            <h3>Add New Address</h3>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <button onClick={handleSaveAddress}>Save Address</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Maddress