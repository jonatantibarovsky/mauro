import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import './style.css'

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
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={scrollPosition > 70 ? 'banner banner_fixed' : 'banner'}>
            {data.bannerText}
        </div>
    )
}

export default Banner