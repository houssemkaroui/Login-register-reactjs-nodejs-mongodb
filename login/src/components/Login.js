import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { login } from './UserFunctions'


class  Login extends Component {
  constructor () {
    super()
    this.state={
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
  onSubmit (e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })

  }

render (){
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  className="form" noValidate onSubmit={this.onSubmit}>
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
            Sign In
          </Button>
         
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}



}
  
export default Login;