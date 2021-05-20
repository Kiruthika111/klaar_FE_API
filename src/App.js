import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Bank from './Bank';
import './Bank.css';

function App() {
  const [banks, setbanks] = useState([]);
  const [search, setSearch] = useState('');
  

  var filteredbanks;
  useEffect(() => {
    axios
      .get(
        'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI'
      )
      .then(res => {
        setbanks(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);


  const handleChange = e => {
    setSearch(e.target.value);
  };


  filteredbanks = banks.filter(bank =>
    bank.bank_name.includes(search)
  );

  return (
    <div className='bank-app'>
      <div className='bank-search'>
        <h1 className='bank-text'>BANKS</h1>
        <form>
          <input
            className='bank-input'
            type='text'
            onChange={handleChange}
            placeholder='Enter bank name'
          />
        </form>
        
      
      </div>
      {filteredbanks.map(bank => {
        return (
          <Bank
            key={bank.ifsc}
            ifsc={bank.ifsc}
            name={bank.bank_name}
            branch={bank.branch}
            address={bank.address}
            city={bank.city}
            district={bank.district}
            state={bank.state}
          />
         
        );
      })}
      
    </div>
  );
}

export default App;
