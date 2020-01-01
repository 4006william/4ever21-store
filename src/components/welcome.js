import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpeg'



const Welcome = () => {

      const guestLogin = () => {
        document.cookie= 'loggedIn=true;max-age = 120*1000'
      };
    return (
        <div className="welcome">
            <img src={logo} />
            <div className="canvas">
                <h1 style={{ fontSize: '60px', fontStyle: 'italic' }}>4ever21</h1>
                <button className="logger-btn" onClick={guestLogin}>
                    <Link to="/home"><h4>Continue as Guest</h4></Link>
                </button>
                <button className="logger-btn">
                  <Link to="/signup"><h4>Sign Up</h4></Link>
                </button>
                <p><Link to="/home">Already have an account? Log in</Link></p>
            </div>
        </div>
    )
}

export default Welcome