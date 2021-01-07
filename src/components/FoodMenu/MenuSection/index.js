import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Food from '../Food'

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
    }
}))

const MenuSection = ({
    language,
    data
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {
                language === 'hun'
                ?
                <Typography className={classes.title}>{data.title && data.title}</Typography>
                :
                <Typography className={classes.title}>{data.titleAngol && data.titleAngol}</Typography>
            }
            {
                data.foodName.map((item, i) => {
                    if (language == 'hun') {
                        return (
                            <Food 
                                foodName={data.foodName[i]}
                                description={data.description[i]}
                                price={data.price[i]}
                                key={i}
                            />
                        )
                    } else {
                        return (
                            <Food 
                                foodName={data.foodNameAngol[i]}
                                description={data.foodDescriptionAngol[i]}
                                price={data.price[i]}
                                key={i}
                            />
                        )
                    }

                })
            }


        </div>
    )
}

export default MenuSection
/*
{foods &&
    foods.map(food => {
        /* return (
            <Food
                foodName={food.food}
                description={food.description}
                price={food.price}
            />
        )
    })
} */