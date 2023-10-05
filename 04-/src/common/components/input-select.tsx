import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    value: string;
    setValue: (value: string) => void;
    label: string;
    options: Options[];
}

interface Options {
  value: string,
  text: string
}

export const InputSelect: React.FC<Props> = (props) => {
    const {value, setValue, label, options} = props;

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          size="small" 
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}