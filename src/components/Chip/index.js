import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const Chip = ({
   label,
   color,
   isSmall,
   onClick,
   className,
   ...props
}) => (
   <span
      className={`chip chip--${color} ${isSmall ? 'chip--small' : ''} ${className || ''}`}
      {...props}
   >
      {label}
      <Icon
         as="X"
         color={color}
         variant="clickable"
         isRounded
         size={5}
         padding={1}
         className="ml-0.5"
         onClick={onClick}
      />
   </span>
);

Chip.defaultProps = {
   color: 'blue',
}

Chip.propTypes = {
   color: PropTypes.string,
   label: PropTypes.string.isRequired,
}

export default Chip;