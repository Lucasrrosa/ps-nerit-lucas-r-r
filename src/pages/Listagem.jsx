import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, withStyles, Paper, Fab, Grid } from '@material-ui/core'
import ListItemPessoa from '../components/ListItemPessoa'
import { removePessoa } from '../redux/actions'
import { Add } from '@material-ui/icons';
import { bindActionCreators } from 'redux';

const listagemStyles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    margin:theme.spacing.unit*2,

  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
})

class Listagem extends Component {

  constructor(props) {
    super(props);
    this.state={

    }
  }
  
  onDelete = index => {
    this.props.removePessoa(index);
  }

  renderList = () =>{
    const list = this.props.listagem || []
    return list.map((item, index) =><ListItemPessoa onDelete={() => this.props.removePessoa(index)} index={index} {...item} {...this.props} />)
  }
  
  render() {
    const { classes } = this.props;
    return (
      <main>
        <Grid container >
          <Grid item xs={12} >
            <Paper className={classes.paper} >
              <List>
                {
                  this.renderList()
                }
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Fab color="secondary" onClick={()=>this.props.history.push('/criar')} className={classes.fab}>
          <Add />
        </Fab>
      </main>

    );
  }
}

const mapStateToProps = state => ({ listagem: state.listagem.listagem })
const mapDispathcToProps = dispatch => bindActionCreators({removePessoa}, dispatch)
export default connect(mapStateToProps, mapDispathcToProps)(withStyles(listagemStyles)(Listagem));