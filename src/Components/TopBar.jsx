import React from 'react'
import Delivery from '../Images/delivery.png'
import facebook from '../Images/facebook.png'
import insta from '../Images/insta.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'

const TopBar = () => {
  return (
    <div className="topBar">
        <div className="lefttb">
            <div>
            <img src={Delivery} alt="delivery" />
            <span>Free Delivery</span>
            </div>
            <hr />
            <span>Return Policy</span>                
        </div>
        <div className="righttb">
            <span>Login</span>
            <span>Follow Us</span>
            <div className='rightsocials'>
            <img src={facebook} alt="socials" />
            <img src={linkedin} alt="socials" />
            <img src={twitter} alt="socials" />
            <img src={insta} alt="socials" />
            </div>
        </div>
    </div>
  )
}

export default TopBar
