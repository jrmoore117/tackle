import React, { createContext, useContext } from "react";

const DrawerContext = createContext(undefined);

const DrawerProvider = ({ children, value }) => {
   return (
      <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
   );
}

const useDrawerContext = () => {
   const context = useContext(DrawerContext);
   if (context === undefined) {
      throw new Error("useDrawerContext must be used within a DrawerProvider");
   }
   return context;
}

export { DrawerProvider, useDrawerContext };
