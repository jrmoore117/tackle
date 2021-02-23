import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chip from 'components/Chip';
import Field from 'components/Field';
import Checkbox from 'components/Checkbox';
import TextField from 'components/TextField';

const MultiSelect = ({
   items,
   isSmall,
   position, // currently unused
   className,
   placeholder,
   ...props
}) => {

   // handle click away from position:absolute options list
   const multiSelectRef = useRef();
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleClickAway = (e) => {
         if (multiSelectRef.current.contains(e.target)) return;
         setIsOpen(false);
      }
      document.addEventListener('mousedown', handleClickAway);
      return () => {
         document.removeEventListener('mousedown', handleClickAway);
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

   // filter - compare search string to options
   const [searchString, setSearchString] = useState('');
   const handleOnChange = (e) => {
      const { value } = e.target;
      value
         ? setOptions(uniqueItems.filter(item => item.label.toLowerCase().includes(value.toLowerCase())))
         : setOptions(uniqueItems)
      setSearchString(value);
   }

   // select matching item when Enter is pressed
   const handleOnKeyUp = (e) => {
      if (e.key === 'Enter') {
         const searchStringMatch = options.find(item => item.label.toLowerCase() === searchString.toLocaleLowerCase());
         const matchAlreadySelected = searchStringMatch
            ? selected.find(item => item.label === searchStringMatch.label)
            : null;
         
         if (searchStringMatch && !matchAlreadySelected) {
            setSearchString('');
            setOptions(uniqueItems);
            setSelected([...selected, searchStringMatch]);
         }
      }
   }

   return (
      <div
         ref={multiSelectRef}
         className={`multiselect-wrapper ${className}`}
         {...props}
      >
         <Field
            isSmall={isSmall}
            isFocused={isOpen}
            className="w-full"
         >
            <span className="selected-items">
               {selected.map((item, i) => (
                  <Chip
                     key={`selecteditem-${i}`}
                     isSmall
                     label={item.label}
                     onClick={() => setSelected(selected.filter(i => i.label !== item.label))}
                     className={i === selected.length - 1 ? 'mr-2' : 'mr-1'}
                  />
               ))}
            </span>
            <TextField
               value={searchString}
               onKeyUp={handleOnKeyUp}
               onChange={handleOnChange}
               placeholder={placeholder}
               onClick={() => setIsOpen(true)}
            />
         </Field>
         <ul className={isOpen ? 'item-list' : 'hidden'}>
            {options.map((item, i) => (
               <MultiSelectItem
                  key={`multiselectitem-${i}`}
                  label={item.label}
                  isSelected={selected.includes(item)}
                  addItem={() => setSelected([...selected, item])}
                  removeItem={() => setSelected(selected.filter(i => i.label !== item.label))}
               />
            ))}
            {options.length === 0 && (
               <div className="multiselect-no-results">
                  No results for "{searchString}"
               </div>
            )}
         </ul>
      </div>
   );
}

MultiSelect.defaultProps = {
   position: '',
   className: '',
   isSmall: false,
   placeholder: '',
}

MultiSelect.propTypes = {
   position: PropTypes.string,
   className: PropTypes.string,
   items: PropTypes.array.isRequired
}

export default MultiSelect;


export const MultiSelectItem = ({
   label,
   addItem,
   removeItem,
   isSelected,
   ...props
}) => (
   <li
      className="multiselect-item"
      onClick={isSelected ? removeItem : addItem}
      {...props}
   >
      <Checkbox checked={isSelected} />
      {label}
   </li>
);

MultiSelectItem.propTypes = {
   label: PropTypes.string.isRequired,
   addItem: PropTypes.func.isRequired,
   removeItem: PropTypes.func.isRequired,
   isSelected: PropTypes.bool.isRequired,
}
