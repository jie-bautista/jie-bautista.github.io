import React, { useState } from 'react';
import './Purchase.css';
import StripeContainer from './StripeContainer';

function Purchase() {
    const [showItem, setShowItem] = useState(false)
    return(
        <div className='Purchase'>
            {showItem ? <StripeContainer /> : <>
             <div className='product'>
                <h1>Premium Account Subscription</h1>
                <p>Enjoy Flixster ad-free, offline, and in the background</p>
                <h3>Php 249.00</h3>
             </div>
            <button className='stripeButton' onClick={() => setShowItem(true)}> Purchase Subscription</button></>}
        </div>
    )
}

export default Purchase;