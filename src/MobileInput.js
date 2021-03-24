import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input/input'
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'

const MobileInput = (props) => {
    const [value, setValue] = useState('');
    return(
        <PhoneInput
            placeholder="Enter mobile number"
            country="IN"
            value={value}
            onChange={(val)=>{
                console.log('mobile : ',val);
                if(isValidPhoneNumber(val)){
                    props.handleValid(true);
                }else{
                    props.handleValid(false);
                }
            }}
        />
      )
}

export default MobileInput;
