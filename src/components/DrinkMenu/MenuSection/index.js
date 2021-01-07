import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Drink  from '../Drink'

const useStyles = makeStyles(theme => ({
    container: {
        marginBottom: 150,
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            width: '70%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        }
    },
    title: {
        fontSize: 30,
        color: '#D1D0D1',
        textTransform: 'uppercase',
        fontFamily: 'PT Sans Narrow',
        marginBottom: 65
    },
    bottomText: {
        color: '#D1D0D1',
        fontSize: 18,
        marginTop: 30,
        fontFamily: 'PT Sans Narrow',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    }
}))

const MenuSection = ({
    title,
    data,
    language
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography className={classes.title}>{title && title}</Typography>
            {data &&
                data.drinkName.map((item, i) => {
                    if (language == 'hun') {
                        return (
                            <Drink 
                                drinkName={data.drinkName[i]}
                                description={data.description[i]}
                                price1={data.price[i]}
                                price2={data.price2[i]}
                                category1={data.option1[i]}
                                category2={data.option2[i]}
                                key={i}
                            />
                        )
                    } else {
                        return (
                            <Drink 
                                drinkName={data.drinkNameAngol[i]}
                                description={data.descriptionAngol[i]}
                                price1={data.price[i]}
                                price2={data.price2[i]}
                                category1={data.option1[i]}
                                category2={data.option2[i]}
                                key={i}
                            />
                        )
                    }
                })
            }
            <Typography className={classes.bottomText}>{data.bottom !== 'semmi' && data.bottom}</Typography>
        </div>
    )
}

export default MenuSection

/* 
{drinks && 
    drinks.map(drink => {
        return (
            <Drink 
                drinkName={drink.drink}
                description={drink.description}
                price1={drink.price1}
                price2={drink.price2}
                category1={drink.category1}
                category2={drink.category2}
            />
        )
    })
} */