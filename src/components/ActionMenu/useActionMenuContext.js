import React, { createContext, useContext } from "react";

const ActionMenuContext = createContext(undefined);

const ActionMenuProvider = ({ children, value }) => {
   return (
      <ActionMenuContext.Provider value={value}>{children}</ActionMenuContext.Provider>
   );
}

const useActionMenuContext = () => {
   const context = useContext(ActionMenuContext);
   if (context === undefined) {
      throw new Error("useActionMenuContext must be used within a ActionMenuProvider");
   }
   return context;
}

export { ActionMenuProvider, useActionMenuContext };
