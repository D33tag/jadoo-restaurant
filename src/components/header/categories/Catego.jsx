import React from 'react'
import Card from 'react-bootstrap/Card';


const Catego = () => {
    return (
        <>
            <div className='extras'>
                <div className='categoedit'>
                    <h1 className='category-title'>CATEGORY</h1>
                    <p className='category-description'>We Offer Best Services</p>
                </div>
                <div className='category-image'>
                    <img src="/images/Group4.png" alt="" height={170} width={150} />
                </div>
            </div>
            <div className='cardstyling'>
                <Card style={{ width: '18rem', }}>
                    <Card.Body>
                        <Card.Title>
                            <div className='calculated-weather'>
                                <img src="/images/Group48.png" alt="" />
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <h3>Calculated Weather</h3>
                            Built Wicket longer admire do barton vanity itself do in it.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>
                            <div className='calculated-weather'>
                                <img src="/images/plane.png" alt="" height={80} />
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <h3>Best Flights</h3>
                            Engrossed listening. Park gate sell they west hard for the.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>
                            <div className='calculated-weather'>
                                <img src="/images/Group50.png" alt="" />
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <h3>Local Events</h3>
                            Barton vanity itself do in it. Preferd to men it engrossed listening.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <div className='calculated-weather'>
                                <img src="/images/Group49.png" alt="" />
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <h3>Customization</h3>
                            We deliver outsourced aviation services for military customers
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </>

    );
}

export default Catego