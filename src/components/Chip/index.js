import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const Chip = ({
   label,
   color,
   className,
   ...props
}) => (
   <span
      className={`chip chip--${color} ${className || ''}`}
      {...props}
   >
      {label}
      <Icon as="X" color={color} variant="clickable" isRounded size={5} className="ml-0.5" />
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