import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Clickable } from "reakit/Clickable";

const Icon = ({
   as,
   size,
   color,
   variant,
   onClick,
   rounded,
   disabled,
   focusable,
   className,
   ...props
}) => {
   const IconComponent = as;
   return (
      variant === 'clickable' ? (
            <Clickable
               as="div"
               onClick={onClick}
               disabled={disabled}
               focusable={focusable}
               className="icon--clickable"
            >
               {cloneElement(<IconComponent />, { 
                  className: `icon--clickable--${color} h-${size} w-${size} ${rounded ? 'rounded-full' : 'rounded'} ${className}`
               })}
            </Clickable>
         ) : (
            cloneElement(<IconComponent />, {
               className: `icon--${variant}--${color} h-${size} w-${size} ${rounded ? 'rounded-full' : 'rounded'} ${className}`
            })
         )
   );
}

Icon.id = 'Icon';

Icon.defaultProps = {
   size: 4,
   color: 'gray',
   variant: 'default',
   focusable: false,
}

Icon.propTypes = {
   as: PropTypes.object.isRequired,
   size: PropTypes.number,
   color: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
}

export default Icon;