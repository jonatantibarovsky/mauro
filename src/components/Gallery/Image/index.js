import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// assets
import Image1 from '../../../assets/galeria_1.jpg'

const useStyles = makeStyles(theme => ({
    image: { 
        width: '100%',
        height: '100%',
        maxWidth: 330,
        borderRadius: 5,
        objectPosition: 'cover',
        boxShadow: '3px 3px 10px #000000',
        marginRight: 10,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        [theme.breakpoints.down(1250)]: {
            width: '43%'
        }
    }
}))

const Image = () => {
    const classes = useStyles()
    return (
            <img src={Image1} className={classes.image}/>
    )
}

export default Image