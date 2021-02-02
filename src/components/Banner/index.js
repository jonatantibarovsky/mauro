import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0',
        textAlign: 'center',
        background: '#DD443D',
        color: '#D1D0D1',
        fontSize: 18,
        fontFamily: 'PT Sans Narrow'

    }
}))

const Banner = ({
    data
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {data.bannerText}
        </div>
    )
}

export default Banner