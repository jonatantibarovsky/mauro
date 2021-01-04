import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

// assets
import Intro from '../../../assets/bemtatkozas.png'
import Tomato from '../../../assets/bemtatkozas_tomato.png'

const useStyles = makeStyles({
    container: {
        width: '100%',

        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10px'
        //background: 'blue',
    },
    introImage: {
        marginTop: 70,
        height: 'auto',
        width: '100%'
    },
    tomatoImage: {

        height: '20%',
        width: 'auto'
    },
    heading: {
        fontSize: 25,
        color: '#DD443D',
        fontFamily: 'Sarpanch',
        marginBottom: 30
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    chef: {
        display: 'flex',
        flexDirection: 'row'
    },
    firstText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'PT Sans Narrow',
        fontWeight: 'bold'
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 18,
        color: '#D1D0D1',
        fonfontFamily: 'PT Sans Narrow',
        textTransform: 'uppercase',
        marginBottom: 30,
    },
    chef: {
        fontFamily: 'PT Sans Narrow',
        color: '#DD443D',
        marginLeft: 10,
        textTransform: 'uppercase'
    },
    firstText: {
        fontSize: 16,
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow',
        fontWeight: 'bold',
        marginBottom: 30
    },
    secondText: {
        fontSize: 16,
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow'
    }
})

const Mobile = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>

            <div className={classes.textContainer}>
                <Typography className={classes.heading}>bemutatkozás</Typography>
                <Typography className={classes.name}>
                    Barczi Péter
                            <span className={classes.chef}>chef</span>
                </Typography>
                <Typography className={classes.firstText}>
                    A séf-tulajdonost jól ismerheti, aki rendszeres látogatója a Caffé Mauronak. Mindig pörög, ő adja az étterem lelkét, és persze az olasz konyha által nyújtott gasztronómiai élvezetet.
                        </Typography>
                <Typography className={classes.secondText}>
                    Barczi Péter több, mint 20 éve van a szakmában - megjárta Angliát, és dolgozott a gasztro terület mindkét végletén, séftől egészen élelmezési igazgatóig. Az olasz felmenők és a vendéglátós családi hagyaték azonban mindig is arra késztették, hogy egyszer saját éttermet nyisson. Ez az álma a Caffé Mauro formájában vált valóra. Egy kedves hely, ahol mindig nagy a nyüzsgés és szívesen térnek be nap mint nap a törzsvendégek - nem csak Péter személye miatt, hanem a kiváló minőségű alapanyagokból készült eredeti olasz fogások miatt.
                    </Typography>
            </div>
            <img src={Intro} className={classes.introImage} />
        </div>
    )
}

export default Mobile