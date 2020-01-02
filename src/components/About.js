import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import { Container, Divider } from '@material-ui/core'

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
                            href="https://github.com/4006william/4ever21-store"
                            target="_blank">PROJECT CODE</a>
                            &nbsp;. <br /><br />
                            This web app is built using React and Redux. 
                            All data was sourced from http://makeup-api.herokuapp.com/
                            <br /><br />
                            Like the project and want to discuss further?&nbsp; 
                            <a style={{ color: 'coral' }}
                            href="https://www.linkedin.com/in/william-kiyola-676480161/"
                            target="_blank">Contact me</a>
                            &nbsp;and we'll 
                            make it happen!
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