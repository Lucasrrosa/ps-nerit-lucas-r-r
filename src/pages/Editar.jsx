import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Paper, Typography, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { addPessoa, editPessoa } from '../redux/actions'
import { bindActionCreators } from 'redux';

const editarStyles = theme => ({
  button: {
    margin: theme.spacing.unit*2,
  },
  paper: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 2,

  },
  title: {
    margin: theme.spacing.unit * 2,
  }
})

class Editar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].name: '',
      phone: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].phone:'',
      street: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].street:'',
      number: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].number:null,
      complement: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].complement:'',
      neighborhood: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].neighborhood:'',
      city: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].city:'',
      state: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].state:'',
      date: this.props.match.params.id ?this.props.pessoas[this.props.match.params.id].state: dayjs().format('DD/MM/YYYY')
    }
  }

  onChange = name => e => {
    this.setState({ [name]: e.target.value })
  }

  onSalvar = () => {
    if(this.props.match.params.id){
      this.props.editPessoa(this.state, this.props.match.params.id)
    } else{
      this.props.addPessoa(this.state);
    }
    this.props.history.goBack();
  }

  render() {
    const pessoaId = this.props.match.params.id
    const { pessoas, classes } = this.props
    const { name, phone, street, number, complement, neighborhood, city, state } = this.state;
    
    return (
      <main>
        <Grid container justify="center">
          <Grid item >
            <Paper className={classes.paper}>
              <Typography className={classes.title} variant="title" align="center" >{pessoaId ? `Editar pessoa: ${pessoas[pessoaId].name}` : 'Cadastrar pessoa'}</Typography>
              <Grid container spacing={24}>
                <Grid item md={8}>
                  <TextField
                    id="name"
                    label="Nome"
                    style={{ margin: 8 }}
                    placeholder="Digite aqui o nome"
                    fullWidth
                    value={name}
                    onChange={this.onChange('name')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={4}>
                  <TextField
                    id="phone"
                    label="Telefone"
                    style={{ margin: 8 }}
                    placeholder="Digite aqui o telefone"
                    value={phone}
                    onChange={this.onChange('phone')}
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item md={8} >
                  <TextField
                    id="street"
                    label="Rua"
                    style={{ margin: 8 }}
                    placeholder="Digite aqui o nome da rua"
                    fullWidth
                    value={street}
                    onChange={this.onChange('street')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={4} >
                  <TextField
                    id="number"
                    label="Número"
                    style={{ margin: 8 }}
                    placeholder="Número"
                    value={number}
                    onChange={this.onChange('number')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item md={3}>
                  <TextField
                    id="complement"
                    label="Complemento"
                    style={{ margin: 8 }}
                    placeholder="Complemento do endereço"
                    value={complement}
                    onChange={this.onChange('complement')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    id="neighborhood"
                    label="Bairro"
                    style={{ margin: 8 }}
                    value={neighborhood}
                    onChange={this.onChange('neighborhood')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    id="city"
                    label="Cidade"
                    style={{ margin: 8 }}
                    value={city}
                    onChange={this.onChange('city')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={3}>
                  <TextField
                    id="state"
                    label="Estado"
                    style={{ margin: 8 }}
                    value={state}
                    onChange={this.onChange('state')}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
              <Grid item md={4} alignContent="flex-end">
                <Button className={classes.button} onClick={() => this.props.history.goBack()} variant="contained" color="default">
                  Cancelar
                </Button> 
                <Button className={classes.button} onClick={this.onSalvar} variant="contained" color="primary">
                  Salvar
                </Button> 
              </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </main>
    );
  }
}

const mapStateToProps = state => ({ pessoas: state.listagem.listagem })
const mapDispatchToProps = dispatch => bindActionCreators({addPessoa, editPessoa}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(editarStyles)(Editar));