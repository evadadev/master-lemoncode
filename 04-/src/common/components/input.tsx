import React from "react";
import { FormControl, TextField } from "@mui/material";

interface Props {
    value: string;
    setValue: (value: string) => void;
    label: string;
}

export const Input: React.FC<Props> = (props) => {
    const {value ,setValue, label} = props;

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <TextField  
            label={label}
            id="outlined-size-small"
            size="small" 
            value={value} 
            onChange={handleChange}/>
        </FormControl>
    )
}