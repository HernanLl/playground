import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import styles from './CustomSelect.module.css';
import drop from '../../assets/drop.svg'

interface Item {
  label: string;
  id: string;
}

export interface CustomSelectProps {
  placeholder?: string;
  value?: string;
  items: Item[];
  onClick: (id: string) => void;
}

const CustomSelect = ({ placeholder, items, onClick, value }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>();
  const selectRef: any = useRef();

  useEffect(() => {
    setSelectedItem(items?.find((item) => item?.id === value));
  }, [value]);

  const handleClickItem = (id: string) => {
    if (!isOpen) return;
    selectRef.current.blur();
    setSelectedItem(items.find((item) => item.id === id));
    setIsOpen(false);
    onClick(id);
  };

  return (
    <Box className={styles.main} ref={selectRef} tabIndex={1} onBlur={() => isOpen && setIsOpen(false)}>
      <Box
        className={styles.inputWrapper}
        onClick={() => {
          if (isOpen) selectRef.current.blur();
          else {
            setIsOpen(true);
            selectRef.current.focus();
          }
        }}
      >
        <Box className={styles.input}>
          {selectedItem ? (
            <Typography>{selectedItem.label}</Typography>
          ) : (
            <Typography className={styles.name}>{placeholder}</Typography>
          )}
          <Box className={styles.icon}>
            <img src={drop} alt='' />
          </Box>
        </Box>
      </Box>
      {items?.length > 0 && (
        <Box className={`${styles.items} ${isOpen ? styles.itemsOpen : ''}`}>
          {items?.map((item) => (
            <Box key={item.id} className={styles.item} onClick={() => handleClickItem(item.id)}>
              <Typography>{item.label}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CustomSelect;
