import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => (
    {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
        },
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
            backgroundImage: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
        },
        title: {
            color: 'write'
        },
        titleBar: {
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
        },
        linkStyle: {
            color: 'white'
        }
    }
))

export default function AmiiboGridList ({items}) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={6.0}>
                {
                    items.map(item => (
                        <GridListTile key={item.head + item.tail}>
                            <img src={item.image} alt={item.name} height={30} />
                            <GridListTileBar 
                                title={item.name}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title
                                }}
                                actionIcon={
                                    <IconButton aria-label={`${item.character} detais`}>
                                        <Link to={`/caracters/${item.head + item.tail}`} className={classes.linkStyle}>
                                            <InfoIcon />
                                        </Link>
                                    </IconButton>
                                }
                                />
                        </GridListTile>
                    ))
                }
            </GridList>
        </div>
    )

}