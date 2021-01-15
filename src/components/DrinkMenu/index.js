import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

import Heading from '../SubComponents/Heading'
import Drink from '../../assets/itallap_pic.png'

import MenuSection from './MenuSection'
import Apricot from '../../assets/apricot.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        margin: '0 auto',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        width: '100%',
        maxWidth: 1400
    },
    columns: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 70,
        flexDirection: 'column'
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
    apricot: {
        width: '20%',
        maxWidth: 200,
        position: 'absolute',
        left: 0,
        [theme.breakpoints.down(1150)]: {
            position: 'static'
        }
    },
    apricotContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
        position: 'relative',
        [theme.breakpoints.down(600)]: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    }
}))

const DrinkMenu = ({
    language,
    data
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(1100))
    return (
        <div className={classes.container} id='drinkMenu'>
            <div className={classes.apricotContainer}>
                <Heading
                    image={Drink}
                    heading='itallap'
                />
                <img src={Apricot} className={classes.apricot} />
            </div>
            <div className={classes.subContainer}> 
            <div style={{width: '90%', margin: '0 auto'}}>
                {mobile &&
                    <div className={classes.columns}>
                        {data &&
                            data.map((item, i) => {
                                return (
                                    <MenuSection
                                        language={language}
                                        data={item.fields}
                                        key={i}
                                    />
                                )

                            })
                        }
                    </div>}
                {mobile === false &&
                    <div
                        style={{
                            width: '100%',
                            display: 'flex'
                        }}
                    >
                        <div style={{ width: '50%', }}>
                            {data &&
                                data.map((item, i) => {
                                    if (i % 2 === 0) {
                                        return (
                                            <MenuSection
                                                title={item.fields.title}
                                                language={language}
                                                data={item.fields}
                                                key={i}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>
                        <div style={{ width: '50%', }}>
                            {data &&
                                data.map((item, i) => {
                                    if (i % 2 === 1) {
                                        return (
                                            <MenuSection
                                                title={item.fields.title}
                                                language={language}
                                                data={item.fields}
                                                key={i}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>

                    </div>}
            </div>
            </div>
        </div>
    )
}

export default DrinkMenu
