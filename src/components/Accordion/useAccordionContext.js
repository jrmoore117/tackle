import React, { createContext, useContext } from "react";

const AccordionContext = createContext(undefined);

const AccordionProvider = ({ children, value }) => {
   return (
      <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>
   );
}

const useAccordionContext = () => {
   const context = useContext(AccordionContext);
   if (context === undefined) {
      throw new Error("useAccordionContext must be used within a AccordionProvider");
   }
   return context;
}

export { AccordionProvider, useAccordionContext };
