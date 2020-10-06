import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import Select from "react-select"
import SingleProduct from "../../../../components/Provider/Product/List/SingleProduct"
import ChooseProduct from "../../../../components/Provider/Product/List/ChooseProduct"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import { getProviderProductList } from "../../../../services/product"

const ProviderProductList = () => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState([])
    const [productOptions, setProductOptions] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(true)

    useEffect(() => {
        productList()
    }, [])

    const productList = () => {
        dispatch(
            getProviderProductList((res, err) => {
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
                    <ChooseProduct
                        value={product}
                        onChange={(product) => setProduct(product)}
                        options={productOptions}
                    />

                    <SingleProduct
                        products={products}
                        loading={productsLoaded}
                    />
                </div>
            </div>
        </section>
    )
}
export default ProviderProductList
