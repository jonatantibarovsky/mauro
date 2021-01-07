import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

import Nav from '../SubComponents/Nav'
import Hamburger from '../SubComponents/Hamburger'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 70,
        background: '#262626',
        [theme.breakpoints.down(800)]: {
            zIndex: 100
        }
    },
    
}))



const Navbar = ({
    language,
    showMenu,
    setShowMenu,
    setLanguage
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(800))
    return (
        <div className={classes.container}>
            {mobile &&
            (<div>
                <Hamburger showMenu={showMenu} setShowMenu={setShowMenu}/>

            </div>)
            }
            <Nav language={language} showMenu={showMenu} setLanguage={setLanguage}/>
        </div>
    )
}

export default Navbar