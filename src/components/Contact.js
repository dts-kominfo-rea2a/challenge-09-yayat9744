// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (data) => {
  return (
    <>
      {data.data.map((ex) => {
        return (
          <div className='box'>
            <div className='box-left'>
              <img src={ex.photo} alt='gambar' />
            </div>
            <div className='box-right'>
              <span style={{ fontWeight: "bold" }}>{ex.name}</span>
              <br />
              <span>{ex.phone}</span>
              <br />
              <span>{ex.email}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Contact;