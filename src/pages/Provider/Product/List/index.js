import React, { useEffect, useRef, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import SingleProduct from "../../../../components/Provider/Product/List/SingleProduct"
import ChooseProduct from "../../../../components/Provider/Product/List/ChooseProduct"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import {
    addProviderProductQuantity,
    deleteProviderProduct,
    getProviderProductDetails,
    getProviderProductList,
} from "../../../../services/product"
import ProductDetailsModal from "../../../../components/Provider/Product/Details"
import EditProductModal from "../../../../components/Provider/Product/Edit"
import { CustomAlert, WarningAlert } from "../../../../components/UI/SweetAlert"
import AddQuantity from "../../../../components/Provider/Product/Details/AddQuantity"
import { useInput } from "../../../../helpers/common"

const ProviderProductList = () => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState(null)
    const [productObj, setProductObj] = useState(null)
    const [productDetails, setProductDetails] = useState(null)
    const [productId, setProductId] = useState(null)
    const [quantityProductId, setQuantityProductId] = useState(null)
    const [products, setProducts] = useState([])
    const [productOptions, setProductOptions] = useState([])
    const [productsLoaded, setProductsLoaded] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const [quantityModalShow, setQuantityModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [alertDelete, setAlertDelete] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [productName, setProductName] = useState("")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [detailsLoading, setDetailsLoading] = useState(true)
    const [quantityLoading, setQuantityLoading] = useState(false)
    const [
        productQuantity,
        handleProductQuantity,
        setProductQuantity,
    ] = useInput("")
    const [hasError, setHasError] = useState(false)

    const selectRef = useRef(null);

    useEffect(() => {
        productList()
        return () => {
            setHasError(false)
        }
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
                                      id: item && item.id,
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

    const getProductDetails = (productId) => {
        dispatch(
            getProviderProductDetails(productId, (res, err) => {
                setDetailsLoading(false)
                if (res && res.data) {
                    setProductDetails(res.data.data)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const onPressDetails = (productCategory) => {
        if (!productCategory) {
            selectRef.current.focus()
            setHasError(true)
            return notify("error", "Please choose a product")
        }
        setDetailsLoading(true)
        setModalShow(true)
        getProductDetails(productCategory.id)
    }

    const addQuantityModal = (id) => {
        setQuantityProductId(id)
        setModalShow(false)
        setQuantityModalShow(true)
    }

    const addQuantity = (e, id) => {
        e.preventDefault()

        dispatch(
            addProviderProductQuantity(productQuantity, (res, err) => {
                console.log("res", res)
                console.log("err", err)
                // setQuantityLoading(false)
                // if (err && err.data) {
                //     return notify(
                //         "error",
                //         (err.data.message && err.data.message) ||
                //             "Somethingf went wrong"
                //     )
                // } else if (res && res.data) {
                //     setMessage(res.data.data)
                //     setAlert(true)
                // }
            })
        )
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
                message={`Delete ${productName ? productName : ""}?`}
                onConfirm={confirmDelete}
                onCancel={() => setAlertDelete(false)}
            />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <ChooseProduct
                        value={product}
                        onChange={(product) => setProduct(product)}
                        options={productOptions}
                        selectRef={selectRef}
                        hasError={hasError}
                        onPressDetails={onPressDetails}
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
                productDetails={productDetails}
                addQuantityModal={addQuantityModal}
                loading={detailsLoading}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <AddQuantity
                show={quantityModalShow}
                onHide={() => setQuantityModalShow(false)}
                loading={quantityLoading}
                onSubmit={addQuantity}
                valu={productQuantity}
                onChange={handleProductQuantity}
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
