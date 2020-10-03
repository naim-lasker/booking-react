import React from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"

const BottomAccordion = () => {
    return (
        <div className='row justify-content-center mb-5'>
            <div className='col-lg-10'>
                <Accordion className='collapse-container'>
                    <Card className='border-0 custom-card px-4 mb-3'>
                        <Card.Header className='card-header border-0 bg-white px-0 px-0'>
                            <Accordion.Toggle
                                as={Button}
                                className='btn d-block w-100 p-0'
                                variant='link'
                                eventKey='0'
                            >
                                <div className='collapsed collapse-btn d-flex justify-content-between align-items-center'>
                                    <span>Update Payment Details</span>
                                    <FaChevronUp />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body className='px-0 pt-0'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className='border-0 custom-card px-4'>
                        <Card.Header className='card-header border-0 bg-white px-0 px-0'>
                            <Accordion.Toggle
                                as={Button}
                                className='btn d-block w-100 p-0'
                                variant='link'
                                eventKey='1'
                            >
                                <div className='collapsed collapse-btn d-flex justify-content-between align-items-center'>
                                    <span>Change Password</span>
                                    <FaChevronUp />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body className='px-0 pt-0'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
}

export default BottomAccordion
