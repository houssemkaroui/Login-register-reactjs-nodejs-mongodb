
import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { register } from './UserFunctions'
class  Register extends Component {
  constructor () {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: {}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

render (){
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  noValidate onSubmit={this.onSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="first_name"
            name="first_name"
            value={this.state.first_name}
            onChange={this.onChange}
            autoComplete="first_name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="last_name"
            name="last_name"
            value={this.state.last_name}
            onChange={this.onChange}
            autoComplete="last_name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
          >
            Register
          </Button>
         
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}



}
  
export default Register;