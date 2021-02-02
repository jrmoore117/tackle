import React, { useState } from 'react';

const Tooltip = ({
   content,
   children,
   className
}) => {
   
   const [visible, setVisible] = useState(false);

   return (
      <div className={`tooltipwrapper relative inline-block ${className || ''}`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
         <div className={visible ? 'ml-2 absolute left-full top-1/2 transform -translate-y-1/2 text-sm w-80' : 'hidden'}>
            <div className="inline-block p-4 bg-blue-0 rounded border-1 border-blue-200 shadow-md-blue animate-fade-in-to-r">
               {content}
            </div>
         </div>
         {children}
      </div>
   );
}

export default Tooltip;
