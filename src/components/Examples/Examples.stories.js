import React from 'react';
import Box from 'components/Box';
import Examples from 'components/Examples';
import Button from 'components/Button';
import { 
   Zap,
   Home,
   Coffee,
   ShoppingBag,
   ShoppingCart,
   ArrowUpCircle,
} from 'react-feather';

export default {
   component: Examples,
   title: 'Examples',
};

export const ExampleOne = () => {
   return(
      <div>
         <Box className="p-4 inline-block text-gray-900">
            <div>
               <h1 className="text-xl font-medium mb-1 flex items-center">
                  <ArrowUpCircle className="h-6 w-6 mr-2 text-blue-500" />
                  Update Available
               </h1>
            </div>
            <p className="mb-4 text-sm">A new software update is available for download.</p>
            <div className="flex">
               <Button label="Update" color="blue" className="mr-4"/>
               <Button label="Not now" variant="secondary" color="blue" />
            </div>
         </Box>
      </div>
   );
}

export const ExampleTwo = () => {
   return(
      <Box variant="frame" color="purple" className="p-4 inline-block">
         <h1 className="text-2xl font-medium">Transactions</h1>
         <div className="py-4 flex border-b-1 border-gray-200">
            <Box color="purple" className="p-2 inline-block text-gray-900">
               <ShoppingCart className="w-6 h-6 text-white" />
            </Box>
            <div className="px-4 w-40">
               <h2 className="text-l">Groceries</h2>
               <p className="text-gray-700 text-xs font-light">Food & Drink</p>
            </div>
            <div className="flex flex-col items-end w-40">
               <h2 className="text-l">- $78</h2>
               <p className="text-gray-700 text-xs font-light">Credit Card</p>
            </div>
         </div>
         <div className="py-4 flex border-b-1 border-gray-200">
            <Box color="purple" className="p-2 inline-block text-gray-900">
               <Home className="w-6 h-6 text-white" />
            </Box>
            <div className="px-4 w-40">
               <h2 className="text-l">Rent</h2>
               <p className="text-gray-700 text-xs font-light">Bills</p>
            </div>
            <div className="flex flex-col items-end w-40">
               <h2 className="text-l">- $1500</h2>
               <p className="text-gray-700 text-xs font-light">Debit Card</p>
            </div>
         </div>
         <div className="py-4 flex border-b-1 border-gray-200">
            <Box color="purple" className="p-2 inline-block text-gray-900">
               <Coffee className="w-6 h-6 text-white" />
            </Box>
            <div className="px-4 w-40">
               <h2 className="text-l">Coffee</h2>
               <p className="text-gray-700 text-xs font-light">Food & Drink</p>
            </div>
            <div className="flex flex-col items-end w-40">
               <h2 className="text-l">- $3.50</h2>
               <p className="text-gray-700 text-xs font-light">Credit Card</p>
            </div>
         </div>
         <div className="py-4 flex border-b-1 border-gray-200">
            <Box color="purple" className="p-2 inline-block text-gray-900">
               <ShoppingBag className="w-6 h-6 text-white" />
            </Box>
            <div className="px-4 w-40">
               <h2 className="text-l">Jacket</h2>
               <p className="text-gray-700 text-xs font-light">Clothing</p>
            </div>
            <div className="flex flex-col items-end w-40">
               <h2 className="text-l">- $98</h2>
               <p className="text-gray-700 text-xs font-light">Credit Card</p>
            </div>
         </div>
         <div className="py-4 flex">
            <Box color="purple" className="p-2 inline-block text-gray-900">
               <Zap className="w-6 h-6 text-white" />
            </Box>
            <div className="px-4 w-40">
               <h2 className="text-l">PG & E</h2>
               <p className="text-gray-700 text-xs font-light">Bills</p>
            </div>
            <div className="flex flex-col items-end w-40">
               <h2 className="text-l">- $122</h2>
               <p className="text-gray-700 text-xs font-light">Debit Card</p>
            </div>
         </div>
      </Box>
   );
}
