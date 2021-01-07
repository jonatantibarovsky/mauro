import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery, Drawer } from '@material-ui/core'
import { Link } from 'react-scroll'
import './style.css'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down(800)]: {
            height: 500,
            background: '#262626',
            flexDirection: 'column',
            position: 'absolute',
            top: '-500px'
        }
    },
    button: {
        fontSize: 14,
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow',
        textTransform: 'uppercase',
        marginRight: 20,
        marginLeft: 20,
        cursor: 'pointer',
        [theme.breakpoints.down(800)]: {
            marginTop: 30
        }
    },

    mobileContainer: {
        position: 'fixed',
        top: "100vh",
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'red',
        zIndex: 5,
    }
}))

const Nav = ({
    language,
    myRef1,
    myRef2,
    myRef3,
    myRef4,
    myRef5,
    myRef6,
    myRef7,
    showMenu,
    setLanguage
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const scroll1 = () => myRef1.current.scrollIntoView()
    const mobile = useMediaQuery(theme.breakpoints.down(800))

    if (mobile) {
        return (
            <div className={`navContainer ${showMenu ? `menuEnter` : `menuExit`}`} id='menu'>
                <Link to='intro' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'rólunk' : 'about us'}</Typography>
                </Link>
                <Link to='weekly' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'heti menü' : 'weekly menu'}</Typography>
                </Link>
                <Link to='menu' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'étlap' : 'menu'}</Typography>
                </Link>
                <Link to='drinkMenu' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'itallap' : 'drinks menu'}</Typography>
                </Link>
                <Link to='events' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'rendezvények' : 'events'}</Typography>
                </Link>
                <Link to='delivery' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'kiszállítás' : 'delivery'}</Typography>
                </Link>
                <Link to='contact' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'kapcsolat' : 'contact'}</Typography>
                </Link>
                <div style={{display: 'flex', right: 20, position: 'absolute'}}>
                    <Typography 
                        className={classes.button} 
                        style={{margin: '0 3px', fontWeight: language === 'hun' && 700}}
                        onClick={() => {
                            setLanguage('hun')
                        }}
                    >
                        HU
                    </Typography>
                    <Typography className={classes.button} style={{margin: '0 3px'}}>|</Typography>
                    <Typography 
                        className={classes.button} 
                        style={{margin: '0 3px', fontWeight: language !== 'hun' && 700}}
                        onClick={() => {
                            setLanguage('en')
                        }}
                    >
                        EN
                    </Typography>
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.container}>
                <Link to='intro' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'rólunk' : 'about us'}</Typography>
                </Link>
                <Link to='weekly' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'heti menü' : 'weekly menu'}</Typography>
                </Link>
                <Link to='menu' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'étlap' : 'menu'}</Typography>
                </Link>
                <Link to='drinkMenu' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'itallap' : 'drinks menu'}</Typography>
                </Link>
                <Link to='events' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'rendezvények' : 'events'}</Typography>
                </Link>
                <Link to='delivery' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'kiszállítás' : 'delivery'}</Typography>
                </Link>
                <Link to='contact' smooth={true}>
                    <Typography className={classes.button}>{language === 'hun' ? 'kapcsolat' : 'contact'}</Typography>
                </Link>
                <div style={{display: 'flex', right: 20, position: 'absolute'}}>
                    <Typography 
                        className={classes.button} 
                        style={{margin: '0 3px', fontWeight: language === 'hun' && 700}}
                        onClick={() => {
                            setLanguage('hun')
                        }}
                    >
                        HU
                    </Typography>
                    <Typography className={classes.button} style={{margin: '0 3px'}}>|</Typography>
                    <Typography 
                        className={classes.button} 
                        style={{margin: '0 3px', fontWeight: language !== 'hun' && 700}}
                        onClick={() => {
                            setLanguage('en')
                        }}
                    >
                        EN
                    </Typography>
                </div>
            </div>
        )
    }

    


}

export default Nav