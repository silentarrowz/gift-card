import React from 'react';
import './styles.css';

const Header = () => (
  <div className='headerContainer'>
    <h3 className='man'>man <span>matters</span></h3>
    <h2 className='congratulations'>Congratulations</h2>

    <div className='paytm'>
      
     <span className='pay'>pay</span> 
     <span className='tm'>tm</span>
      <div className='gift'>Gift Card  Rs.200</div>
    </div>
    
  </div>
);

export default Header;