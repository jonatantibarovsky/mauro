import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// assets
import ContactBackground from '../../assets/kapcsolat.png'
import Logo from '../../assets/logo-footer.png'
import Facebook from '../../assets/facebook-footer_doodle.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        }
    },
    background: {
        width: '100%',
        height: 'calc(100% - 140px)',
        maxHeight: 600,
        objectPosition: 'cover',
        [theme.breakpoints.down('sm')]: {
            maxHeight: 300
        }
    },
    footerContainer: {
        height: 140,
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        }
    },
    logoContainer: {
        width: 120,
        height: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: 110
        }
    },
    logo: {
        width: '100%',
        height: '100%',
        objectPosition: 'fit'
    },
    facebook: {
        width: 24,
        height: 24
    },
    facebookContainer: {
        display: 'flex'
    },
    contactDetails: {
        marginLeft: 26,
        fontFamily: 'PT Sans Narrow',
        color: '#262626',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14
        }
    },
    text: {
        fontFamily: 'PT Sans Narrow',
        color: '#262626',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14
        }
    }
}))

const Contact = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img src={ContactBackground} className={classes.background}/>
            <div className={classes.footerContainer}>
                <div>
                    <div className={classes.facebookContainer}>
                        <img src={Facebook} className={classes.facebook}/>
                        <Typography className={classes.text}>@mauroetterem</Typography>
                    </div>
                    <Typography className={classes.contactDetails}>©CafféMauro 2020</Typography>
                    <Typography className={classes.contactDetails}>Designed by TASNADI&co</Typography>

                </div>
                <div className={classes.logoContainer}>
                    <img src={Logo} className={classes.logo}/>

                </div>
            </div>
        </div>
    )
}

export default Contact