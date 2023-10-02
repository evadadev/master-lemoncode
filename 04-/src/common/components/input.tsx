import React from "react";

interface Props {
    value: string;
    setValue: (value: string) => void;
}

export const Input: React.FC<Props> = (props) => {
    const {value ,setValue} = props;

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <input type="text" value={value} onChange={handleChange}/>
    )
}