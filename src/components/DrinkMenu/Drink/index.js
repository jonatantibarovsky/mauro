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
        textAlign: 'right',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    price2: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    category: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#DD443D',
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        [theme.breakpoints.down(400)]: {
            width: 40,
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
        width: 100,
        justifyContent: 'space-between',
        [theme.breakpoints.down(400)]: {
            width: 80
        }
    },
    priceIndividual: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        [theme.breakpoints.down(400)]: {
            width: 40
        }
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
                    {price1 !== 'semmi' &&
                        <div className={classes.priceIndividual}>
                            <Typography className={classes.price}>{price1 && price1 !== 'semmi' && price1}</Typography>
                        </div>}
                    {category1 !== 'semmi' && category2 !== 'semmi' &&
                        <div className={classes.priceContainer}>
                            <Typography className={classes.category} >{category1 && category1 !== 'semmi' && category1}</Typography>
                            <Typography className={classes.category}>{category2 && category2 !== 'semmi' && category2}</Typography>
                        </div>
                    }
                    {price2 !== 'semmi' &&
                        <div className={classes.priceIndividual}>
                            <Typography className={classes.price2}>{price2 && price2 !== 'semmi' && price2}</Typography>
                        </div>}
                </div>
            </div>
            <div>
                <Typography className={classes.description}>{description && description !== 'semmi' && description}</Typography>
            </div>
        </div>
    )
}

export default Drink