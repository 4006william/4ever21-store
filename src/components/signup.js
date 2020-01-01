import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }
  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }
  signup = (e) => {
    e.preventDefault()
    window.location.href="/success"
  }

    render(){

      return(

        <div>
            <nav className="nav">
                <button className="logo-btn">
                    <Link to="/"><h3 style={{ fontStyle: 'italic' }}>4ever21</h3></Link>         
                </button>        
            </nav>
            <form className="login text-gray" onSubmit={this.signup}>
                  <label>Username/Email:</label>
                  <input onChange={this.handleTextChange}
                    value={this.state.username}
                    name="username" 
                    placeholder="John Doe" required/><br />

                  <label>Password:</label>
                  <input onChange={this.handleTextChange}
                    value={this.state.password}
                    name="password" type="password" placeholder="*********" required/><br />

                  <label>Confirm password:</label>
                  <input onChange={this.handleTextChange}
                    value={this.state.confirmPassword}
                    name="confirmPassword" type="password" placeholder="*********" required/><br />
                    
                  <button type="submit" className="logger-btn">Sign Up</button> <br />
                  <a href="/login">Already have an account? Log in</a>
            </form>
           
        </div>

      )

    }

  }


  export default Signup