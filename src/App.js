import React, { Component } from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  menu: {
    width: 200,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Node API
            </Typography>
          </Toolbar>
        </AppBar>
        <form noValidate autoComplete="off">
          <div>
            <TextField id="associateId" label="Associate ID" margin="normal" style = {{width: 300}}/>
          </div>
          <div>
            <TextField id="fname" label="First Name" margin="normal" style = {{width: 300}}/>
          </div>
          <div>
            <TextField id="lname" label="Last Name" margin="normal" style = {{width: 300}}/>
          </div>
          <Button variant="raised" color="primary" style = {{width: 300, marginTop: 28}}>Add employee</Button>
        </form>
      </div>
    );
  }
}

export default App;
