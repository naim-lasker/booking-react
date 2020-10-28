import React from "react"
import PropTypes from "prop-types"
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import { CustomLoader } from "../../../UI/Loader"
import PlaceholderData from "../../../UI/PlaceholderData"
import { CustomTooltip } from "../../../UI/Tooltip"

const SingleProduct = ({ products, loading, onClickEdit, onClickDelete }) => {
    return !loading ? (
        products && products.length > 0 ? (
            products.map((product) => (
                <div className='single-promotion mb-3 p-3' key={product.id}>
                    <div className='row'>
                        <div className='col-md-3 d-md-block d-none'>
                            <img
                                width='100%'
                                className='img-fluid'
                                src={
                                    product.product_image
                                        ? product.product_image
                                        : "/images/no-image.png"
                                }
                                alt=''
                            />
                        </div>
                        <div className='col-md-7 col-sm-9 col-8'>
                            <div className='single-promotion-content'>
                                <div className='single-promotion-head-content d-flex'>
                                    <div className='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                        <div className='header-content'>
                                            <p className='mb-0'>
                                                {product.product_name}
                                                <br />
                                                <strong className='primary-text3'>
                                                    {product.selling_price
                                                        ? "$" +
                                                          product.selling_price
                                                        : ""}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-2 col-sm-3 col-4'>
                            <button
                                className='gray-text fs-17'
                                onClick={() => {
                                    onClickEdit(product)
                                }}
                                data-tip
                                data-for='editButton'
                            >
                                <FaPencilAlt />
                            </button>
                            <CustomTooltip id='editButton' text='Edit' />

                            <button
                                className='gray-text fs-17'
                                onClick={() => {
                                    onClickDelete(product)
                                }}
                                data-tip
                                data-for='deleteButton'
                            >
                                <FaTrashAlt />
                            </button>
                            <CustomTooltip id='deleteButton' text='Delete' />
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className='border py-2 px-3 rounded'>
                <PlaceholderData text='No product found!' />
            </div>
        )
    ) : (
        <div className='border py-2 px-3 rounded'>
            <CustomLoader />
        </div>
    )
}

SingleProduct.propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default SingleProduct
