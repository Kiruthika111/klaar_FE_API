import React from 'react';
import './Bank.css';

const bank = ({
  key,
  ifsc,
  name,
  branch,
  address,
  city,
  district,
  state
}) => {
  return (
    <div className='bank-text'>
      <div >
        <div className='bank-text1'>
          <h3>IFSC:&nbsp;&nbsp;{ifsc}</h3>
          <p>NAME:&nbsp;&nbsp; {name}</p>
          <p>BRANCH:&nbsp;&nbsp; {branch}</p>
        </div>
        
        <div className='bank-text2'>
        <p>
           ADDRESS:&nbsp;&nbsp; {address}
          </p>
          <p>CITY:&nbsp;&nbsp; {city}</p>
          <p>DISTRICT:&nbsp;&nbsp; {district}</p>
          <p className='border'>STATE:&nbsp;&nbsp; {state}</p>
          
        </div>
        
      </div>
    </div>
  );
};

export default bank;
