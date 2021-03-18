import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { Clickable } from "reakit/Clickable";

const Icon = ({
   as,
   size,
   color,
   variant,
   padding,
   onClick,
   isSolid,
   isDisabled,
   isRounded,
   isFocusable,
   className,
   ...props
}) => {
   const Icon = Icons[as];
   return (
      variant === 'clickable' ? (
            <Clickable
               as="div"
               onClick={onClick}
               disabled={isDisabled}
               focusable={isFocusable}
               className="icon--clickable"
            >
               {cloneElement(<Icon />, { 
                  className: `icon--clickable--${color} h-${size} w-${size} p-${padding} ${isRounded ? 'rounded-full' : 'rounded'} ${isSolid ? 'fill-current' : ''} ${className || ''}`
               })}
            </Clickable>
         ) : (
            cloneElement(<Icon />, {
               className: `icon--${variant}--${color} h-${size} w-${size} p-${padding} ${isRounded ? 'rounded-full' : 'rounded'} ${isSolid ? 'fill-current' : ''} ${className || ''}`
            })
         )
   );
}

Icon.id = 'Icon';

Icon.defaultProps = {
   size: 4,
   variant: 'default',
   isFocusable: false,
}

Icon.propTypes = {
   as: PropTypes.string.isRequired,
   size: PropTypes.number,
   color: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
}

export default Icon;