import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import SingleProduct from "../../../../components/Provider/Product/List/SingleProduct"
import ChooseProduct from "../../../../components/Provider/Product/List/ChooseProduct"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import { deleteProviderProduct, getProviderProductList } from "../../../../services/product"
import ProductDetailsModal from "../../../../components/Provider/Product/Details"
import EditProductModal from "../../../../components/Provider/Product/Edit"
import { CustomAlert, WarningAlert } from "../../../../components/UI/SweetAlert"

const ProviderProductList = () => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState(null)
    const [productObj, setProductObj] = useState(null)
    const [productId, setProductId] = useState(null)
    const [products, setProducts] = useState([])
    const [productOptions, setProductOptions] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [alertDelete, setAlertDelete] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [productName, setProductName] = useState("")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")

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

    const onClickEdit = (product) => {
        setProductObj(product)
        setEditModalShow(true)
    }

    const onClickDelete = (product) => {
        setAlertDelete(true)
        setProductId(product ? product.id : null)
        setProductName(product ? product.product_name : "")
    }

    const confirmDelete = () => {
        setDeleteLoading(true)
        dispatch(
            deleteProviderProduct(productId, (res, err) => {
                setDeleteLoading(false)
                if (res && res.data && res.data.status === "success") {
                    productList()
                    setMessage(res.data.data)
                    setAlert(true)
                    setAlertDelete(false)
                } else if (err) {
                    if (err && err.data) {
                        setAlertDelete(false)
                        notify(
                            "error",
                            (err.data.contents &&
                                err.data.contents.category_name &&
                                err.data.contents.category_name[0]) ||
                                "Something went wrong"
                        )
                    }
                }
            })
        )
    }
    const confirmAlert = () => {
        setAlert(false)
    }

    return (
        <section className='promotion-area mb-5'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Product List" }]} />

            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <WarningAlert
                loading={deleteLoading}
                show={alertDelete}
                message={`Delete ${productName}?`}
                onConfirm={confirmDelete}
                onCancel={() => setAlertDelete(false)}
            />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <ChooseProduct
                        value={product}
                        onChange={(product) => setProduct(product)}
                        options={productOptions}
                        onPressDetails={() => setModalShow(true)}
                    />

                    <SingleProduct
                        products={products}
                        loading={productsLoaded}
                        onClickEdit={onClickEdit}
                        onClickDelete={onClickDelete}
                    />
                </div>
            </div>

            <ProductDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <EditProductModal
                show={editModalShow}
                onHide={() => setEditModalShow(false)}
                product={productObj}
            />
        </section>
    )
}
export default ProviderProductList
