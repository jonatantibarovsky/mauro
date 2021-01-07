import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// assets
import Image1 from '../../../assets/galeria_1.jpg'

const useStyles = makeStyles(theme => ({
    image: { 
        width: '100%',
        height: 'auto',
        maxWidth: 330,
        borderRadius: 5,
        objectPosition: 'cover',
        boxShadow: '3px 3px 10px #000000',
        marginRight: 10,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        [theme.breakpoints.down(1250)]: {
            width: '43%'
        }
    },
    video: { 
        width: '100%',
        height: 'auto',
        maxWidth: 330,
        borderRadius: 5,
        objectFit: 'cover',
        boxShadow: '3px 3px 10px #000000',
        marginRight: 10,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        [theme.breakpoints.down(1250)]: {
            width: '43%'
        }
    }
}))

const Image = ({
    data
}) => {
    const classes = useStyles()
    
    return (
        <>
            {data &&
                data.fields.title === 'video' ?
                <video 
                    className={classes.video}
                    autoPlay
                    muted
                    disablePictureInPicture
                    loop
                    playsInline
                >
                    <source src={data.fields.file.url} />
                </video>
                :
                <img src={data.fields.file.url} className={classes.image}/>
            }
        </>
    )
}

export default Image