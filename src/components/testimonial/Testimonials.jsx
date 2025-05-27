import React from 'react'
import Card from 'react-bootstrap/Card';


const Testimonials = () => {
    return (
        <>
            <div className='eaft container'>
                <div className='w-50'>
                    <h5 className="easyandfasttext">Testimonials</h5>
                    <h1>What people say about us.</h1>
                </div>
                <div>
                    <img src="/images/Image.png" alt="" />
                </div>
                <div>
                    <Card>
                        <Card.Body>“On the Windows talking painted pasture yet its <br></br>express parties use. Sure last upon he same as<br></br> knew next. Of believed or diverted no.”
                            <br></br> <br></br>Mike taylor
                            <br></br>Lahore, Pakistan.</Card.Body>
                    </Card>
                </div>
            </div>
            <div className='imagesfive'>
                <div> 
                    <Card>
                    <Card.Body> <img src="/images/Image31.png" alt="" /> </Card.Body>
                </Card>
                </div>
                <div> 
                    <Card>
                    <Card.Body> <img src="/images/Image30.png" alt="" /> </Card.Body>
                </Card>
                </div>
                <div> 
                    <Card>
                    <Card.Body> <img src="/images/Image29.png" alt="" /> </Card.Body>
                </Card>
                </div>
                <div> 
                    <Card>
                    <Card.Body> <img src="/images/Image28.png" alt="" /> </Card.Body>
                </Card>
                </div>
                <div> 
                    <Card>
                    <Card.Body> <img src="/images/Image27.png" alt="" /></Card.Body>
                </Card>
                </div>
            </div>
        </>
    );
}

export default Testimonials