import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'
import Mobile from './Mobile'

// assets
import Intro from '../../assets/bemtatkozas.png'
import Tomato from '../../assets/bemtatkozas_tomato.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 'auto',
        position: 'relative',
        marginTop: '10%',
        display: 'flex',
        marginBottom: 50
        //background: 'blue',
    },
    introImage: {

        height: 700,
        width: 'auto',
        [theme.breakpoints.down(1200)]: {
            width: '100%',
            height: 'auto'
        }
    },
    introImageContainer: {
        height: 700,
        width: 'auto',
        [theme.breakpoints.down(1200)]: {
            width: '50%',
            height: 'auto',
            
        }
    },
    
    heading: {
        fontFamily: 'Sarpanch',
        fontSize: 50,
        color: '#DD443D',
        width: '100%',
        [theme.breakpoints.down(1200)]: {
            fontSize: 30
        }
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
        width: '50%',
        paddingRight: 30
    },
    textContainer: {
        maxWidth: 700,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 30
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 30,
        color: '#D1D0D1',
        fonfontFamily: 'PT Sans Narrow',
        textTransform: 'uppercase',
        marginBottom: 40,
        [theme.breakpoints.down(1200)]: {
            fontSize: 25
        }
    },
    chef: {
        fontFamily: 'PT Sans Narrow',
        color: '#DD443D',
        marginLeft: 10,
        textTransform: 'uppercase'
    },
    firstText: {
        fontSize: '18px',
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow',
        fontWeight: 'bold',
        marginBottom: 40
    },
    secondText: {
        fontSize: 18,
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow'
    },
    tomato: {
        position: 'absolute',
        right: 0,
        height: '40%',
        [theme.breakpoints.down(1200)]: {
            height: '35%',
            top: '-80px'
        }
    }
}))

const Introduction = ({
    language,
    ref
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(700))
    if (mobile) {
        return <Mobile />
    } else {
        return (
            <div className={classes.container} id='intro'>
                <img src={Tomato} className={classes.tomato}/>
                <div className={classes.introImageContainer}>
                    <img src={Intro} className={classes.introImage} />
                </div>
                <div className={classes.text}>
                    <Typography className={classes.heading}>{language === 'hun' ? 'bemutatkozás' : 'introduction'}</Typography>
                    <div className={classes.textContainer}>
                        <Typography className={classes.name}>
                            {language === 'hun' ? 'Barczi Péter' : 'Peter Barczi chef'}
                            <span className={classes.chef}>chef</span>
                        </Typography>
                        <Typography className={classes.firstText}>
                        {language === 'hun' ? 
                            'A séf-tulajdonost jól ismerheti, aki rendszeres látogatója a Caffé Mauronak. Mindig pörög, ő adja az étterem lelkét, és persze az olasz konyha által nyújtott gasztronómiai élvezetet.'
                         : 
                            'If you are a regular visitor of Caffé Mauro, you probably know Peter Barczi, chef-owner. Always fast-paced, he’s the soul of the restaurant, - and of course, he also provides the gastronomical pleasures of the Italian cuisine.'}
                        </Typography>
                        <Typography className={classes.secondText}>
                        {language === 'hun' ?
                            'Barczi Péter több, mint 20 éve van a szakmában - megjárta Angliát, és dolgozott a gasztro terület mindkét végletén, séftől egészen élelmezési igazgatóig. Az olasz felmenők és a vendéglátós családi hagyaték azonban mindig is arra késztették, hogy egyszer saját éttermet nyisson. Ez az álma a Caffé Mauro formájában vált valóra. Egy kedves hely, ahol mindig nagy a nyüzsgés és szívesen térnek be nap mint nap a törzsvendégek - nem csak Péter személye miatt, hanem a kiváló minőségű alapanyagokból készült eredeti olasz fogások miatt.'
                        :
                            'Peter Barczi has been in the profession for over 20 years – he’s been across England, and worked on both ends of the gastro spectrum, from chef all the way to food director. The Italian roots and the family tradition of hospitality have always inspired him to once open his own place. This dream manifested itself in the form of Caffé Mauro. A friendly place, always bustling, which regulars happily frequent, day after day – not only for Peter, but for the authentic Italian dishes made of high-quality ingredients.'
                        }
                    </Typography>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction