import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Receipt extends Component {
      
    render(){

      return(

        <div className="login text-gray">
            <h2>Oooops...</h2>
            <p>This service is currently unavailable. It'll be back soon!</p>
            <p style={{ marginTop: '20px', fontWeight: 'bolder', color: 'coral'}}><Link to="/home">Continue shopping >>></Link> </p>
        </div>

      )

    }

  }


  export default Receipt