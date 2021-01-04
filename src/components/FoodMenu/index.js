import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import MenuSection from './MenuSection'
import Heading from '../SubComponents/Heading'
// assets
import Pizza from '../../assets/etlap_pic.png'


const useStyles = makeStyles(theme => ({
    container: {
        width: '90%',
        margin: '0 auto',
        marginTop: 120
    },
    columns: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 70,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    menuColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '40vw',
        maxWidth: 500,
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            width: '75%'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
            width: '100%'
        }
    },
    menuImageContainer: {
        width: '100%',
        marginBottom: 60,
        position: 'relative'
    },
    pizza: {
        width: '70%',
        height: 'auto'
    },
    menu: {
        fontSize: 50,
        fontFamiliy: 'Sarpanch',
        color: '#DD443D',
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -70%)'
    }
}))

const FoodMenu = ({
    language,
    foodMenu
}) => {
    const classes = useStyles()

    return (
        <div className={classes.container} id='menu'>
            {/* <div className={classes.menuImageContainer}>
                <img src={Pizza} className={classes.pizza}/>
                <Typography className={classes.menu}>étlap</Typography>

            </div> */}
            <Heading
                heading={language == 'hun' ? 'étlap' : 'menu'}
                image={Pizza}
                mirror={true}
            />
            {foodMenu &&
                <div className={classes.columns}>

                    {foodMenu &&
                        foodMenu.map((item, i) => {
                            return (
                                <MenuSection
                                    data={item.fields}
                                    language={language}
                                    key={i}
                                />)
                        })
                    }
                </div>}
        </div>
    )
}

export default FoodMenu