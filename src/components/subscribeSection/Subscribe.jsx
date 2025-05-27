import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';


const Subscribe = () => {
    return (

        <div className='subscribeSection'>
            <div> 
                <h2>Subscribe to get information, latest news and other <br></br>
                interesting offers about Jadoo</h2>
            </div>
            <div>
                <Form>
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="inlineFormInputGroupUsername"
                                    placeholder="Username"
                                />
                            </InputGroup>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>


                </Form>

            </div >
        </div>
    )
}

export default Subscribe