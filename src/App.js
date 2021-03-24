import MobileInput from './MobileInput';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [isValid, setValidity] = useState(false);
  const handleValid = (val)=> setValidity(val)
  return (
    <div className="App">
      <div className='wrapper'>
      <div className='headerContainer'>
        <h3>man matters</h3>
        <h2>Congratulations</h2>

        <div className='paytm'>
          
          <div>Paytm</div> 
          <div>Gift Card Rs.200</div>
        </div>
       
      </div>

      <div className='content'>
        <div className='content-top'>
          You have won paytm gift card of Rs. 200 for placing order on man matters
        </div>
        <MobileInput handleValid={handleValid} />
        <div className='enterNum'>Enter the same number used on man matters</div>
      </div>
      <button>Wow! Get my paytm gift card  </button>
     {isValid && 'Number is Valid'}

     <div>
     <div>Where will I get the gift card?</div>
       <div>When will I receive the gift card?</div>
       <div>What if I cancel the order?</div>
     </div>
     </div>
    </div>
  );
}

export default App;
