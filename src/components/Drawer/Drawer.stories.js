import React, { useState } from 'react';
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from 'components/Drawer';
import { Button } from 'components/Button';

export default {
   component: Drawer,
   title: 'Drawer',
};

export const DefaultBlue = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div>
         <Button onClick={() => setIsOpen(true)} color="blue" label="Open Drawer" />
         <Drawer isOpen={isOpen} hide={() => setIsOpen(false)}>
            <DrawerHeader>
               List Item
            </DrawerHeader>
            <DrawerBody>
               <div style={{ height: 5000 }}>Scrollale list item details</div>
            </DrawerBody>
            <DrawerFooter className="flex justify-end">
               <Button color="blue" variant="secondary" label="Previous" className="mr-2" />
               <Button color="blue" label="Next" />
            </DrawerFooter>
         </Drawer>
      </div>
   );
}
