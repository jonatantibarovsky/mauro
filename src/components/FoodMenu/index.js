import { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

import MenuSection from './MenuSection'
import Heading from '../SubComponents/Heading'
// assets
import Pizza from '../../assets/etlap_pic.png'
import Pizza1 from '../../assets/pizza1.png'
import Pizza2 from '../../assets/pizza2.png'


const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        margin: '0 auto',
        marginTop: 120,

        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        [theme.breakpoints.down(600)]: {
            margin: '0 auto'

        }
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
        height: 250,
        position: 'absolute',
        right: 0,
        top: 200
    },
    menu: {
        fontSize: 50,
        fontFamiliy: 'Sarpanch',
        color: '#DD443D',
        position: 'absolute',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -70%)'
    },
    pizza2: {
        height: 250,
        marginLeft: 'auto',
        marginTop: '-200px'
    }
}))

const FoodMenu = ({
    language,
    foodMenu
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.up(1100))
    const pizza = useMediaQuery(theme.breakpoints.up(600))

    return (
        <div className={classes.container} id='menu'>
            {pizza && <img src={Pizza1} className={classes.pizza} />}
            {/* <div className={classes.menuImageContainer}>
                <img src={Pizza} className={classes.pizza}/>
                <Typography className={classes.menu}>étlap</Typography>

            </div> */}
            <Heading
                heading={language == 'hun' ? 'étlap' : 'menu'}
                image={Pizza}
                mirror={true}
            />
            <div style={{width: '90%', margin: '0 auto'}}>
                {mobile === false &&
                    foodMenu &&
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
                {mobile &&
                    <div
                        style={{
                            width: '100%',
                            display: 'flex'
                        }}
                    >
                        <div style={{ width: '50%', }}>
                            {foodMenu &&
                                foodMenu.map((item, i) => {
                                    if (i % 2 === 0) {
                                        return (
                                            <MenuSection
                                                data={item.fields}
                                                language={language}
                                                key={i}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>
                        <div style={{ width: '50%', }}>
                            {foodMenu &&
                                foodMenu.map((item, i) => {
                                    if (i % 2 === 1) {
                                        return (
                                            <MenuSection
                                                data={item.fields}
                                                language={language}
                                                key={i}
                                            />
                                        )
                                    }
                                })
                            }
                        </div>

                    </div>}
            </div>
            {pizza && <img src={Pizza2} className={classes.pizza2} />}
        </div>
    )
}

export default FoodMenu