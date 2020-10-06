import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import Select from "react-select"
import SingleProduct from "../../../../components/Provider/Product/SingleProduct"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import { getProductList } from "../../../../services/product"

const ProviderProductList = () => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [productOptions, setProductOptions] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(true)

    useEffect(() => {
        productList()
    }, [])


    const productList = () => {
        dispatch(
            getProductList((res, err) => {
                if (res) {
                    setProductsLoaded(false)
                    const response = res.data.data
                    setProducts(response)

                    const customProducts =
                        response && response.length > 0
                            ? response.map((item) => {
                                  return {
                                      label: item && item.product_name,
                                      value: item && item.id,
                                  }
                              })
                            : [
                                  {
                                      label: "",
                                      value: "",
                                  },
                              ]

                    setProductOptions(customProducts)
                } else if (err) {
                    setProductsLoaded(false)
                    notify("error", "Something went wrong")
                }
            })
        )
    }

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
                                <button className='question-icon ml-2'>
                                    ?
                                </button>
                            </div>
                            <div>
                                <Select
                                    placeholder='Select a product'
                                    className='form-control input-box'
                                    value={product}
                                    onChange={(product) => setProduct(product)}
                                    options={productOptions}
                                />
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <button className='gradient-btn gradient-lime'>
                                Show Details
                            </button>
                            <a
                                href='provider-add-product'
                                className='gradient-btn gradient-lime'
                            >
                                Add Product
                            </a>
                        </div>
                    </div>

                    <SingleProduct products={products} loading={productsLoaded} />
                </div>
            </div>
        </section>
    )
}
export default ProviderProductList
