import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from "./components";
import { AccordionProvider } from "./useAccordionContext";

const Accordion = ({
   color,
   children,
   className,
   ...props
}) => {
   return (
      <AccordionProvider value={{ color }}>
         <div
            className={`accordion ${className}`}
            {...props}
         >
            {children}
         </div>
      </AccordionProvider>
   );
}

Accordion.defaultProps = {
   color: 'blue',
   className: '',
}

Accordion.propTypes = {
   color: PropTypes.string,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

Accordion.Panel = Panel;

export { Accordion };
