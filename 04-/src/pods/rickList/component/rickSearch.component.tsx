import  React from "react";
import { Input } from "@/common";
import { InputSelect } from "@/common/components/input-select";
import { useDebounce } from "use-debounce";

interface Filter {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

interface Props {
    onChange: (value: string) => void;
}

export const RickSearch: React.FC<Props> = (props) => {
    const { onChange } = props;
    const [ filters, setFilters ] = React.useState<Filter>({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
    });
    const [debounceFilters] = useDebounce(filters, 2000)

    React.useEffect(() => {
        parseString()
    }, [debounceFilters])

    const handleSetFilters = (data) => (value) => {
        setFilters({
            ...filters,
            [data]: value
        })
    }

    const parseString = () => {
        let urlParameters = Object.entries(filters).map(e => {
            if(e[1] !== "") {
                return e.join('=')
            }
        })

        const query = urlParameters.filter(item => item).join('&');
        onChange(`?${query}`)
    }

    const optionsStatus = [
        {value: "alive", text: "vivo"},
        {value: "dead", text: "muerto"},
        {value: "unknown", text: "desconocido"},
    ]

    const optionsGender = [
        {value: "female", text: "femenino"},
        {value: "male", text: "masculino"},
        {value: "genderless", text: "sin género"},
        {value: "unknown", text: "desconocido"},
    ]
    
    return (
        <>
        <Input value={filters.name} setValue={handleSetFilters("name")} label="Nombre"  />
        <InputSelect value={filters.status} setValue={handleSetFilters("status")} label="Estado" options={optionsStatus}/>
        <Input value={filters.species} setValue={handleSetFilters("species")} label="Especie" />
        <Input value={filters.type} setValue={handleSetFilters("type")} label="Tipo" />
        <InputSelect value={filters.gender} setValue={handleSetFilters("gender")} label="Género" options={optionsGender}/>
        </>
    )
}