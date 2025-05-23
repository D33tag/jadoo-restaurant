import React from 'react'
import '../../App.css';



const Home = () => {
    return (
        <>
            <div className='homediv0'>

                <div className="homediv1">
                    <h5 className="tagline">BEST DESTINATIONS AROUND THE WORLD</h5>
                    <h1 className='hero-title'>
                        Travel, <span className="highlight">enjoy</span> <br />
                        and live a new <br />
                        and full life
                    </h1>
                    <p>
                        Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to
                        sportsmen it engrossed listening. Park gate <br />sell they west hard for the.
                    </p>
                    <div className="hero-buttons">
                        <button className="find-out">Find out more</button>
                        <button className="play-demo"> <span className='playbutton'><img src="/images/Playbutton.png" alt="" height={100}/></span> <span className='play-text'>Play Demo</span></button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/images/Traveller1.png" alt=""/>
                </div>
            </div>
        </>
    )

}
export default Home