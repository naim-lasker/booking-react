import React from "react"
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa"

const SingleProduct = () => {
    return (
        <div class='single-promotion mb-3 p-3'>
            <div class='row'>
                <div class='col-lg-2'>
                    <img
                        width='100%'
                        class='img-fluid'
                        src='/images/product_list_image.png'
                        alt=''
                    />
                </div>
                <div class='col-lg-8'>
                    <div class='single-promotion-content'>
                        <div class='single-promotion-head-content d-flex'>
                            <div class='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                <div class='header-content'>
                                    <p class='mb-0'>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority.
                                        <br />
                                        <strong class='primary-text3'>$30</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='col-lg-2'>
                    <button class='gray-text fs-17'>
                        <FaPencilAlt />
                    </button>
                    <button class='gray-text fs-17'>
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
