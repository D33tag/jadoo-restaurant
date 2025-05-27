import Card from 'react-bootstrap/Card';


const Bookingpage = () => {
    return (
        <>
            

            <div className='bigDiv container'>
                <div className='w-50'> 
                <h5 className="easyandfasttext">Easy and Fast</h5>
                    <div className='Bookingtext'>
                        <h1>Book your next trip in 3 easy steps</h1>
                    </div>
                    <div className='despayair'>
                        <div className='Destina'>
                            <div>
                                <img src="/images/Destination.png" alt="" />
                            </div>
                            <div className='airportwriting'>
                                <h3 className="easyandfasttext">Choose Destination</h3>
                                <p>We offer you a wide range of destinations to choose from.</p>
                            </div>
                        </div>
                        <div className='Destina'>
                            <div>
                                <img src="/images/Payment.png" alt="" />
                            </div>
                            <div className='airportwriting'>
                                <h3 className="easyandfasttext">Choose convenient Payment Method</h3>
                                <p>We offer Payment via Fiat currency and crypto currency.</p>
                            </div>
                        </div>
                        <div className='Destina'>
                            <div>
                                <img src="/images/Airport.png" alt="" />
                            </div>
                            <div className='airportwriting'>
                                <h3 className="easyandfasttext">Choose Airport</h3>
                                <p>All airports inclusive.</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='w-50 justify-content-center '>
                    <Card style={{ width: '18rem', borderRadius:'10px' }}>
                        <Card.Img variant="top" src="/images/Greecetrip.jpg" alt='' className='' />
                        <Card.Body>
                            <Card.Text>
                                <div className=''>
                                    <div>
                                        Trip to Greece
                                    </div>
                                    <div className='robbin'>
                                        14-29 June| by Robbin Joseph
                                    </div>

                                </div>
                                <div className='lemese'>
                                    <div>
                                        <img src="/images/Leaf.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/Mapicon.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="/images/Send.png" alt="" />
                                    </div>
                                </div>
                                <div className='buildpeo'>
                                    <div>
                                        <img src="/images/Building1.png" alt="" />
                                    </div>

                                    <p> 24 people going</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            </div>

        </>
    )
}

export default Bookingpage