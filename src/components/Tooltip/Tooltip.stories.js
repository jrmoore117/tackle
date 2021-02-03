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
         <Icon as="Info" color="blue" variant="shaded" isRounded size={8} />
      </Tooltip>
   </div>
)

export const TooltipWithText = () => (
   <div className="my-10">
      <Tooltip content="Now you know." color="indigo">
         <Icon as="Info" color="indigo" variant="shaded" isRounded size={8} />
      </Tooltip>
   </div>
);
