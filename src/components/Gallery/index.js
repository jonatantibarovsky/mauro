import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// components
import Image from './Image'
import Heading from '../SubComponents/Heading'
import Pic from '../../assets/galeria_pic.png'

const useStyles = makeStyles(theme => ({
    container: {   
        display: 'flex',
        maxWidth: 1100,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '-450px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-400px',
        },
        [theme.breakpoints.down(500)]: {
            marginTop: '-350px',
        },
        [theme.breakpoints.down(400)]: {
            marginTop: '-250px',
        }
    }
}))

const Gallery = ({
    data,
    language
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Heading 
                heading={language === 'hun' ? 'Galéria' : 'Gallery'}
                image={Pic}
            />
            {data && 
                data.galery.map((item, i) => {
                    return (
                        <Image data={item} key={i}/>
                    )
                })
            }
        </div>
    )
}

export default Gallery