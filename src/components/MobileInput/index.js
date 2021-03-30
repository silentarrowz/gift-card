import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input/input'
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'
import './styles.css';

const MobileInput = (props) => {
    const [value, setValue] = useState('');
    const [isValid, setValidity] = useState(false);

    const handleSubmit = () =>{
        localStorage.setItem('number',value);
        props.setNumber(value);
    }
    return(
        <>
        <PhoneInput
            placeholder="Enter mobile number"
            country="IN"
            value={value}            
            onChange={(val)=>{
                console.log('mobile : ',val);
                setValue(val);
                if(isValidPhoneNumber(val)){
                    setValidity(true);
                }else{
                    setValidity(false);
                }
            }}
        />
          <div className='enterNum'>Enter the same number used on man matters</div>
        <button className={`${isValid ? 'active':'inactive'}`} onClick={handleSubmit}>Wow! Get my paytm gift card  </button>
        </>
      )
}

export default MobileInput;
