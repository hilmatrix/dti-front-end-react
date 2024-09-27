import React from 'react';
import "./style.css";

const Index: React.FC = () => {
  return (
    <div className='submit-message'>
        <h1>Let's build something cool together</h1>
        <label>Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <input type='text'></input>
        <button>Submit</button>
    </div>
  );
}

export default Index;
