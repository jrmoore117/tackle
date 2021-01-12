import React from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from 'components/Modal';
import Button from 'components/Button';

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
            <ModalHeader>
               Delete Account
            </ModalHeader>
            <ModalBody>
               Are you sure you want to delete you account? This cannot be undone.
            </ModalBody>
            <ModalFooter className="flex">
               <Button color="red" label="Delete" leftIcon="Trash" onClick={() => setVisible(false)} className="mr-2" />
               <Button color="red" variant="secondary" label="Nevermind" onClick={() => setVisible(false)} />
            </ModalFooter>
         </Modal>
      </div>
   );
}