
  import React, { Component } from 'react'
  // import { Redirect } from 'react-router'
  import { Link } from 'react-router-dom'
  
  
  class Login extends Component {
    state = {
      username: '',
      password: '',
      // redirectToReferrer: false
    }
  
    handleTextChange = (e) => {
      const state = { ...this.state }
      state[e.target.name] = e.target.value
      this.setState(state)
    }
  
    login = (e) => {
      e.preventDefault()
      // this.setState(() => ({
      //   redirectToReferrer: true
      // }))
      document.cookie= 'loggedIn=true;max-age = 240*1000'
    }
  
    render() {
      // const { from } = this.props.location.state || { from: { pathname: '/' } }
      // const { redirectToReferrer } = this.state
  
      // if (redirectToReferrer === true) {
      //   return <Redirect to={from} />
      // }
      return (
        <div className="login text-gray">
          <nav className="login-nav">
                  <button className="logo-btn">
                  <Link to="/"><h3 style={{ fontStyle: 'italic' }}>4ever21</h3></Link>         
                   </button>
          </nav>
          <h3>Welcome!</h3>
           <form className="login-body" onSubmit={this.login}>
                  <label>Username/Email:</label>
                  <input onChange={this.handleTextChange}
                    value={this.state.username}
                    name="username" 
                    placeholder="John Doe" required/><br />
                  <label>Password:</label>
                  
                  <input onChange={this.handleTextChange}
                    value={this.state.password}
                    name="password" type="password" placeholder="*********" required/><br />
                  <button type="submit" className="logger-btn"><Link to="/home">Log in</Link></button> <br />
                  <p><Link to="/signup">Don't have an account? Sign Up</Link></p>
            </form>
        </div>
      );
    }
  }
  
  export default Login;