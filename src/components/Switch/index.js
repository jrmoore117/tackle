import React from 'react';
import PropTypes, { func } from 'prop-types';
import classNames from 'classnames';

const Switch = ({
   name,
   value,
   label,
   color,
   checked,
   onChange,
   className,
   ...props
}) => {
   const switchClasses = classNames(
      'switch', {
      'switch--inactive': !checked,
      [`switch--active--${color}`]: checked,
   });
   
   const switchButtonClasses = classNames(
      'transform',
      'switch--button', {
      'switch--button--active': checked,
      'switch--button--inactive': !checked,
   });

   return (
      <label className={`switch--wrapper ${className}`}>
         <div
            name={name}
            value={value}
            data-type="switch"
            className={switchClasses}
            onClick={onChange}
            {...props}
         >
            <div
               name={name}
               value={value}
               data-type="switch"
               onClick={onChange}
               className={switchButtonClasses}
            />
         </div>
         <span className="switch--label">
            {label}
         </span>
      </label>
   );
}

Switch.defaultProps = {
   label: '',
   color: 'blue',
   className: '',
}

Switch.propTypes = {
   name: PropTypes.string,
   label: PropTypes.string,
   color: PropTypes.string,
   value: PropTypes.bool,
   checked: PropTypes.bool,
   onChange: PropTypes.func,
   className: PropTypes.string,
}

export default Switch;
