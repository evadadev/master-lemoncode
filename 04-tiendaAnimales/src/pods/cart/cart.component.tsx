import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar, Paper, Stack, Typography } from "@mui/material";
import { PetsContext } from "@/core/petsCart";
import { pets } from "@/core/comon/db";
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart: React.FC = () => {
    const { petsCart, setPetsCart } = React.useContext(PetsContext);
    const [ cart, setCart ] = React.useState([]);

    React.useEffect(() => {
      setCart(pets.filter((pet) => petsCart.includes(pet.id)))
    }, [petsCart]);

    const handleOnClickDelete = () => {
      setPetsCart([]);
    }

    const handleOnClick = (id) => () => {
      const pets = petsCart.filter((pets) => pets !== id)
      setPetsCart(pets)
    }

    return (
        <>       
            <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
                <ShoppingCartIcon color="primary" />
                <Typography variant="h6" color="primary">Carrito</Typography>
                <Button onClick={handleOnClickDelete}>
                <DeleteIcon />
                <h4>Vaciar carrito</h4>
                </Button>
            </Stack>
            <Paper 
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
            <ImageList cols={1}>
              {cart.map((pet) => (
                <ImageListItem key={pet.id} sx={{ width: 80, height: 50 }}>
                    <img 
                      srcSet={require(`/assets/img/${pet.picUrl}`)}
                      alt={pet.title}
                      loading="lazy"
                      />
                      <ImageListItemBar
                      title={pet.title}
                      position="below"
                      />
                      <Button onClick={handleOnClick(pet.id)}>
                        <DeleteIcon />
                      </Button>
                </ImageListItem>
              ))}
            </ImageList>
              </Paper>
        </>
    )
}
