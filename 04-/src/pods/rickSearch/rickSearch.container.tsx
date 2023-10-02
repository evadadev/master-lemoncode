import { Input } from "@/common"
import React from "react"

export const RickSearchContainer: React.FC = () => {
    const [value, setValue] = React.useState({})

    return (
        <div>
            <label>name</label>
            <input value="name" type="text" />
        </div>
        // <Input value={value} onchange={setValue}/>
    )
}