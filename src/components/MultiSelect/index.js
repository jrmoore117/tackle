import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Field from 'components/Field';
import { FieldElementLeft } from 'components/FieldElement';
import TextField from 'components/TextField';
import Chip from 'components/Chip';
import Checkbox from 'components/Checkbox';
import Icon from 'components/Icon';

const MultiSelect = ({
   icon,
   label,
   color,
   items,
   variant,
   position,
   children,
   className,
   ...props
}) => {

   // handle click away from absolute position options list
   const multiSelectRef = useRef();
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleClickAway = (e) => {
         if (multiSelectRef.current.contains(e.target)) return;
         setIsOpen(false);
      }
      document.addEventListener("mousedown", handleClickAway);
      return () => {
         document.removeEventListener("mousedown", handleClickAway);
      };
   }, [setIsOpen]);

   // filter for unique items
   const uniqueItems = Array.from(new Set(items.map(item => item.label)))
      .map(label => {
         return items.find(item => item.label === label);
      })

   // available options and selected options
   const [options, setOptions] = useState(uniqueItems);
   const [selected, setSelected] = useState([]);

   // search string and option filter
   const [searchString, setSearchString] = useState("");
   const handleOnChange = (e) => {
      const { value } = e.target;
      value
         ? setOptions(uniqueItems.filter(item => item.label.toLowerCase().includes(value.toLowerCase())))
         : setOptions(uniqueItems)
      setSearchString(value);
   }

   return (
      <div ref={multiSelectRef} className="relative" {...props}>
         <Field className="w-full">
            <span className="inline-flex items-center">
               {selected.map((item, i) => (
                  <Chip
                     isSmall
                     key={`selecteditem-${i}`}
                     label={item.label}
                     onClick={() => setSelected(selected.filter(i => i.label !== item.label))}
                     className={i === selected.length - 1 ? 'mr-2' : 'mr-1'}
                  />
               ))}
            </span>
            <TextField
               value={searchString}
               onChange={handleOnChange}
               onClick={() => setIsOpen(true)}
            />
         </Field>
         <ul className={isOpen ? `py-2 font-sans text-sm text-gray-900 bg-white border-1 border-gray-100 shadow-md rounded inline-block z-10 mt-2 absolute left-0 right-0 top-full animate-fade-in-to-b` : 'hidden'}>
            {options.map((item, i) => (
               <MultiSelectItem
                  isSelected={selected.includes(item)}
                  key={`multiselectitem-${i}`}
                  label={item.label}
                  addItem={() => setSelected([...selected, item])}
                  removeItem={() => setSelected(selected.filter(i => i.label !== item.label))}
               />
            ))}
            {options.length === 0 && (
               <div className="flex items-center text-gray-600 px-2">
                  No results for "{searchString}"
               </div>
            )}
         </ul>
      </div>
   );
}

MultiSelect.id = 'MultiSelect';

MultiSelect.defaultProps = {
}

MultiSelect.propTypes = {
   icon: PropTypes.string,
   label: PropTypes.string,
   color: PropTypes.string,
   variant: PropTypes.string,
   position: PropTypes.string,
   className: PropTypes.string,
}

export default MultiSelect;

export const MultiSelectItem = ({
   icon,
   label,
   addItem,
   removeItem,
   className,
   isSelected,
   ...props
}) => (
   <li
      onClick={isSelected ? removeItem : addItem}
      className={`h-8 px-2 flex items-center cursor-pointer select-none whitespace-nowrap hover:bg-gray-0 ${className || ''}`}
      {...props}
   >
      <Checkbox checked={isSelected} />
      {label}
   </li>
);

MultiSelectItem.propTypes = {
   icon: PropTypes.string,
   onClick: PropTypes.func,
   className: PropTypes.string,
   label: PropTypes.string.isRequired,
}
