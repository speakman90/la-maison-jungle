import '../styles/Banner.css';
import logo from '../assets/logo.png'
import Recommendation from './Recommendation.js'

function Banner() {
    const title = 'La maison jungle'
    return <div className='lmj-banner'>
                <div className='lmj-banner-row'>
                    <img src={logo} alt='logo' className='lmj-logo' />
                    <h1>{ title }</h1>
                </div>
                <Recommendation />
            </div>
}

export default Banner;