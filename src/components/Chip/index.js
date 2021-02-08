import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

const Chip = ({
   label,
   color,
   variant,
   isSmall,
   isRounded,
   pingColor,
   className,
   ...props
}) => (
   <span
      className={`text-xs font-semibold tracking-wide pl-1.5 rounded select-none rounded-full text-blue-500 bg-blue-0 inline-flex items-center justify-between`}
      // className={`Chip Chip--${variant}--${color} ${isSmall ? 'Chip--small' : ''} ${isRounded ? 'Chip--rounded' : ''} ${pingColor ? `animate-ping-${pingColor}` : ''} ${className || ''}`}
      {...props}
   >
      {label}
      <Icon as="X" color="blue" variant="clickable" isRounded size={5} className="ml-1" />
   </span>
);

Chip.defaultProps = {
   color: 'gray',
   variant: 'default',
}

Chip.propTypes = {
   label: PropTypes.string,
   variant: PropTypes.string,
}

export default Chip;