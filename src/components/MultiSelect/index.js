import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chip from 'components/Chip';
import Field from 'components/Field';
import Checkbox from 'components/Checkbox';
import TextField from 'components/TextField';

const MultiSelect = ({
   icon,
   label,
   color,
   items,
   variant,
   isSmall,
   position,
   children,
   className,
   placeholder,
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

   // search string and option filter
   const [searchString, setSearchString] = useState('');
   const handleOnChange = (e) => {
      const { value } = e.target;
      value
         ? setOptions(uniqueItems.filter(item => item.label.toLowerCase().includes(value.toLowerCase())))
         : setOptions(uniqueItems)
      setSearchString(value);
   }

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
      <div ref={multiSelectRef} className={`multiselect-wrapper ${className || ''}`} {...props}>
         <Field className="w-full" isSmall={isSmall}>
            <span className="selected-items">
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
               placeholder={placeholder}
               onKeyUp={handleOnKeyUp}
               onChange={handleOnChange}
               onClick={() => setIsOpen(true)}
            />
         </Field>
         <ul className={isOpen ? 'item-list' : 'hidden'}>
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
               <div className="multiselect-no-results">
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
      className={`multiselect-item ${className || ''}`}
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
