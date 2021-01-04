import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    foodAndPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    food: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    price: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    price2: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        marginLeft: 25,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    category: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#DD443D',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    description: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#DD443D',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    priceContainer: {
        display: 'flex',
        width: '25%',
    }
}))

const Drink = ({
    drinkName,
    description,
    price1,
    price2,
    category1,
    category2
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.foodAndPrice}>
                <Typography className={classes.food}>{drinkName && drinkName !== 'semmi' && drinkName}</Typography>
                <div className={classes.priceContainer}>
                    <Typography className={classes.price}>{price1 && price1 !== 'semmi' && price1}</Typography>
                    {category1 !== 'semmi' && category2 !== 'semmi' &&
                        <div style={{width: '100%', display: 'flex'}}>
                            <Typography className={classes.category} style={{marginRight: 25}}>{category1 && category1 !== 'semmi' && category1}</Typography>
                            <Typography className={classes.category}>{category2 && category2 !== 'semmi' && category2}</Typography>
                        </div>
                    }
                    {price2 !== 'semmi' && <Typography className={classes.price2}>{price2 && price2 !== 'semmi' && price2}</Typography>}
                </div>
            </div>
            <div>
                <Typography className={classes.description}>{description && description !== 'semmi' && description}</Typography>
            </div>
        </div>
    )
}

export default Drink