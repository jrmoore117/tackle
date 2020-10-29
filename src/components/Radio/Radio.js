import React from 'react';
import { Radio as RadioButton, RadioGroup as RadioButtonGroup } from "reakit/Radio";
import PropTypes from 'prop-types';

export const Radio = ({
   label,
   className,
   ...props
}) => (
   <label className="mr-4 flex items-center">
      <RadioButton
         className={`radio radio--default`}
         {...props}
      />
      <span className="cursor-pointer select-none">
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
         className={`radiogroup flex ${className}`}
         {...props}
      />
   );
}

RadioGroup.propTypes = {
   className: PropTypes.string,
}
