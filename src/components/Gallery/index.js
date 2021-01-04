import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// components
import Image from './Image'

const useStyles = makeStyles(theme => ({
    container: {   
        display: 'flex',
        maxWidth: 1100,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '-450px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-400px',
        },
        [theme.breakpoints.down(500)]: {
            marginTop: '-350px',
        },
        [theme.breakpoints.down(400)]: {
            marginTop: '-250px',
        }
    }
}))

const Gallery = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
        </div>
    )
}

export default Gallery