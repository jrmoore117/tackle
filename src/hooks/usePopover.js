import { useState, useEffect } from "react";

export const usePopover = (ref) => {

   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleClickAway = (e) => {
         if (ref.current.contains(e.target)) return;
         setIsOpen(false);
      }

      document.addEventListener("mousedown", handleClickAway);
      
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };
   }, [setIsOpen]);

   return [isOpen, setIsOpen];
}
