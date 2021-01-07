import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

// assets
import Landing from '../../assets/hero_video.png'
import Logo from '../../assets/logo_hero.png'
import Video from '../../assets/IMG_0012.MP4'
import Mobile from './Mobile'
import Tomato from '../../assets/bemtatkozas_tomato.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 'calc(100vh - 70px)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
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
    details: {
        width: '100%',
        height: '25%',
        //background: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 2
    },
    detail: {
        width: '30%',
        height: '100%',
        //background: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: '#DD443D',
        fontFamily: 'Sarpanch',
        fontSize: 30,
        fontFamily: 'Sarpanch',
        fontWeight: 1000
    },
    text: {
        color: '#D1D0D1',
        fontSize: 18,
        fontFamily: 'PT Sans Narrow'
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
    
}))

const LandingSection = ({
    language,
    myRef
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))
    if (mobile) {
        return (
            <Mobile language={language}/>
        )
    } else {
        return (
            <div className={classes.container} ref={myRef}>
                
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
                <div className={classes.details}>
                    <div className={classes.detail}>
                        <div>
                            <Typography className={classes.header}>{language === 'hun' ? 'nyitvatartás' : 'opening times'}</Typography>
                            <Typography className={classes.text}>H-P 11:00 - 20:00</Typography>
                            <Typography className={classes.text}>Sz-V 12:00 - 21:00</Typography>
                        </div>
                    </div>
                    <div className={classes.detail}>
                        <div>
                            <Typography className={classes.header}>{language === 'hun' ? 'rendelés' : 'delivery'}</Typography>
                            <Typography className={classes.text}>+3622304141</Typography>
                        </div>
                    </div>
                    <div className={classes.detail}>
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
}

export default LandingSection