import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery } from '@material-ui/core'

// assets
import Fish from '../../assets/hetimenu_pic.png'
import Border from '../../assets/hetimenu_border.png'

import Heading from '../SubComponents/Heading'
import Day from './Day'
import Olives from '../../assets/olives.png'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        marginTop: '10vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    subContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: 1400,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headingContainer: {
        background: 'red',
        width: '80%',
        display: 'flex',
        position: 'relative'
    },
    fish: {
        //background: 'red',
        width: '85%',
        height: 'auto',
        marginLeft: 'auto'
    },
    weeklyPrice: {
        marginTop: '10vh',
        width: '100%',
        //background: 'blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    weeklyBorder: {
        width: '100%',
        height: 140,
        position: 'relative',
        backgroundImage: `url(${Border})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '95%',
            height: 100
        }

        //background: 'red'
    },
    border: {
        width: '100%',
        height: 'auto'
    },
    menuTable: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        /* [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between'
        } */
    },
    column: {
        height: '100%',
        width: '20%',
        //background: 'red'
    },
    day: {
        color: '#DD443D',
        fontSize: 30
    },
    headingText: {
        color: '#DD443D',
        fontFamily: 'Sarpanch',
        fontSize: 50
    },
    headingTextContainer: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    description: {
        marginTop: 30,
        fontSize: 18,
        fontFamily: 'PT Sans Narrow',
        color: '#D1D0D1',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        }
    },
    price: {
        color: '#D1D0D1',
        fontSize: 30,
        fontFamily: 'PT Sans Narrow',
        textTransform: 'uppercase',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 18
        }
    },
    selection: {
        color: '#DD443D',
        fontSize: 30,
        fontFamily: 'PT Sans Narrow',
        textTransform: 'uppercase',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        }
    },
    borderText: {
        /* position: 'absolute',
        top: '50%',
        left: '50%', */

    },
    olives: {
        height: '120%',
        position: 'absolute',
        left: 0,
        [theme.breakpoints.down(800)]: {
            height: 130,
            position: 'static',
            alignSelf: 'flex-start'
        }
    }
}))

const WeeklyMenu = ({
    language,
    data
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const firstBreak = useMediaQuery(theme.breakpoints.down(1200))
    const mobile = useMediaQuery(theme.breakpoints.down(800))
    return (
        <div className={classes.container} id='weekly'>
            {/* <div className={classes.headingContainer}>
                <div className={classes.headingTextContainer}>
                    <Typography className={classes.headingText}>heti menü</Typography>
                    <Typography>NOVEMBER 16</Typography>
                    <Typography>NOVEMBER 20.</Typography>
                </div>
                <img src={Fish} className={classes.fish}/>
            </div> */}
            {data &&
                <Heading
                    heading={language === 'hun' ? 'heti menü' : 'weekly menu'}
                    date1={data.beginning}
                    date2={data.ending}
                    image={Fish}
                />}
            {mobile && <img src={Olives} className={classes.olives}/>}
            <div className={classes.weeklyPrice}>
                <div className={classes.weeklyBorder}>
                    {mobile === false && <img src={Olives} className={classes.olives}/>}
                    {/* <img src={Border} className={classes.border} /> */}
                    <div className={classes.borderText}>
                        <Typography className={classes.price}>
                            {language === 'hun' ? 'az ebéd menü ára 1650 Ft' : 'the price of the lunch menu is 1650 Ft'}
                        </Typography>
                        <Typography className={classes.selection}>
                            {language === 'hun' ? 'leves + választott ‘A’, ‘B’ vagy ‘C’ főétel' : 'soup + chosen ‘A’, ‘B’ or ‘C’ main course'}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={classes.subContainer}>
            <Typography className={classes.description}>
                {language === 'hun' ?
                    'Egész hetes étel megrendelése esetén 10% kedvezményt biztosítunk a menü árából!'
                    :
                    'In case of ordering a whole week’s menu, we give you a 10% discount.'
                }
            </Typography>
            <div className={classes.menuTable}>
                {data && mobile &&
                    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>

                        <div>
                            <Day
                                soup={language === 'hun' ? data.soup[0] : data.soupAngol[0]}
                                aMenu={language === 'hun' ? data.aMenu[0] : data.aMenuAngol[0]}
                                bMenu={language === 'hun' ? data.bMenu[0] : data.bMenuAngol[0]}
                                cMenu={language === 'hun' ? data.cMenu[0] : data.cMenuAngol[0]}
                                day={language === 'hun' ? 'Hétfő' : 'Monday'}
                            />
                            <Day
                                soup={language === 'hun' ? data.soup[2] : data.soupAngol[2]}
                                aMenu={language === 'hun' ? data.aMenu[2] : data.aMenuAngol[2]}
                                bMenu={language === 'hun' ? data.bMenu[2] : data.bMenuAngol[2]}
                                cMenu={language === 'hun' ? data.cMenu[2] : data.cMenuAngol[2]}
                                day={language === 'hun' ? 'Szerda' : 'Wednesday'}

                            />
                            <Day
                                soup={language === 'hun' ? data.soup[4] : data.soupAngol[4]}
                                aMenu={language === 'hun' ? data.aMenu[4] : data.aMenuAngol[4]}
                                bMenu={language === 'hun' ? data.bMenu[4] : data.bMenuAngol[4]}
                                cMenu={language === 'hun' ? data.cMenu[4] : data.cMenuAngol[4]}
                                day={language === 'hun' ? 'Péntek' : 'Friday'}
                            />
                        </div>
                        <div>
                            <Day
                                soup={language === 'hun' ? data.soup[1] : data.soupAngol[1]}
                                aMenu={language === 'hun' ? data.aMenu[1] : data.aMenuAngol[1]}
                                bMenu={language === 'hun' ? data.bMenu[1] : data.bMenuAngol[1]}
                                cMenu={language === 'hun' ? data.cMenu[1] : data.cMenuAngol[1]}
                                day={language === 'hun' ? 'Kedd' : 'Tuesday'}
                            />

                            <Day
                                soup={language === 'hun' ? data.soup[3] : data.soupAngol[3]}
                                aMenu={language === 'hun' ? data.aMenu[3] : data.aMenuAngol[3]}
                                bMenu={language === 'hun' ? data.bMenu[3] : data.bMenuAngol[3]}
                                cMenu={language === 'hun' ? data.cMenu[3] : data.cMenuAngol[3]}
                                day={language === 'hun' ? 'Csütörtök' : 'Thursday'}
                            />
                        </div>
                    )
                    </div>
                }
                {data && firstBreak === false && mobile === false &&
                    <>
                        (
                        <Day
                            soup={language === 'hun' ? data.soup[0] : data.soupAngol[0]}
                            aMenu={language === 'hun' ? data.aMenu[0] : data.aMenuAngol[0]}
                            bMenu={language === 'hun' ? data.bMenu[0] : data.bMenuAngol[0]}
                            cMenu={language === 'hun' ? data.cMenu[0] : data.cMenuAngol[0]}
                            day={language === 'hun' ? 'Hétfő' : 'Monday'}
                        />
                        <Day
                            soup={language === 'hun' ? data.soup[1] : data.soupAngol[1]}
                            aMenu={language === 'hun' ? data.aMenu[1] : data.aMenuAngol[1]}
                            bMenu={language === 'hun' ? data.bMenu[1] : data.bMenuAngol[1]}
                            cMenu={language === 'hun' ? data.cMenu[1] : data.cMenuAngol[1]}
                            day={language === 'hun' ? 'Kedd' : 'Tuesday'}
                        />
                        <Day
                            soup={language === 'hun' ? data.soup[2] : data.soupAngol[2]}
                            aMenu={language === 'hun' ? data.aMenu[2] : data.aMenuAngol[2]}
                            bMenu={language === 'hun' ? data.bMenu[2] : data.bMenuAngol[2]}
                            cMenu={language === 'hun' ? data.cMenu[2] : data.cMenuAngol[2]}
                            day={language === 'hun' ? 'Szerda' : 'Wednesday'}

                        />
                        <Day
                            soup={language === 'hun' ? data.soup[3] : data.soupAngol[3]}
                            aMenu={language === 'hun' ? data.aMenu[3] : data.aMenuAngol[3]}
                            bMenu={language === 'hun' ? data.bMenu[3] : data.bMenuAngol[3]}
                            cMenu={language === 'hun' ? data.cMenu[3] : data.cMenuAngol[3]}
                            day={language === 'hun' ? 'Csütörtök' : 'Thursday'}
                        />
                        <Day
                            soup={language === 'hun' ? data.soup[4] : data.soupAngol[4]}
                            aMenu={language === 'hun' ? data.aMenu[4] : data.aMenuAngol[4]}
                            bMenu={language === 'hun' ? data.bMenu[4] : data.bMenuAngol[4]}
                            cMenu={language === 'hun' ? data.cMenu[4] : data.cMenuAngol[4]}
                            day={language === 'hun' ? 'Péntek' : 'Friday'}
                        />
                    )
                    </>
                }
                {data && firstBreak && mobile === false &&
                    <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Day
                                soup={language === 'hun' ? data.soup[0] : data.soupAngol[0]}
                                aMenu={language === 'hun' ? data.aMenu[0] : data.aMenuAngol[0]}
                                bMenu={language === 'hun' ? data.bMenu[0] : data.bMenuAngol[0]}
                                cMenu={language === 'hun' ? data.cMenu[0] : data.cMenuAngol[0]}
                                day={language === 'hun' ? 'Hétfő' : 'Monday'}
                            />
                            <Day
                                soup={language === 'hun' ? data.soup[1] : data.soupAngol[1]}
                                aMenu={language === 'hun' ? data.aMenu[1] : data.aMenuAngol[1]}
                                bMenu={language === 'hun' ? data.bMenu[1] : data.bMenuAngol[1]}
                                cMenu={language === 'hun' ? data.cMenu[1] : data.cMenuAngol[1]}
                                day={language === 'hun' ? 'Kedd' : 'Tuesday'}
                            />
                            <Day
                                soup={language === 'hun' ? data.soup[2] : data.soupAngol[2]}
                                aMenu={language === 'hun' ? data.aMenu[2] : data.aMenuAngol[2]}
                                bMenu={language === 'hun' ? data.bMenu[2] : data.bMenuAngol[2]}
                                cMenu={language === 'hun' ? data.cMenu[2] : data.cMenuAngol[2]}
                                day={language === 'hun' ? 'Szerda' : 'Wednesday'}

                            />
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Day
                                soup={language === 'hun' ? data.soup[3] : data.soupAngol[3]}
                                aMenu={language === 'hun' ? data.aMenu[3] : data.aMenuAngol[3]}
                                bMenu={language === 'hun' ? data.bMenu[3] : data.bMenuAngol[3]}
                                cMenu={language === 'hun' ? data.cMenu[3] : data.cMenuAngol[3]}
                                day={language === 'hun' ? 'Csütörtök' : 'Thursday'}
                            />
                            <Day
                                soup={language === 'hun' ? data.soup[4] : data.soupAngol[4]}
                                aMenu={language === 'hun' ? data.aMenu[4] : data.aMenuAngol[4]}
                                bMenu={language === 'hun' ? data.bMenu[4] : data.bMenuAngol[4]}
                                cMenu={language === 'hun' ? data.cMenu[4] : data.cMenuAngol[4]}
                                day={language === 'hun' ? 'Péntek' : 'Friday'}
                            />
                        </div>
                    )
                    </div>
                }
            </div>
            </div>

        </div>
    )
}

export default WeeklyMenu