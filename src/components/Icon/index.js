import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { Clickable } from "reakit/Clickable";

const Icon = ({
   as,
   size,
   onClick,
   disabled,
   focusable,
   className,
   ...props
}) => {
   const IconComponent = as;
   return (
      onClick ? (
            <Clickable
               as="div"
               onClick={onClick}
               disabled={disabled}
               focusable={focusable}
               className="outline-none cursor-pointer inline-block"
            >
               {cloneElement(<IconComponent />, { className: `h-${size} w-${size} ${className}` })}
            </Clickable>
         ) : (
            cloneElement(<IconComponent />, { className: `h-${size} w-${size} ${className}` })
         )
   );
}

Icon.id = 'Icon';

Icon.defaultProps = {
   size: 5,
   focusable: false,
}

Icon.propTypes = {
   as: PropTypes.object.isRequired,
   size: PropTypes.number,
   onClick: PropTypes.func,
   className: PropTypes.string,
}

export default Icon;