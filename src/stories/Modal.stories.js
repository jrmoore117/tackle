import React from 'react';
import { Modal } from 'components/Modal';
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
            <Modal.Header className="flex items-center mb-2">
               <Icon as="ArrowUpCircle" size={6} color="blue" className="mr-2" />
               Update Available
            </Modal.Header>
            <Modal.Body>
               A new software update is available for download.
            </Modal.Body>
            <Modal.Footer className="flex">
               <Button color="blue" label="Update" className="mr-2" />
               <Button color="blue" variant="secondary" label="Not now" onClick={() => setIsVisible(false)} />
            </Modal.Footer>
         </Modal>
      </div>
   );
}

export const MediumModal = () => {
   const [isVisible, setIsVisible] = React.useState(false);
   return (
      <div>
         <Button onClick={() => setIsVisible(true)} color="blue" label="Open Modal" />
         <Modal size="md" isVisible={isVisible} hide={() => setIsVisible(false)}>
            <Modal.Header className="flex items-center mb-2">
               <Icon as="ArrowUpCircle" size={6} color="blue" className="mr-2" />
               Update Available
            </Modal.Header>
            <Modal.Body>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </Modal.Body>
            <Modal.Footer className="flex">
               <Button color="blue" label="Update" className="mr-2" />
               <Button color="blue" variant="secondary" label="Not now" onClick={() => setIsVisible(false)} />
            </Modal.Footer>
         </Modal>
      </div>
   );
}

export const LargeModal = () => {
   const [isVisible, setIsVisible] = React.useState(false);
   return (
      <div>
         <Button onClick={() => setIsVisible(true)} color="blue" label="Open Modal" />
         <Modal size="lg" isVisible={isVisible} hide={() => setIsVisible(false)}>
            <Modal.Header className="flex items-center mb-2">
               <Icon as="ArrowUpCircle" size={6} color="blue" className="mr-2" />
               Update Available
            </Modal.Header>
            <Modal.Body>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
               <p className="mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
            </Modal.Body>
            <Modal.Footer className="flex">
               <Button color="blue" label="Update" className="mr-2" />
               <Button color="blue" variant="secondary" label="Not now" onClick={() => setIsVisible(false)} />
            </Modal.Footer>
         </Modal>
      </div>
   );
}
