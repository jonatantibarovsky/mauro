import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, Button, useMediaQuery } from '@material-ui/core'

import Icon from '../../assets/rendezvenyek_doodle.png'
import Image from '../../assets/rendezvenyek_pic.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '95%',
        margin: '0 auto',
        position: 'relative',
        marginBottom: 100,
        
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    header: {
        color: '#DD443D',
        fontSize: 50,
        position: 'absolute',
        left: '50%',
        top: '20%',
        fontFamily: 'Sarpanch',
        transform: 'translate(-50%, -20%)',
        [theme.breakpoints.down(1050)]: {
            position: 'static',
            transform: 'translate(0%, 0%)'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 30
        }
    },
    image: {
        height: 'auto',
        width: '50%',
        [theme.breakpoints.down(700)]: {
            width: '100%'
        }
    },
    text: {
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    rightSide: {
        paddingBottom: 30,
        alignSelf: 'flex-end',
        [theme.breakpoints.down(700)]: {
            alignSelf: 'flex-start',
            width: '100%'
        }
    },
    button: {
        width: 140,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        fontSize: 18,
        borderRadius: '4px',
        border: '2px solid #CE4A44',
        opacity: 1,
        textDecoration: 'none',
        [theme.breakpoints.down(700)]: {
            width: '80%'
        }
    },
    buttonContainer: {
        display: 'flex',
        [theme.breakpoints.down(700)]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    }
}))

const Events = ({
    language
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(700))
    return (
        <div className={classes.container} id='events'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography className={classes.header}>
                    {language == 'hun' ? 'rendezvények' : 'events'}
                </Typography>
            </div>
            <div className={classes.subContainer}>
                {mobile == false && <img src={Image} className={classes.image} />}
                {mobile && (
                    <div style={{width: '100%'}}>
                        <img src={Image} className={classes.image} />

                        <div className={classes.buttonContainer}>
                            <a href='tel:+36302346105' style={{ marginBottom: 30 }} className={classes.button}>telefon</a>
                            <a href='tel:+36302346105' className={classes.button}>email</a>
                        </div>

                    </div>
                )}
                <div className={classes.rightSide}>
                    <Typography className={classes.text}>
                        {language == 'hun' ? 
                            'Éttermünkben 30 főig tudunk helyszínt és ellátást biztosítani baráti, családi összejövetelkhez, céges rendezvényekhez.'
                            :
                            'We can provide a location and service for up to 30 guests in our restaurant, for friendly or family gatherings, corporate events.'
                        }
                    </Typography>
                    <Typography className={classes.text} style={{ marginBottom: 30 }}>
                        {language == 'hun' ?
                            'Külső helyszínen akár 50 főt is ki tudunk szolgálni olasz ételeinkkel, italokkal.'
                            :
                            'At an outside location, we can serve up to 50 people with our Italian foods & drinks.'
                        }
                    </Typography>
                    <Typography className={classes.text} style={{ fontWeight: 'bold', marginBottom: 40 }}>
                        {language == 'hun' ? 
                            'További információkért keressen elérhetőségeink egyikén!'
                            :
                            'For more information, please contact us through one of the methods below.'
                        }
                    </Typography>
                    {mobile == false &&
                        (<div className={classes.buttonContainer}>
                            <a href='tel:+36302346105' style={{ marginRight: 30 }} className={classes.button}>rendeles</a>
                            <a href='tel:+36302346105' className={classes.button}>rendeles</a>
                        </div>)}
                </div>

            </div>
        </div>

    )
}

export default Events