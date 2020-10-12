import React, { createRef, useEffect, useState } from "react"
import { CustomInput } from "../../../UI/InputField"
import Checkbox from "../../../UI/Checkbox"
import { RadioButton } from "../../../UI/RadioButton"
import { SubmitButton } from "../../../UI/Button"
import { useDispatch } from "react-redux"
import { useFileInput, useInput } from "../../../../helpers/common"
import { editProviderProduct } from "../../../../services/product"
import { ConfirmAlert, CustomAlert } from "../../../UI/SweetAlert"
import { notify } from "../../../../helpers/ui"
import { Modal } from "react-bootstrap"
import MenuSummery from "../Add/MenuSummery"

const EditProductModal = ({ show, onHide, product }) => {
    const dispatch = useDispatch()
    const [productId, setProductId] = useState(0)
    const [productImage, handleProductImage, setProductImage] = useFileInput({
        file: "",
        image: "",
    })
    const [productName, handleProductName, setProductName] = useInput("")
    const [overview, handleOverview, setOverview] = useInput("")
    const [additionalInfo, handleAdditionalInfo, setAdditionalInfo] = useInput(
        ""
    )
    const [
        quantityInStock,
        handleQuantityInStock,
        setQuantityInStock,
    ] = useInput(0)
    const [sellingPrice, handleSellingPrice, setSellingPrice] = useInput(0)
    const [vat, handleVat, setVatCodePercentence] = useInput(0)
    const [availabilityStatus, setAvailabilityStatus] = useState(false)
    const [
        availabilityFrom,
        handleAvailabilityFrom,
        setAvailabilityFrom,
    ] = useInput(new Date())
    const [availabilityTo, handleAvailabilityTo, setAvailabilityTo] = useInput(
        new Date()
    )
    const [discountStatus, handleDiscountStatus, setDiscountStatus] = useInput(
        1
    )
    const [
        discountPercentage,
        handleDiscountPercentage,
        setDiscountPercentence,
    ] = useInput(0)
    const [loadingService, setLoadingService] = useState(false)
    const [loading, setLoading] = useState(false)
    const [confirmAlert, setConfirmAlert] = useState(false)
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")

    let discountAmount = 0
    discountAmount = ((sellingPrice * discountPercentage) / 100).toFixed(2)

    let vatCodeAmount = 0
    vatCodeAmount = ((sellingPrice * vat) / 100).toFixed(2)

    let customerPays = 0
    customerPays = (
        sellingPrice -
        (Number(discountAmount) + Number(vatCodeAmount))
    ).toFixed(2)

    const productNameRef = createRef()

    useEffect(() => {
        setProductId(product ? product.id : 0)
        setProductName(product ? product.product_name : "")
        setOverview(product ? product.overview : "")
        setAdditionalInfo(product ? product.additional_info : "")
        setQuantityInStock(product ? product.quantity_in_stock : 0)
        setSellingPrice(product ? product.selling_price : 0)
        setVatCodePercentence(product ? product.vat : 0)
        setAvailabilityStatus(product && product.availability_status == 1 ? true : false)
        setAvailabilityFrom(product ? product.availability_from : "")
        setAvailabilityTo(product ? product.availability_to : "")
        setDiscountStatus(product && product.discount_status == 1 ? true : false)
        setDiscountPercentence(product ? product.discount_percentage : "")
    }, [product])

    let productObj = {
        productImage: productImage.image,
        productName,
        overview,
        additionalInfo,
        sellingPrice,
        vat,
        quantityInStock,
        discountStatus,
        discountAmount,
        discountPercentage,
        availabilityStatus,
        availabilityFrom,
        availabilityTo,
    }

    const checkSubmit = () => {
        if (!productName) {
            productNameRef.current.focus()
            notify("error", "Please enter product name")
        } else {
            setConfirmAlert(true)
        }
    }

    const handleSubmitAsService = () => {
        productObj.isService = 1
        setLoadingService(true)

        dispatch(
            editProviderProduct(productObj, productId, (res, err) => {
                setLoadingService(false)
                setConfirmAlert(false)

                if (err && err.data) {
                    return notify(
                        "error",
                        (err.data.message && err.data.message) ||
                            "Somethingf went wrong"
                    )
                } else if (res && res.data) {
                    setMessage(res.data.data)
                    setAlert(true)
                }
            })
        )
    }

    const handleSubmit = () => {
        productObj.isService = 0
        setLoading(true)

        dispatch(
            editProviderProduct(productObj, productId, (res, err) => {
                setLoading(false)
                setConfirmAlert(false)

                if (err && err.data) {
                    return notify(
                        "error",
                        (err.data.message && err.data.message) ||
                            "Somethingf went wrong"
                    )
                } else if (res && res.data) {
                    setMessage(res.data.data)
                    setAlert(true)
                }
            })
        )
    }

    const confirmAddProduct = () => {
        setProductImage({
            file: "",
            image: "",
        })
        setProductName("")
        setOverview("")
        setAdditionalInfo("")
        setQuantityInStock(0)
        setSellingPrice(0)
        setVatCodePercentence(0)
        setAvailabilityFrom(new Date())
        setAvailabilityTo(new Date())
        setAvailabilityStatus(false)
        setDiscountStatus(1)
        setDiscountPercentence(0)
        setAlert(false)
        onHide()
    }

    return (
        <Modal
            className='add-menu-area'
            show={show}
            onHide={onHide}
            size='lg'
            aria-labelledby='edit-product'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='edit-product'>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className='mx-3'>
                <ConfirmAlert
                    loadingYes={loadingService}
                    loadingNo={loading}
                    show={confirmAlert}
                    message={`Do you want to make this product as a service?`}
                    onConfirm={handleSubmitAsService}
                    onCancel={handleSubmit}
                />

                <CustomAlert
                    show={alert}
                    message={message}
                    onConfirm={confirmAddProduct}
                />
                <div className='upload-container row justify-content-center align-items-center flex-column '>
                    <div className='row justify-content-center'>
                        <label
                            htmlFor='imageInput'
                            className='upload-img-container text-center'
                        >
                            <div className='profile-pic-inner'>
                                <input
                                    multiple
                                    id='imageInput'
                                    type='file'
                                    className='d-none'
                                    accept='image/gif, image/jpg, image/jpeg, image/png'
                                    alt=''
                                    onChange={handleProductImage}
                                />
                                <img
                                    className='profile-pic-inner-img'
                                    src={
                                        productImage.image
                                            ? productImage.image
                                            : "/images/icons/upload.png"
                                    }
                                    alt=''
                                />
                                <h4 className='browse-img mt-3'>
                                    browse images
                                </h4>
                            </div>
                        </label>
                        <div className='align-self-center ml-5'>
                            <button className='question-icon'>?</button>
                        </div>
                    </div>
                    <h3 className='upload-img-header'>Upload product image</h3>
                </div>

                <div className='mb-3'>
                    <CustomInput
                        inputRef={productNameRef}
                        showLabel
                        type='text'
                        label='Product Name'
                        id='productName'
                        infoText='Product Name info'
                        placeholder='All meat pizza'
                        value={productName}
                        onChange={handleProductName}
                    />

                    <CustomInput
                        showLabel
                        type='text'
                        label='Overview'
                        id='overview'
                        infoText='Overview info'
                        placeholder='This pizza is made with love in our home made oven'
                        value={overview}
                        onChange={handleOverview}
                    />

                    <CustomInput
                        showLabel
                        type='text'
                        label='Additional Information'
                        id='additionalInfo'
                        infoText='Additional Information info'
                        placeholder='We used pork, chicken, spicy beef on a tomato base pizza bread'
                        value={additionalInfo}
                        onChange={handleAdditionalInfo}
                    />

                    <CustomInput
                        showLabel
                        type='number'
                        min='0'
                        label='Quantity In Stock'
                        id='quantityInStock'
                        infoText='Quantity In Stock info'
                        placeholder='Enter quantity in stock'
                        value={quantityInStock}
                        onChange={handleQuantityInStock}
                    />

                    <div className='row justify-content-md-between'>
                        <div className='col-lg-5'>
                            <CustomInput
                                showLabel
                                type='number'
                                min='0'
                                label='Selling Price'
                                id='sellingPrice'
                                infoText='Selling Price info'
                                placeholder='e.g. 10.00$'
                                value={sellingPrice}
                                onChange={handleSellingPrice}
                            />
                        </div>

                        <div className='col-lg-5 mt-lg-0 mt-3'>
                            <CustomInput
                                showLabel
                                showRightText
                                type='number'
                                maxLength='2'
                                min='0'
                                max='15'
                                rightText='%'
                                label='Choose VAT code'
                                id='vat'
                                infoText='Choose VAT code info'
                                placeholder='5% - 15%'
                                value={vat}
                                onChange={handleVat}
                            />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <div className='d-flex align-items-center'>
                            <Checkbox
                                text='All Day Availability'
                                checked={availabilityStatus}
                                onChange={() =>
                                    setAvailabilityStatus(!availabilityStatus)
                                }
                            />
                            <button className='question-icon ml-2'>?</button>
                        </div>
                    </div>

                    {!availabilityStatus && (
                        <div className='row mb-4'>
                            <div className='col-lg-5 col-md-6 mb-md-0 mb-3'>
                                <CustomInput
                                    type='date'
                                    placeholder='From'
                                    value={availabilityFrom}
                                    onChange={handleAvailabilityFrom}
                                />
                            </div>

                            <div className='col-lg-5 col-md-6'>
                                <CustomInput
                                    type='date'
                                    placeholder='To'
                                    value={availabilityTo}
                                    onChange={handleAvailabilityTo}
                                />
                            </div>
                        </div>
                    )}

                    <div className='mb-3'>
                        <label className='label-name'>
                            Is discount available
                        </label>
                        <button className='question-icon ml-2'>?</button>
                    </div>

                    <div className='d-flex mb-3'>
                        <RadioButton
                            className='mr-5'
                            id='discountAvailable'
                            defaultChecked
                            onChange={handleDiscountStatus}
                            label='Yes'
                            value='1'
                            name='discountStatus'
                        />
                        <RadioButton
                            id='discountNotAvailable'
                            onChange={handleDiscountStatus}
                            label='No'
                            value='0'
                            name='discountStatus'
                        />
                    </div>

                    {discountStatus == 1 && (
                        <div className='row align-items-center'>
                            <div className='col-md-6 mb-md-0 mb-3'>
                                <CustomInput
                                    showLabel
                                    showRightText
                                    type='number'
                                    min='0'
                                    rightText='%'
                                    label='Discount Percentence'
                                    id='discountPercentage'
                                    infoText='Discount Percentence info'
                                    placeholder='Enter Percentence'
                                    value={discountPercentage}
                                    onChange={handleDiscountPercentage}
                                />
                            </div>

                            <div className='col-md-6'>
                                <CustomInput
                                    showLabel
                                    disabled
                                    type='number'
                                    min='0'
                                    label='Discount Amount'
                                    id='discountAmount'
                                    infoText='Discount Amount info'
                                    placeholder='0'
                                    value={discountAmount}
                                />
                            </div>
                        </div>
                    )}

                    {/* <div className='row mb-5'>
                        <div className='col-lg-4 col-md-4 mb-md-0 mb-4 text-md-left text-center'>
                            <img src='/images/profile/edit-img.png' alt='' />
                            <button className='ml-3 title-text'>
                                <FaPencilAlt />
                            </button>
                            <button className='title-text'>
                                <FaTrashAlt />
                            </button>
                        </div>
                        <div className='col-lg-4 col-md-4 mb-md-0 mb-4 text-md-left text-center'>
                            <img src='/images/profile/edit-img.png' alt='' />
                            <button className='ml-3 title-text'>
                                <FaPencilAlt />
                            </button>
                            <button className='title-text'>
                                <FaTrashAlt />
                            </button>
                        </div>
                        <div className='col-lg-4 col-md-4 text-md-left text-center'>
                            <img src='/images/profile/edit-img.png' alt='' />
                            <button className='ml-3 title-text'>
                                <FaPencilAlt />
                            </button>
                            <button className='title-text'>
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div> */}

                    <div className='d-flex justify-content-center mb-5 pb-5'>
                        <button
                            onClick={onHide}
                            className='gradient-btn gradient-lime mr-3'
                        >
                            Cancel
                        </button>
                        <SubmitButton
                            lime={true}
                            text='Add Product'
                            onClick={checkSubmit}
                        />
                    </div>
                </div>

                <MenuSummery
                    sellingPrice={sellingPrice}
                    discountPercentage={discountPercentage}
                    discountAmount={discountAmount}
                    vat={vat}
                    vatCodeAmount={vatCodeAmount}
                    customerPays={customerPays}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditProductModal
