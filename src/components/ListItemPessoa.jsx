import React from 'react';
import { ListItemText, Typography, ListItemSecondaryAction, IconButton, ListItem, Grid } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const ListItemPessoas = props =>{
  const {index, name, phone, street, number, complement, neighborhood, city, state, date, tags, onDelete} = props;
  return (
    <ListItem>
        <ListItemText primary={name}
         secondary={
          <React.Fragment>
            <Grid container >
              <Grid item md={6}>
                <Typography variant="caption">
                  {`Index: ${index} Endereço: ${street}, ${number}${complement ? `, ${complement}` : ''} - ${neighborhood} - ${city} - ${state}`}
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography variant="caption">
                  Telefone: {phone.length===11? phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3'):
                              phone.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3')}
                </Typography >
              </Grid>
              <Grid item md={3}>
                <Typography variant="caption">
                  Data de registro: {date}
                </Typography>
              </Grid>
            </Grid>
            
            <Typography variant="caption">
              Telefone: {phone}
            </Typography >
            
            <Typography variant="caption">
              Tags: {tags && tags.split(', ')}
            </Typography>
          </React.Fragment>
        } />
        <ListItemSecondaryAction>
          <React.Fragment>
            <IconButton onClick={()=> props.history.push(`/editar/${index}`)} aria-label="Edit">
              <Edit />
            </IconButton>
            <IconButton  onClick={() => onDelete(index)} aria-label="Delete">
              <Delete />
            </IconButton>
          </React.Fragment>
        </ListItemSecondaryAction>
      </ListItem>
  )
} 
export default ListItemPessoas;