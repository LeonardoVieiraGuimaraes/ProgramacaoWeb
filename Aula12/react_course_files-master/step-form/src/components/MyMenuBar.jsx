import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    menuButton: { marginRight: theme.spacing(2) },
    title: {flexGrow: 1}
}))

export default function MyMenuBar() {

    const classes = useStyles()
    
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit">
                    <Link to="/" styles={{color: "write"}}> <MenuIcon /> </Link>
                </IconButton>
                <Typography variant="h6" className={classes.title}> Amiibo </Typography>

            </Toolbar>
        </AppBar>
    )

}