import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// assets
import Landing from '../../../assets/hero_video.png'
import Logo from '../../../assets/logo_hero.png'
import Video from '../../../assets/IMG_0012.MP4'


const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${Landing})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 300,
        position: 'relative',
        /* [theme.breakpoints.down('xs')]: {
            height: 150
        } */
    },
    logoHero: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25%',
        maxWidth: 400,
        height: 'auto',
        minWidth: 160
    },
    details: {
        width: '95%',
        height: '25%',
        margin: '0 auto',
        //background: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        marginTop: 40,
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap'
        }
    },
    detail1: {
        height: '100%',
        //background: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            alignItems: 'flex-start'
        }
    },
    detail2: {
        height: '100%',
        //background: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            alignItems: 'flex-end'
        }
    },
    detail3: {
        height: '100%',
        //background: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '50%',
            alignItems: 'flex-start',
            marginTop: 30
        }
    },
    header: {
        color: '#DD443D',
        fontFamily: 'Sarpanch',
        fontSize: 25,
        [theme.breakpoints.down('xs')]: {
            fontSize: 22
        }
    },
    text: {
        color: '#D1D0D1',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 1
    },
    gradient: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #00000000 0%, #1A1A1C 100%)'
    },
    logoHero: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '25%',
        maxWidth: 400,
        height: 'auto',
        zIndex: 2
    },
}))

const LandingSection = ({
    language
}) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.container}>
                
            <div className={classes.gradient}>

</div>
            <video 
                    className={classes.video}
                    autoPlay
                    muted
                    disablePictureInPicture
                    loop
                    playsInline
                >
                    <source src={Video} />
                </video>
                <img src={Logo} className={classes.logoHero} />
            </div>
            <div className={classes.details}>
                <div className={classes.detail1}>
                    <div>
                        <Typography className={classes.header}>{language === 'hun' ? 'nyitvatartás' : 'opening times'}</Typography>
                        <Typography className={classes.text}>V-Cs 10:00 - 22:00</Typography>
                        <Typography className={classes.text}>P-Sz 10:00 - 23:00</Typography>
                    </div>
                </div>
                <div className={classes.detail2}>

                    <Typography className={classes.header}>{language === 'hun' ? 'rendelés' : 'delivery'}</Typography>
                    <a href='tel:+3622304141' style={{textDecoration: 'none'}}>
                        <Typography className={classes.text}>+3622304141</Typography>
                    </a>

                </div>
                <div className={classes.detail3}>
                    <div>
                        <Typography className={classes.header}>{language === 'hun' ? 'cím' : 'address'}</Typography>
                        <Typography className={classes.text}>Székesfehérvár</Typography>
                        <Typography className={classes.text}>Kossuth utca 4.</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection