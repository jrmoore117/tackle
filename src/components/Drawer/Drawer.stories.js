import React from 'react';
import Drawer, { DrawerHeader, DrawerBody, DrawerFooter } from 'components/Drawer';
import Button from 'components/Button';

export default {
   component: Drawer,
   title: 'Drawer',
};

export const DefaultBlue = () => {
   const [visible, setVisible] = React.useState(false);
   return (
      <div>
         <Button onClick={() => setVisible(true)} color="blue" label="Open Drawer" />
         <Drawer visible={visible} hide={() => setVisible(false)}>
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
