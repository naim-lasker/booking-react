import React from "react"
import { Modal } from "react-bootstrap"
import { CustomLoader } from "../../../UI/Loader"

const MenuDetailsModal = ({ menuDetails, loading, ...props }) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='provider-add-account-modal'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='provider-add-account-modal'>
                    Menu Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='promotion-area '>
                    <div className='single-promotion'>
                        <img
                            className='img-fluid'
                            src={
                                menuDetails && menuDetails.menu_image != ""
                                    ? menuDetails.menu_image
                                    : "/images/menu_info.png"
                            }
                            alt=''
                        />

                        {!loading ? (
                            <div className='single-promotion-content p-3'>
                                <div className='single-promotion-head-content'>
                                    <div className='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                        <div className='header-content'>
                                            <h4 className='section-header'>
                                                {menuDetails &&
                                                    menuDetails.menu_name}
                                            </h4>
                                        </div>
                                        <div className='single-promotion-price align-self-start'>
                                            {`$ ${
                                                menuDetails &&
                                                menuDetails.selling_price
                                            }`}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h4 className='pt-3 gray-text3'>
                                        Overview
                                    </h4>
                                    <p className='m-0'>
                                        {menuDetails &&
                                            menuDetails.overview}
                                    </p>
                                </div>

                                <div className='mt-3'>
                                    <h4 className='pt-3 gray-text3'>
                                        Additional Information
                                    </h4>
                                    <p className='m-0'>
                                        {menuDetails &&
                                            menuDetails.additional_info}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className='border px-3 rounded'>
                                <CustomLoader />
                            </div>
                        )}
                    </div>

                    <div className='mb-2 text-right'>
                        <button
                            className='view-more-btn mb-0'
                            onClick={props.onHide}
                        >
                            <img
                                src='/images/icons/arrow-shape.png'
                                alt=''
                                className='mr-2'
                            />
                            Back To list
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default MenuDetailsModal
