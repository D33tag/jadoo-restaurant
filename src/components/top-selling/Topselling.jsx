import React from 'react'
import Card from 'react-bootstrap/Card'
import '../../App.css';


const Topselling = () => {
    return (
        <>
            <div>
                <h1 className='category-title'>Top Selling</h1>
                <p className='category-description'>Top Destination</p>
            </div>
            <div className='picturediv1'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.citywonders.com/media/20478/colosseum-exterior-at-sunset-city-wonders.jpg?anchor=center&mode=crop&width=1024&height=670" alt='Coloseum' className='custom-card-img' />
                    <Card.Body>
                        <Card.Text>
                            <div className='locations'>
                                <div>
                                    Rome, Italy
                                </div>
                                <div>
                                    $5,42k
                                </div>
                            </div>
                            <div className='tripinfo'>
                                <div>
                                    <img src="/images/Navigation.png" alt="" />
                                </div>
                                <div>
                                    12 Days Trip
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://static01.nyt.com/images/2017/12/11/travel/360-coverchichenitza/360-coverchichenitza-superJumbo-v2.jpg" alt='Chichén Itzá' className='custom-card-img' />
                    <Card.Body>
                        <Card.Text>
                            <div className='locations'>
                                <div>
                                    Yucatan, Mexico
                                </div>
                                <div>
                                    $3,55k
                                </div>
                            </div>
                            <div className='tripinfo'>
                                <div>
                                    <img src="/images/Navigation.png" alt="" />
                                </div>
                                <div>
                                    12 Days Trip
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://qtxasset.com/quartz/qcloud1/media/image/2017-03/BigBenCreditsborisoviStockGettyImagesPlusGettyImages_0.jpg?VersionId=3AnthHi4ggN4SDwpDpn0mdbgfTmVJnQR" alt='Big Ben' className='custom-card-img' />
                    <Card.Body>
                        <Card.Text>
                            <div className='locations'> 
                                <div>
                                    London, UK
                                </div>
                                <div>
                                    $4,2k
                                </div>
                            </div>
                            <div className='tripinfo'>
                                <div>
                                    <img src="/images/Navigation.png" alt="" />
                                </div>
                                <div>
                                    12 Days Trip
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Topselling
