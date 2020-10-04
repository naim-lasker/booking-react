import React from "react"
import { FaHome } from "react-icons/fa"
import SingleProduct from "../../../../components/Provider/Product/SingleProduct"
import Breadcrumb from "../../../../components/UI/Breadcrumb"

const ProviderProductList = () => {
    return (
        <section className='promotion-area mb-5'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Product List" }]} />

            <div class='row justify-content-center'>
                <div class='col-lg-9'>
                    <div className='mb-5'>
                        <div class='mb-4'>
                            <div class='d-flex align-items-center mb-3'>
                                <label class='label-name'>
                                    Choose your Product
                                </label>
                                <button class='question-icon ml-2'>?</button>
                            </div>
                            <div>
                                <select
                                    class='custom-select mr-sm-2 input-box py-2 text-muted '
                                    id='inlineFormCustomSelect'
                                >
                                    <option selected>Choose Product</option>
                                    <option value='1'>Pro One</option>
                                    <option value='2'>Pro Two</option>
                                    <option value='3'>Pro Three</option>
                                </select>
                            </div>
                        </div>

                        <div class='d-flex justify-content-between'>
                            <button class='gradient-btn gradient-lime'>
                                Show More
                            </button>
                            <button class='gradient-btn gradient-lime'>
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
