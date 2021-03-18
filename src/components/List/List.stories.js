import React, { useState } from 'react';
import List from 'components/List';
import Box from 'components/Box';
import Checkbox from 'components/Checkbox';

export default {
   component: List,
   title: 'List',
};

export const DefaultList = () => {
   const [checked, setChecked] = useState(false);
   const [planets, setPlanets] = useState([
      { label: 'Mercury'},
      { label: 'Venus'},
      { label: 'Earth'},
      { label: 'Mars'},
      { label: 'Jupiter'},
      { label: 'Saturn'},
      { label: 'Uranus'},
      { label: 'Neptune'},
      { label: 'Pluto'},
   ]);
   const removePlanet = (item, index) => {
      setPlanets(planets.filter((planet, i) => i !== index));
      alert(`Removing "${item.label}"`);
   }
   const destroyPlanet = (item, index) => {
      setPlanets(planets.map((planet, i) => i === index
         ? { label: 'BOOM!' }
         : planet));
   }
   return (
      <div>
         <Checkbox
            className="mb-4"
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="Destroy planets?"
         />
         <Box className="h-64 overflow-scroll">
            <List
               items={planets}
               onClick={checked ? destroyPlanet : removePlanet}
            />
         </Box>
      </div>
   );
}