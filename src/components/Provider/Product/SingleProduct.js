import React from "react"
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa"

const SingleProduct = () => {
    return (
        <div className='single-promotion mb-3 p-3'>
            <div className='row'>
                <div className='col-lg-2'>
                    <img
                        width='100%'
                        className='img-fluid'
                        src='/images/product_list_image.png'
                        alt=''
                    />
                </div>
                <div className='col-lg-8'>
                    <div className='single-promotion-content'>
                        <div className='single-promotion-head-content d-flex'>
                            <div className='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                <div className='header-content'>
                                    <p className='mb-0'>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority.
                                        <br />
                                        <strong className='primary-text3'>$30</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-2'>
                    <button className='gray-text fs-17'>
                        <FaPencilAlt />
                    </button>
                    <button className='gray-text fs-17'>
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
