import React from 'react';
import {
   Radio as RadioButton,
   RadioGroup as RadioButtonGroup
} from "reakit/Radio";
import PropTypes from 'prop-types';

export const Radio = ({
   label,
   className,
   ...props
}) => (
   <label className={`radio--wrapper ${className || ''}`}>
      <RadioButton
         className="radio"
         {...props}
      />
      <span className="radio--label">
         {label}
      </span>
   </label>
);

Radio.propTypes = {
   label: PropTypes.string,
   className: PropTypes.string,
}

export const RadioGroup = ({ className, ...props }) => {
   return (
      <RadioButtonGroup
         className={`radio--group ${className}`}
         {...props}
      />
   );
}

RadioGroup.propTypes = {
   className: PropTypes.string,
}
