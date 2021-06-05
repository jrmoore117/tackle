import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'components/Modal';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';

export default {
   component: Modal,
   title: 'Modal',
};

export const SmallModal = () => {
   const [isVisible, setIsVisible] = React.useState(false);
   return (
      <div>
         <Button onClick={() => setIsVisible(true)} color="blue" label="Open Modal" />
         <Modal isVisible={isVisible} hide={() => setIsVisible(false)}>
            <ModalHeader className="flex items-center mb-2">
               <Icon as="ArrowUpCircle" size={6} color="blue" className="mr-2" />
               Update Available
            </ModalHeader>
            <ModalBody>
               A new software update is available for download.
            </ModalBody>
            <ModalFooter className="flex">
               <Button color="blue" label="Update" className="mr-2" />
               <Button color="blue" variant="secondary" label="Not now" onClick={() => setIsVisible(false)} />
            </ModalFooter>
         </Modal>
      </div>
   );
}

export const LargeModal = () => {
   const [isVisible, setIsVisible] = React.useState(false);
   return (
      <div>
         <Button onClick={() => setIsVisible(true)} color="blue" label="Open Modal" />
         <Modal size="large" isVisible={isVisible} hide={() => setIsVisible(false)}>
            <ModalHeader className="flex items-center mb-2">
               <Icon as="ArrowUpCircle" size={6} color="blue" className="mr-2" />
               Update Available
            </ModalHeader>
            <ModalBody>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
               <p className="mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
            </ModalBody>
            <ModalFooter className="flex">
               <Button color="blue" label="Update" className="mr-2" />
               <Button color="blue" variant="secondary" label="Not now" onClick={() => setIsVisible(false)} />
            </ModalFooter>
         </Modal>
      </div>
   );
}
