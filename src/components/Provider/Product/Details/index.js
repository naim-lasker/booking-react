import React from "react"
import { Modal } from "react-bootstrap"
import { CustomLoader } from "../../../UI/Loader"

const ProductDetailsModal = ({
    productDetails,
    loading,
    addQuantityModal,
    ...props
}) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='provider-add-account-modal'
            centered
        >
            <Modal.Header closeButton>
                <div className='d-flex justify-content-between w-100'>
                    <Modal.Title id='provider-add-account-modal'>
                        Product Details
                    </Modal.Title>

                    <button
                        className='gradient-btn gradient-lime button-small'
                        onClick={() => addQuantityModal(productDetails.id)}
                    >
                        Add quantity
                    </button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className='promotion-area '>
                    {!loading ? (
                        <div className='single-promotion'>
                            {productDetails &&
                                productDetails.product_image &&
                                productDetails.product_image != "" && (
                                    <div className='text-center'>
                                        <img
                                            className='img-fluid max-width-150'
                                            src={productDetails.product_image}
                                            alt=''
                                        />
                                    </div>
                                )}
                            <div className='single-promotion-content p-3'>
                                <div className='single-promotion-head-content'>
                                    <div className='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                        <div className='header-content'>
                                            <h4 className='section-header'>
                                                {productDetails &&
                                                    productDetails.product_name}
                                            </h4>
                                        </div>
                                        <div className='single-promotion-price align-self-start'>
                                            {`$${
                                                productDetails &&
                                                productDetails.selling_price
                                            }`}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <h4 className='pt-3 gray-text3'>
                                        Overview
                                    </h4>
                                    <p className='m-0'>
                                        {productDetails &&
                                            productDetails.overview}
                                    </p>
                                </div>

                                <div className='mt-3'>
                                    <h4 className='pt-3 gray-text3'>
                                        Additional Information
                                    </h4>
                                    <p className='m-0'>
                                        {productDetails &&
                                            productDetails.additional_info}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='border px-3 rounded'>
                            <CustomLoader />
                        </div>
                    )}

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

export default ProductDetailsModal
