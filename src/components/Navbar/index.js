import { makeStyles } from '@material-ui/core/styles'

import Nav from '../SubComponents/Nav'
import Hamburger from '../SubComponents/Hamburger'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 70,
        background: '#262626',
        [theme.breakpoints.down(650)]: {
            zIndex: 100
        }
    },
    
}))



const Navbar = ({
    language,
    showMenu,
    setShowMenu
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div>
                <Hamburger showMenu={showMenu} setShowMenu={setShowMenu}/>

            </div>
            <Nav language={language} showMenu={showMenu}/>
        </div>
    )
}

export default Navbar