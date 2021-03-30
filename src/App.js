import MobileInput from './components/MobileInput';
import React, {useEffect, useState} from 'react';
import './App.css';

import Header from './components/Header';

function App() {
  const [number, setNumber] = useState('');
  useEffect(()=>{
    setNumber(localStorage.getItem('number')||'');
  },[]);

  const info = [
    {'question':'Where will I get the gift card?', 'answer':'You will receive it on Whatsapp/SMS on your mobile'},
    {'question':'When will I receive the gift card?', 'answer':'Within 48 hours, when your Man Matters order is delivered.'},
    {'question':'What if I cancel the order?', 'answer':'The voucher will not be delivered if you cancel the order.'},
  ]

  return (
    <div className="App">
      <div className='wrapper'>
      <Header />

      <div className='content'>
        {number && <div className='content-top'>
          <div className='gift-notice' >You have WON paytm gift card of Rs. 200 for placing the order on man matters</div>
        </div>}
        {!number && <MobileInput setNumber={setNumber} />}      
      </div>
     <div className='content-faq'>
        {number && (
          info.map((item)=>{
            return (
                <div className='row'>
                  <div className='icon-wrapper'>icon</div>
                  <div className='qa-wrapper'>
                    <div className='question'> {item.question}</div>
                    <div className='answer'>{item.answer}</div>
                  </div>
                </div>
            )
          })
        )}

       <div className='powered'>Powered by GoKwik</div>
     </div>
     </div>
    </div>    
  );
}

export default App;