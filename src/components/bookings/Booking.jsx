import Card from 'react-bootstrap/Card';


const booking = () => {
    return (
        <>
            <h5>Easy and Fast</h5>

            <div>
                <div>
                    <h1>Book your next trip in 3 easy steps</h1>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="/images/Destination.png" alt="" />
                        </div>
                        <div>
                            <h3>Choose Destination</h3>
                            <p>We offer you a wide range of destinations to choose from.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/images/Payment.png" alt="" />
                        </div>
                        <div>
                            <h3>Choose convenient Payment Method</h3>
                            <p>We offer Payment via Fiat currency and crypto currency.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/images/Airport.png" alt="" />
                        </div>
                        <div>
                            <h3>Choose Airport</h3>
                            <p>All airports inclusive.</p>
                        </div>
                    </div>

                </div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/Greecetrip.jpg" alt='' className='' />
                    <Card.Body>
                        <Card.Text>
                            <div className=''>
                                <div>
                                    Trip to Greece
                                </div>
                                <div>
                                   14-29 June| by Robbin Joseph
                                </div>
                               
                            </div>
                            <div className=''>
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
                            <div>
                                <div>
                                    <img src="/images/Building1.png" alt="" />
                                </div>

                                <p>24 people going</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
               
            </div>

        </>
    )
}

export default booking