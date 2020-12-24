import React, { useState } from 'react';
import { useInput } from './hooks/input-hook';
import DatePickers from "./Date";
import ControlledOpenSelect from "./Selector";

function BookTour() {
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');



  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Your tour has been booked, please check your email for confirmation!`);
    resetFirstName();
    resetLastName();
    resetEmail();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" {...bindFirstName} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" {...bindLastName} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" {...bindEmail} />
      </label>
      <br />
      <DatePickers />
      <ControlledOpenSelect />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BookTour;