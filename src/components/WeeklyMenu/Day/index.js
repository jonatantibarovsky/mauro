import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        width: 180,
        margin: '0 40px',
        [theme.breakpoints.down('xs')]: {
            margin: '0 20px',
            width: 140
        }
    },
    day: {
        fontFamily: 'Sarpanch',
        color: '#DD443D',
        fontSize: 30,
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 22
        }
    },
    text: {
        color: '#D1D0D1',
        fontFamily: 'PT Sans Narrow',
        fontSize: 18,
        marginBottom: 30,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    span: {
        marginRight: 10,
        color: '#DD443D',
        fontWeight: 'bold'
    }
}))

const Day = ({
    soup,
    aMenu,
    bMenu,
    cMenu,
    day
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography className={classes.day}>{day}</Typography>
            <Typography className={classes.text}>
                {soup && soup !== 'semmi' && soup}
            </Typography>
            <Typography className={classes.text}>
            <span className={classes.span}>{aMenu !== 'semmi' && 'A'}</span>
                {aMenu && aMenu !== 'semmi' && aMenu}
            </Typography>
            <Typography className={classes.text}>
            <span className={classes.span}>{bMenu !== 'semmi' && 'B'}</span>
                {bMenu && bMenu !== 'semmi' && bMenu}
            </Typography>
            <Typography className={classes.text}>
            <span className={classes.span}>{cMenu !== 'semmi' && 'C'}</span>
                {cMenu && cMenu !== 'semmi' && cMenu}
            </Typography>
        </div>
    )
}

export default Day