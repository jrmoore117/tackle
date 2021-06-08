import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';
import { useDrawerContext } from '../useDrawerContext';

const Header = ({
   className,
   children,
   ...props
}) => {
   const { hide } = useDrawerContext();

   return (
      <div
         className={`drawer--header ${className}`}
         {...props}
      >
         <Icon as="X" variant="clickable" color="blue" size="3xl" isRounded onClick={hide} className="drawer--header-button" />
         {children}
      </div>
   );
}

Header.defaultProps = {
   className: ''
}

Header.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
}

export { Header };
