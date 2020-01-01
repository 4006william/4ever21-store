import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="relative" style={{ backgroundColor: "coral" }}>
            <Toolbar>
                <IconButton color="green">
                </IconButton>
                <Typography variant="h4" style={{ flexGrow: "1", fontStyle: "italic", fontWeight: "bolder" }}>
                <Link to="/">4ever21</Link>
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/home">Products</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/addItem">Add Item</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation