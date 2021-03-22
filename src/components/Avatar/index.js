import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({
   src,
   size,
   label,
   color,
   className,
   ...props
}) => (
   <div className={`avatar ${src ? '' : `avatar--${color}`} h-${size} w-${size} ${className}`}>
      {src
         ? (
            <img src={src} alt="user-avatar" />
         ) : (
            <span className="avatar--label">
               {label}
            </span>
         )
      }
   </div>
);

Avatar.defaultProps = {
   size: 12,
   className: '',
   color: 'gray',
}

Avatar.propTypes = {
   size: PropTypes.number,
   className: PropTypes.string,
}

export default Avatar;
