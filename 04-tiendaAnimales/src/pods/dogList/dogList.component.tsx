import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { PetsCart } from "@/core/petsCart/petsCart.vm";
import { PetsContext } from "@/core/petsCart";

interface Props {
    pets: PetsCart[]
}

export const DogList: React.FC<Props> = (props) => {
    const { pets } = props;
    const { petsCart, setPetsCart } = React.useContext(PetsContext);
    const [ dogs, setDogs ] = React.useState([])

    React.useEffect(() => {
        setDogs(pets.map((pet) => ({
          ...pet,
          selected: petsCart.includes(pet.id)
        })))
    }, [petsCart])

    const handleOnClick = (e) => {
      setPetsCart([...petsCart, Number(e.target.value)])
    }
  return (
    <ImageList cols={4}>
      {dogs.map((pet) => (
        <ImageListItem key={pet.title} sx={{ width: 200, height: 100 }}>
          <img
            srcSet={require(`/assets/img/${pet.picUrl}`)}
            alt={pet.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={pet.title}
            subtitle={<span>{pet.type}</span>}
            position="below"
          />
          <div>
                <input type="checkbox" value={pet.id} onChange={handleOnClick} checked={pet.selected}/> 
                <span>Comprar</span>
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}