import React from "react"
import { Modal } from "react-bootstrap"
import MultiRange from "../../UI/Range"

const StoreFilterModal = (props) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='store-filter-modal'
            centered
            className='customer-filter-area'
        >
            <Modal.Header closeButton>
                <Modal.Title id='store-filter-modal'>Apply Filter</Modal.Title>
            </Modal.Header>
            <Modal.Body className='mx-4'>
                <div className='d-flex justify-content-between mb-3'>
                    <label
                        className='label-name d-flex flex-column'
                        htmlFor='amountRange'
                    >
                        <span>Min price</span>
                        <input
                            className='border-0 ml-4'
                            type='text'
                            id='minAmount'
                            readOnly
                        />
                    </label>
                    <label
                        className='label-name d-flex flex-column align-items-end'
                        htmlFor='amountRange'
                    >
                        <span>Max price</span>
                        <input
                            className='text-right border-0 mr-4'
                            type='text'
                            id='maxAmount'
                            readOnly
                        />
                    </label>
                </div>
                <div id='amountRange'></div>

                <MultiRange />

                <div className='input-block pt-5'>
                    <label className='label-name' htmlFor='formControlRange'>
                        Location
                    </label>
                    <input
                        type='text'
                        className='form-control input-box py-2'
                        placeholder='Mainland'
                    />
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='input-block'>
                            <label
                                className='label-name'
                                htmlFor='formControlRange'
                            >
                                Location
                            </label>
                            <div className='input-group align-items-center'>
                                <input
                                    type='text'
                                    className='form-control input-box py-2 border-right-0'
                                    placeholder='15.00'
                                />
                                <span className='input-group-append'>
                                    <div className='input-group-text bg-transparent'>
                                        <img
                                            src='/images/icons/clock.png'
                                            alt=''
                                        />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='input-block'>
                            <label
                                className='label-name'
                                htmlFor='formControlRange'
                            >
                                Location
                            </label>
                            <div className='input-group align-items-center'>
                                <input
                                    type='text'
                                    className='form-control input-box py-2 border-right-0'
                                    placeholder='15.00'
                                />
                                <span className='input-group-append'>
                                    <div className='input-group-text bg-transparent'>
                                        <img
                                            src='/images/icons/clock.png'
                                            alt=''
                                        />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='filer-service'>
                    <label className='label-name'>Services</label>
                    <div className='service-list border'>
                        <label
                            htmlFor='aroma'
                            className='d-flex justify-content-between single-list'
                        >
                            <p className='m-0'>Aroma</p>
                            <div>
                                <input
                                    className='form-check-input'
                                    id='aroma'
                                    type='checkbox'
                                    value=''
                                />
                            </div>
                        </label>

                        <label
                            htmlFor='spa'
                            className='d-flex justify-content-between single-list'
                        >
                            <p className='m-0'>Spa</p>
                            <div>
                                <input
                                    className='form-check-input'
                                    id='spa'
                                    type='checkbox'
                                    value=''
                                />
                            </div>
                        </label>

                        <label
                            htmlFor='alpaWhitening'
                            className='d-flex justify-content-between single-list'
                        >
                            <p className='m-0'>Alpa whitening</p>
                            <div>
                                <input
                                    className='form-check-input'
                                    id='alpaWhitening'
                                    type='checkbox'
                                    value=''
                                />
                            </div>
                        </label>

                        <label
                            htmlFor='aloeVera'
                            className='d-flex justify-content-between single-list'
                        >
                            <p className='m-0'>Aloe vera</p>
                            <div>
                                <input
                                    className='form-check-input'
                                    id='aloeVera'
                                    type='checkbox'
                                    value=''
                                />
                            </div>
                        </label>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer className='justify-content-center'>
                <a href='/provider-booking'>Add account details later </a>
            </Modal.Footer>
        </Modal>
    )
}

export default StoreFilterModal
