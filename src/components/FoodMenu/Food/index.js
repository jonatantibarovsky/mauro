import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 30
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
    description: {
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#DD443D',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    }
}))

const Food = ({
    foodName,
    description,
    price
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.foodAndPrice}>
                <Typography className={classes.food}>{foodName && foodName != 'semmi' && foodName }</Typography>
                <Typography className={classes.price}>{price && price != 'semmi' && price }</Typography>
            </div>
            <div>
                <Typography className={classes.description}>
                    {description && description != 'semmi' && description }
                </Typography>
            </div>
        </div>
    )
}

export default Food