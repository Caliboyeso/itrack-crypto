import React, { useEffect, useState } from 'react';
// App.css
import './App.css';
// Axios package
import axios from 'axios';
// Coin component
import Crypto from './Crypto';

// App component
const App = () => {

  // Stores the crypto the user searched for
  const [crypto, setCrypto] = useState([]);

  // Stores the users input
  const [search, setSearch] = useState('');

  // A hook that searches for the crypto 
  useEffect(() => {
    // Performing http request with axios
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
      )
      // Returns a promise with a list of crypto's
      .then(res => {
        setCrypto(res.data);
      })
      // Returns a error message if the list cannot be retrieved
      .catch(err => console.log(err));
  }, []);

  // This function calls the coingecko API when the user enters data into the the form
  const handleChange = e => {
    setSearch(e.target.value);
  };

  // This function will render a list of crypto the DOM
  const filteredCrypto = crypto.filter(crypto => 
      crypto.name.toLowerCase().includes(search.toLowerCase())
    );
  
  // Returns a search box along with 10 different crypto's with its information
  return (
    <div className='crypto-app'>
      <div className='crypto-search'>
        <h1 className='crypto-text'>Search a currency</h1>
        {/* A form tag handle user data */}
        <form>
          {/* A input tag to accept user data */}
          <input 
            className='crypto-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {/* Searches for the crypto the user searched for */}
      {filteredCrypto.map(crypto => {
        // Returns the Crypto component along with the crypto information
        return (
          // Crypto component
          <Crypto 
            // Key
            key={crypto.id}
            // Name
            name={crypto.name}
            // Price
            price={crypto.current_price}
            // Symbol
            symbol={crypto.symbol}
            // Marketcap
            marketcap={crypto.market_cap}
            // Volume
            volume={crypto.total_volume}
            // Image
            image={crypto.image}
            // PriceChange
            priceChange={crypto.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

// Exporting App component
export default App;