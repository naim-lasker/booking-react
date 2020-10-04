import React from "react"
import { FaHome } from "react-icons/fa"
import SingleProduct from "../../../../components/Provider/Product/SingleProduct"
import Breadcrumb from "../../../../components/UI/Breadcrumb"

const ProviderProductList = () => {
    return (
        <section className='promotion-area mb-5'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Product List" }]} />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <div className='mb-5'>
                        <div className='mb-4'>
                            <div className='d-flex align-items-center mb-3'>
                                <label className='label-name'>
                                    Choose your Product
                                </label>
                                <button className='question-icon ml-2'>?</button>
                            </div>
                            <div>
                                <select
                                    className='custom-select mr-sm-2 input-box py-2 text-muted '
                                    id='inlineFormCustomSelect'
                                >
                                    <option selected>Choose Product</option>
                                    <option value='1'>Pro One</option>
                                    <option value='2'>Pro Two</option>
                                    <option value='3'>Pro Three</option>
                                </select>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <button className='gradient-btn gradient-lime'>
                                Show More
                            </button>
                            <button className='gradient-btn gradient-lime'>
                                Add Product
                            </button>
                        </div>
                    </div>

                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
            </div>
        </section>
    )
}
export default ProviderProductList
