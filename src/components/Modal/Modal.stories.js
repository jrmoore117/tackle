import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'components/Modal';
import Button from 'components/Button';
import Icon from 'components/Icon';

export default {
   component: Modal,
   title: 'Modal',
};

export const DefaultBlue = () => {
   const [visible, setVisible] = React.useState(false);
   return (
      <div>
         <Button onClick={() => setVisible(true)} color="blue" label="Open Modal" />
         <Modal visible={visible} hide={() => setVisible(false)}>
            <ModalHeader className="flex items-center">
               <Icon as="ArrowUpCircle" size={6} color="blue" className="mr-2" />
               Update Available
            </ModalHeader>
            <ModalBody>
               A new software update is available for download.
            </ModalBody>
            <ModalFooter className="flex">
               <Button color="blue" label="Update" className="mr-2" />
               <Button color="blue" variant="secondary" label="Not now" onClick={() => setVisible(false)} />
            </ModalFooter>
         </Modal>
      </div>
   );
}
