import React from "react";
import { Button } from "@mui/material"


interface Props {
    setOnClick: () => void;
}

export const MyButton: React.FC<Props> = (props) => {
    const { setOnClick } = props;

    return (
        <Button variant="outlined" size="large" onClick={setOnClick}>Submit</Button>
        )
}

