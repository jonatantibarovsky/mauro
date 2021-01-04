import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// assets
import Map from '../../assets/map.png'
import Address from '../../assets/cim_doodle.png'
import Phone from '../../assets/phone_doodle.png'
import At from '../../assets/at.png'
import Fb from '../../assets/fb.png'
import Open from '../../assets/open_doodle.png'

const useStyles = makeStyles(theme => ({
    container: {
        
        width: '90vw',
        padding: '0 5vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        paddingTop: 100,
        flexDirection: 'row',
        [theme.breakpoints.down(750)]: {
            flexDirection: 'column',
            height: 'auto',
            marginBottom: 30,
            paddingRight: 0,
            paddingLeft: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
        },
    },
    map: {
        height: 'auto',
        width: '35vw',
        minHeight: 280,
        minWidth: 280
    },
    detailsContainer: {
        height: '80%',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginBottom: 50,
        },
    },
    icon: {
        width: 40,
        height: 40
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    heading: {
        color: '#DD443D',
        fontSize: 50,
        fontFamily: 'Sarpanch',
        marginBottom: '10vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
            marginBottom: 30
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 30
        }
    },
    detail: {
        fontSize: 18,
        color: '#262626',
        fontFamily: 'PT Sans Narrow',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        },
    }
}))

const ContactMapSection = ({
    language
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container} id='contact'>
            <div className={classes.detailsContainer}>
                <Typography className={classes.heading}>{language == 'hun' ? 'kapcsolat' : 'contact'}</Typography>
                <div className={classes.iconsContainer}>
                    <img src={Address} className={classes.icon} />
                    <Typography className={classes.detail}>Székesfehérvár, Kossuth utca 4.</Typography>
                </div>
                <div className={classes.iconsContainer}>
                    <img src={Phone} className={classes.icon} />
                    <Typography className={classes.detail}>+36 (22) 304-141 | +36 (30)5300451</Typography>
                </div>
                <div className={classes.iconsContainer}>
                    <img src={At} className={classes.icon} />
                    <Typography className={classes.detail}>ristorantecaffemaurofehervar@gmail.com</Typography>
                </div>
                <div className={classes.iconsContainer}>
                    <img src={Fb} className={classes.icon} />
                    <Typography className={classes.detail}>@mauroetterem</Typography>
                </div>
                <div className={classes.iconsContainer}>
                    <img src={Open} className={classes.icon} />
                    <Typography className={classes.detail}>H-V 10:00-22:00</Typography>
                </div>

            </div>
            <img src={Map} className={classes.map} />

        </div>
    )
}

export default ContactMapSection