import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Avatar = ({
   src,
   size,
   label,
   color,
   className,
   ...props
}) => {
   const avatarClasses = classNames(
      'avatar',
      `avatar--${size}`, 
      className, {
      [`avatar--${color}`]: !src,
   });

   return (
      <div className={avatarClasses} {...props}>
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
}

Avatar.defaultProps = {
   src: '',
   size: 'md',
   color: 'blue',
   className: '',
}

Avatar.propTypes = {
   src: PropTypes.string,
   size: PropTypes.string,
   color: PropTypes.string,
   className: PropTypes.string,
}
