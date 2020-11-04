import React from 'react';
import Test from './Test';
import Box from '../Box/Box';
import Button from '../Button/Button';
import { ArrowUpCircle } from 'react-feather';

export default {
   component: Test,
   title: 'Test',
};

export const Example = () => {
   return(
      <div>
         <Box className="inline-block text-gray-900">
            <div>
               <h1 className="text-2xl font-bold mb-4 flex items-center"><ArrowUpCircle className="h-8 w-8 mr-2 text-purple-500" />Update Available</h1>

            </div>
            <p className="mb-4">A new software update is available for download.</p>
            <div className="flex">
               <Button label="Update" color="purple" className="mr-4"/>
               <Button label="Not now" variant="secondary" color="purple" />
            </div>
         </Box>
      </div>
   );
}
