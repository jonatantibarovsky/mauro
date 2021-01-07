import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

import Moped from '../../assets/hazhoz_moped.png'
import Boxes from '../../assets/hazhoz_boxes.png'
import Texture from '../../assets/hazhoz_texture.png'
import Logo from '../../assets/logo_hero.png'
import Netpincer from '../../assets/hazhozszallitas_netpincer.png'
import Wolt from '../../assets/hazhozszallitas_Wolt.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '90%',
        margin: '0 auto',
        marginBottom: 50,
        paddingBottom: 500,
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 300
        }
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '95%',
        margin: '0 auto'
    },
    header: {
        fontSize: 50,
        fontFamily: 'Sarpanch',
        color: '#DD443D',
        [theme.breakpoints.down('sm')]: {
            fontSize: 30
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 25
        }
    },
    boxes: {
        height: 135,
        width: 'auto',
        marginLeft: 30,
        [theme.breakpoints.down('sm')]: {
            height: 115
        },
        [theme.breakpoints.down('xs')]: {
            height: 70
        }
    },
    moped: {
        height: 170,
        width: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: 130
        },
        [theme.breakpoints.down('xs')]: {
            height: 112
        }
    },
    itemContainer: {
        margin: '20px 20px',
        width: 326,
        maxWidth: '100%',
        height: 224,
        borderRadius: '10px',
        backgroundImage: `url(${Texture})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    selectionContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 70
    },
    black: {
        backgroundColor: '#292929',
        height: 169,
        width: 304,
        maxWidth: 'calc(100% - 20px)',
        opacity: 0.85,
        borderRadius: '10px 10px 0 0',
        margin: '10px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 180,
        height: 'auto'
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
        textDecoration: 'none'
    }
}))

const Delivery = ({
    language,
    delivery
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container} id='delivery'>
            <div className={classes.headerContainer}>
                <Typography className={classes.header}>{language == 'hun' ? 'házhozszállítás' : 'delivery'}</Typography>
                <img src={Boxes} className={classes.boxes} />
                <img src={Moped} className={classes.moped} />
            </div>
            {delivery &&
            <div className={classes.selectionContainer}>
                {delivery.telefon && <Item company='telefon'/>}
                {delivery.telefon && <Item company='wolt'/>}
                {delivery.telefon && <Item company='netpincer'/>}
            </div>}
        </div>
    )
}

const Item = ({
    company
}) => {
    const classes = useStyles()
    return (
        <div className={classes.itemContainer}>
            {company &&
            <div className={classes.black}>
                <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                    {company === 'telefon' && <img src={Logo} className={classes.logo}/>}
                    {company === 'wolt' && <img src={Wolt} className={classes.logo}/>}
                    {company === 'netpincer' && <img src={Netpincer} className={classes.logo}/>}
                    
                    {company === 'telefon' && <a href='tel:+36302346105' className={classes.button}>rendeles</a>}
                    {company === 'wolt' && <a href='https://www.wolt.com/en/hun/szekesfehervar/restaurant/caffe-mauro' target="_blank" style={{marginBottom: 15}} className={classes.button}>rendeles</a>}
                    {company === 'netpincer' && <a href='https://www.netpincer.hu/restaurant/a2mk/caffe-mauro#' target="_blank" style={{marginBottom: 15}} className={classes.button}>rendeles</a>}
                </div>
            </div>}

        </div>
    )
}

export default Delivery