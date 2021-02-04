import React from 'react';
import Tooltip from 'components/Tooltip';
import Icon from 'components/Icon';

export default {
   component: Tooltip,
   title: 'Tooltip',
};

export const TooltipWithContent = () => (
   <div className="my-20">
      <Tooltip
         content={
            <div>
               <div className="font-semibold">
                  Tooltip
               </div>
               <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </div>
            </div>
         }
      >
         <Icon
            as="Info"
            color="blue"
            variant="shaded"
            isRounded
            size={8}
         />
      </Tooltip>
   </div>
)

export const TooltipWithTextToLeft = () => (
   <div className="my-10">
      <Tooltip
         color="indigo"
         content="Now you know."
         position="l"
         className="ml-36"
      >
         <Icon
            as="Info"
            color="indigo"
            variant="shaded"
            isRounded
            size={8}
         />
      </Tooltip>
   </div>
);

export const TooltipWithTextToTop = () => (
   <div className="my-10">
      <Tooltip
         color="green"
         content="Now you know."
         position="t"
         className="mt-4 ml-16"
      >
         <Icon
            as="Info"
            color="green"
            variant="shaded"
            isRounded
            size={8}
         />
      </Tooltip>
   </div>
);

export const TooltipWithTextToBottom = () => (
   <div className="my-10">
      <Tooltip
         color="purple"
         content="Now you know."
         position="b"
         className="mb-4 ml-16"
      >
         <Icon
            as="Info"
            color="purple"
            variant="shaded"
            isRounded
            size={8}
         />
      </Tooltip>
   </div>
);
