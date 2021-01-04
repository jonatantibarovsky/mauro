import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Heading from '../SubComponents/Heading'
import Drink from '../../assets/itallap_pic.png'

import MenuSection from './MenuSection'

const useStyles = makeStyles(theme => ({
    container: {
        width: '90%',
        margin: '0 auto',
    },
    columns: {
        display: 'flex',
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
}))

const DrinkMenu = ({
    language,
    data
}) => {
    const classes = useStyles()

    return (
        <div className={classes.container} id='drinkMenu'>
            <Heading
                image={Drink}
                heading='itallap'
            />
            <div className={classes.columns}>
                {data &&
                    data.map((item, i) => {
                        return (
                            <MenuSection
                                title={item.fields.title}
                                language={language}
                                data={item.fields}
                                key={i}
                            />
                        )

                    })
                }
            </div>

        </div>
    )
}

export default DrinkMenu
