import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import Button from '@mui/material/Button';
import { deleteCharacterCollection } from './api';
import { useCharacterCollection } from './charcter-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [ pagination, setPagination ] = React.useState({start: 0, end: 3});
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(pagination.start, pagination.end);
  }, [pagination]);



  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacterCollection(id);
    loadCharacterCollection(pagination.start, pagination.end);
  };

  
  const handleNext = () => { 
      setPagination({start: pagination.start +3, end: pagination.end +3})
  }
  const handlePrev = () => { 
    if( pagination.start > 0) {
      setPagination({start: pagination.start -3, end: pagination.end -3})
    }
  }
  return (
    <>
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
    <div style={{ display: 'flex', justifyContent: 'center', margin: 10, gap: 5}}>
      <Button type="submit" variant="contained" color="primary" onClick={handlePrev}>
        Anterior
      </Button>
      <Button type="submit" variant="contained" color="primary" onClick={handleNext}>
        Siguiente
      </Button>
      </div>
    </>
  );
};
