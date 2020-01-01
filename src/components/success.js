import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Success extends Component {
      
    render(){
      
     
      return(

        <div className="login text-gray">
            <nav className="nav">     
              <button className="logo-btn">
                    <Link to="/"><h3>4ever21</h3></Link>         
              </button>
          </nav>

            <h3>Congratulations!</h3>
            <p>Your account was successfully created...</p>
            <button className="logger-btn"><Link to="/login"><h3>Log In</h3></Link> </button>
        </div>

      )

    }

  }


  export default Success