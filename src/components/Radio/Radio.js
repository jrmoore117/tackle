import React from 'react';
import { Radio as RadioButton, RadioGroup as RadioButtonGroup } from "reakit/Radio";
import PropTypes from 'prop-types';

export const Radio = ({ label, className, ...props }) => {
   return (
      <label className="mr-4">
         <RadioButton
            className={`radio radio--default mr-1`}
            {...props}
         />
         {label}
      </label>
   );
}

Radio.propTypes = {
   label: PropTypes.string,
   className: PropTypes.string,
}

export const RadioGroup = ({ className, ...props }) => {
   return (
      <RadioButtonGroup
         className={`radiogroup ${className}`}
         {...props}
      />
   );
}

RadioGroup.propTypes = {
   className: PropTypes.string,
}
