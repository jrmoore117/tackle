import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Icons from 'react-feather';
import { Clickable } from "reakit/Clickable";

import '../../css/tackle.output.css';

export const Icon = ({
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

   const iconClasses = classNames(
      `h-${size}`,
      `w-${size}`,
      `p-${padding}`,
      className, {
      'rounded': !isRounded,
      'rounded-full': isRounded,
      'fill-current': isSolid,
   });

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
                  className: `icon--clickable--${color} ${iconClasses}`
               })}
            </Clickable>
         ) : (
            cloneElement(<Icon />, {
               className: `icon--${variant}--${color} ${iconClasses}`
            })
         )
   );
}

Icon.id = 'Icon';

Icon.defaultProps = {
   size: 4,
   padding: 0,
   variant: 'default',
   isSolid: false,
   isRounded: false,
   isDisabled: false,
   isFocusable: false,
   className: '',
}

Icon.propTypes = {
   size: PropTypes.number,
   padding: PropTypes.number,
   color: PropTypes.string,
   variant: PropTypes.string,
   onClick: PropTypes.func,
   isSolid: PropTypes.bool,
   isRounded: PropTypes.bool,
   isDisabled: PropTypes.bool,
   isFocusable: PropTypes.bool,
   className: PropTypes.string,
   as: PropTypes.string.isRequired,
}
