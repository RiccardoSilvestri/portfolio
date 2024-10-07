import React, { useState } from 'react';

const ContactMe = () => {
  const [user, setUser] = useState('');

  const something = (event) => {
    event.preventDefault();
    setUser("INVIATO") 
  };
  return (
    <div>
      <h1>Form</h1>
      {!user ? (
        <form onSubmit={something}>
          <input
            type="text"
            placeholder="qualcosa"
            name="qualcosa"
            required
          />
          <button type="submit">Invia</button>
        </form>
      ) : (
        <div>
          <h1>Inviato</h1>
          <button onClick={() => setUser('')}>torna in  dietro</button>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
