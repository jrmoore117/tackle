import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { Clickable } from "reakit/Clickable";

const Icon = ({
   as,
   size,
   color,
   variant,
   onClick,
   isRounded,
   disabled,
   focusable,
   className,
   ...props
}) => {
   const Icon = Icons[as];
   return (
      variant === 'clickable' ? (
            <Clickable
               as="div"
               onClick={onClick}
               disabled={disabled}
               focusable={focusable}
               className="icon--clickable"
            >
               {cloneElement(<Icon />, { 
                  className: `icon--clickable--${color} h-${size} w-${size} ${isRounded ? 'rounded-full' : 'rounded'} ${className}`
               })}
            </Clickable>
         ) : (
            cloneElement(<Icon />, {
               className: `icon--${variant}--${color} h-${size} w-${size} ${isRounded ? 'rounded-full' : 'rounded'} ${className}`
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
   as: PropTypes.string.isRequired,
   size: PropTypes.number,
   color: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
}

export default Icon;