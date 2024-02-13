import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
} from 'common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character: character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Nombre" />
          <TextFieldComponent name="species" label="Especie" />
          <TextFieldComponent name="type" label="Tipo" />
          <TextFieldComponent name="gender" label="Género" />
          <TextFieldComponent
            name="status"
            label="Status"
            multiline={true}
            rows={3}
          />
          <TextFieldComponent
            name="bestScenes"
            label="Mejores frases"
            multiline={true}
            rows={3}
          />
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
