import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Listagem from './pages/Listagem';
import Editar from './pages/Editar';
import { createMuiTheme, MuiThemeProvider, AppBar, Typography, withStyles } from '@material-ui/core';
import { teal, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepPurple,
  },
});

const routes = [
  {
    exact: true,
    path: '/',
    component: Listagem,
  },
  {
    exact: true,
    path: '/editar/:id',
    component: Editar,
  },
  {
    exact: true,
    path: '/criar',
    component: Editar,
  }
]

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme} >
            <AppBar>
              <Typography variant="h6" color="inherit" >
                Processo seletivo Nerit
              </Typography>
            </AppBar>
            <main className={classes.content} >
              {routes.map(({ path, component, exact }, index) =>
                <Route key={index} path={path} component={component} exact={exact} />
              )}
            </main>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles, {withTheme: true})(App);
