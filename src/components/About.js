import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import { Container, Divider, Switch } from '@material-ui/core'

class About extends Component {

    render() {
        
        return (
            <div>
                <Navigation />
                <div className="text-gray">
                    <Container maxWidth="sm">
                        <h1 style={{ textAlign: 'center' }}>About Our Store</h1>
                        <p>
                        WARNING! This is just a project and not a real active shopping website.
                            View the source code for this website here&nbsp; 
                            <a style={{ color: 'coral' }}
                            href="https://www.cars.com"
                            target="_blank">PROJECT CODE</a>
                            &nbsp;. <br /><br />
                            This web app is built using React and Redux. 
                            All data was sourced from http://makeup-api.herokuapp.com/
                            <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum.
                        </p>
                        <Divider />
                        <div>
                        
                        </div>
                    </Container>
                    <p style={{ textAlign: 'center' }}>&copy;2019 William Kiyola</p>
                </div>
            </div>
        )
    }
}

export default About