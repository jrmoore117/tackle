import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

const Avatar = ({
   src,
   size,
   label,
   color,
   className,
   ...props
}) => {
   const avatarClasses = classNames(
      'avatar',
      `h-${size}`,
      `w-${size}`, 
      className, {
      [`avatar--${color}`]: !src,
   });

   return (
      <div className={avatarClasses}>
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
   size: 12,
   color: 'blue',
   className: '',
}

Avatar.propTypes = {
   src: PropTypes.string,
   size: PropTypes.number,
   color: PropTypes.string,
   className: PropTypes.string,
}

export default Avatar;
