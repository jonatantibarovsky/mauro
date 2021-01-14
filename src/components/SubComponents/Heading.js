import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    headingContainer: {
        width: '80%',
        display: 'flex',
        maxWidth: 1000,
        alignItems: 'flex-start',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        }
    },
    image: {
        width: '85%',
        height: 'auto',
        marginLeft: 'auto'
    },  
    headingText: {
        color: '#DD443D',
        fontFamily: 'Sarpanch',
        fontSize: 50,
        [theme.breakpoints.down('sm')]: {
            fontSize: 30
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 25
        }
    },
    headingTextContainer: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    date: {
        fontSize: 30,
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow',
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 18
        }
    }
}))

const Heading = ({
    heading,
    date1,
    date2,
    image,
    mirror
}) => {
    const classes = useStyles()
    return (
        <div className={classes.headingContainer}>
            <div className={classes.headingTextContainer} style={{right: mirror && 0}}>
                <Typography className={classes.headingText}>{heading}</Typography>
                {date1 && <Typography className={classes.date}>{date1}</Typography>}
                {date2 && <Typography className={classes.date}>{date2}</Typography>}
            </div>
            <img src={image} className={classes.image} style={{marginLeft: mirror && 0}}/>
        </div>
    )
}

export default Heading