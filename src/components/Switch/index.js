import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({
   name,
   value,
   label,
   checked,
   onChange,
   className,
   ...props
}) => (
   <label className={`flex items-center ${className}`}>
      <div
         name={name}
         value={value}
         data-type="switch"
         className="switch"
         onClick={onChange}
         {...props}
      >
         <div
            name={name}
            value={value}
            data-type="switch"
            onClick={onChange}
            data-type="switch"
            className={`switchbutton transform ${checked ? 'bg-blue-500 border-2 border-blue-200 translate-x-full animate-radio-ping-blue' : 'border-1 border-gray-200 bg-gray-500 -translate-x-px'}`}
         />
      </div>
      <span className="switchlabel">
         {label}
      </span>
   </label>
);

Switch.propTypes = {
   className: PropTypes.string,
}

export default Switch;
