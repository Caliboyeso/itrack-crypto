import React from 'react';
// Crypto.css
import "./Crypto.css";

// Crypto component
const Crypto = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <div className='crypto-container'>
            <div className='crypto-row'>
                {/* Crypto Intro */}
                <div className='crypto'>
                    {/* Crypto image */}
                    <img src={image} alt='crypto-img'></img>
                    {/* Crypto name */}
                    <h1>{name}</h1>
                    {/* Symbol */}
                    <p className='crypto-symbol'>{symbol}</p>
                </div>
                {/* Crypto Data */}
                <div className='crypto-data'>
                    {/* Price */}
                    <p className='crypto-price'><span className='crypto-span'>Price: </span>${price}</p>
                    {/* Volume */}
                    <p className='crypto-volume'><span className='crypto-span'>Vol: </span>${volume.toLocaleString()}</p>
                    {/* Price Change */}
                    {priceChange < 0 ? (
                        <p className='crypto-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='crypto-percent green'>{priceChange.toFixed(2)}</p>
                    )}
                    {/* Marketcap */}
                    <p className='crypto-marketcap'><span className='crypto-span'>Mkt Cap: </span>${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

// Exporting Crypto component
export default Crypto;