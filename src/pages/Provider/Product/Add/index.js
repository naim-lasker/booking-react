import React, { useEffect, useState } from "react"
import { FaHome, FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import MenuSummery from "../../../../components/Provider/Product/Add/MenuSummery"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { CustomInput } from "../../../../components/UI/InputField"
import { RadioButton } from "../../../../components/UI/RadioButton"
import { useFileInput, useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { addProviderProduct } from "../../../../services/product"

const ProviderAddProduct = () => {
    const dispatch = useDispatch()
    const [productImage, setProductImage] = useState(null)
    const [productName, handleProductName, setProductName] = useInput("")
    const [overview, handleOverview, setOverview] = useInput("")
    const [additionalInfo, handleAdditionalInfo, setAdditionalInfo] = useInput(
        ""
    )
    const [
        quantityInStock,
        handleQuantityInStock,
        setQuantityInStock,
    ] = useInput("")
    const [sellingPrice, handleSellingPrice, setSellingPrice] = useInput(0)
    const [vat, handleVat, setVatCodePercentence] = useInput(0)
    const [
        availabilityFrom,
        handleAvailabilityFrom,
        setAvailabilityFrom,
    ] = useInput(new Date())
    const [availabilityTo, handleAvailabilityTo, setAvailabilityTo] = useInput(
        new Date()
    )
    const [discountStatus, handleDiscountStatus, setDiscountStatus] = useInput(
        false
    )
    const [
        availabilityStatus,
        handleAvailabilityStatus,
        setAvailabilityStatus,
    ] = useInput(false)
    const [
        discountPercentage,
        handleDiscountPercentage,
        setDiscountPercentence,
    ] = useInput(0)
    const [isService, handleIsService, setIsService] = useInput(false)
    const [loading, setLoading] = useState(false)

    let discountAmount = 0
    discountAmount = ((sellingPrice * discountPercentage) / 100).toFixed(2)

    let vatCodeAmount = 0
    vatCodeAmount = ((sellingPrice * vat) / 100).toFixed(2)

    let customerPays = 0
    customerPays = (
        sellingPrice -
        (Number(discountAmount) + Number(vatCodeAmount))
    ).toFixed(2)

    const multiFile = []
    const fileArray = []

    console.log("productImage", productImage)

    const handleSubmit = (event) => {
        event.preventDefault()

        return
        setLoading(true)

        const productObj = {
            productImage,
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
            isService,
        }
        dispatch(
            addProviderProduct(productObj, (res, err) => {
                setLoading(false)

                // if (res && res.data && res.data.status === "error") {
                //     return notify("error", res.data.data)
                // } else if (res && res.data && res.data.status === "success") {
                //     setMessage(res.data.data)
                //     setAlert(true)
                // }
            })
        )
    }

    return (
        <section className='add-menu-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add Product" },
                ]}
            />

            <form onSubmit={handleSubmit}>
                <div className='row justify-content-center'>
                    <div className='col-lg-9'>
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
                                            onChange={(e) => {
                                                multiFile.push(e.target.files)
                                                for (
                                                    let i = 0;
                                                    i < multiFile[0].length;
                                                    i++
                                                ) {
                                                    fileArray.push(
                                                        URL.createObjectURL(
                                                            multiFile[0][i]
                                                        )
                                                    )
                                                }
                                                setProductImage(fileArray)
                                            }}
                                        />
                                        <img
                                            src='/images/icons/upload.png'
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
                            <h3 className='upload-img-header'>
                                Upload Multiple product images
                            </h3>
                        </div>

                        <div className='mb-3'>
                            <CustomInput
                                required
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
                                required
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
                                required
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
                                required
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
                                        required
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
                                        required
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
                                    <label className='label-name mr-2'>
                                        All Day Availability
                                    </label>
                                    <input type='checkbox' />
                                    <button className='question-icon ml-2'>
                                        ?
                                    </button>
                                </div>
                            </div>

                            <div className='row mb-4'>
                                <div className='col-lg-5 col-md-6 mb-md-0 mb-3'>
                                    <CustomInput
                                        required
                                        type='date'
                                        placeholder='From'
                                        value={availabilityFrom}
                                        onChange={handleAvailabilityFrom}
                                    />
                                </div>

                                <div className='col-lg-5 col-md-6'>
                                    <CustomInput
                                        required
                                        type='date'
                                        placeholder='To'
                                        value={availabilityTo}
                                        onChange={handleAvailabilityTo}
                                    />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label className='label-name'>
                                    Is discount available
                                </label>
                                <button className='question-icon ml-2'>
                                    ?
                                </button>
                            </div>

                            <div className='d-flex mb-3'>
                                <RadioButton
                                    className='mr-5'
                                    id='discountAvailable'
                                    onChange={handleDiscountStatus}
                                    label='Yes'
                                    value='yes'
                                    name='discountStatus'
                                />
                                <RadioButton
                                    id='discountNotAvailable'
                                    onChange={handleDiscountStatus}
                                    label='No'
                                    value='no'
                                    name='discountStatus'
                                />
                            </div>

                            <div className='row align-items-center mb-5'>
                                <div className='col-md-6 mb-md-0 mb-3'>
                                    <CustomInput
                                        required
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
                                        required
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

                            <div className='row mb-4'>
                                <div className='col-lg-4 col-md-4 mb-md-0 mb-4 text-md-left text-center'>
                                    <img
                                        src='/images/profile/edit-img.png'
                                        alt=''
                                    />
                                    <button className='ml-3 title-text'>
                                        <FaPencilAlt />
                                    </button>
                                    <button className='title-text'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                                <div className='col-lg-4 col-md-4 mb-md-0 mb-4 text-md-left text-center'>
                                    <img
                                        src='/images/profile/edit-img.png'
                                        alt=''
                                    />
                                    <button className='ml-3 title-text'>
                                        <FaPencilAlt />
                                    </button>
                                    <button className='title-text'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                                <div className='col-lg-4 col-md-4 text-md-left text-center'>
                                    <img
                                        src='/images/profile/edit-img.png'
                                        alt=''
                                    />
                                    <button className='ml-3 title-text'>
                                        <FaPencilAlt />
                                    </button>
                                    <button className='title-text'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>

                            <div className='row mb-5'>
                                <div className='col-lg-4 col-md-4 mb-md-0 mb-4 text-md-left text-center'>
                                    <img
                                        src='/images/profile/edit-img.png'
                                        alt=''
                                    />
                                    <button className='ml-3 title-text'>
                                        <FaPencilAlt />
                                    </button>
                                    <button className='title-text'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                                <div className='col-lg-4 col-md-4 mb-md-0 mb-4 text-md-left text-center'>
                                    <img
                                        src='/images/profile/edit-img.png'
                                        alt=''
                                    />
                                    <button className='ml-3 title-text'>
                                        <FaPencilAlt />
                                    </button>
                                    <button className='title-text'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                                <div className='col-lg-4 col-md-4 text-md-left text-center'>
                                    <img
                                        src='/images/profile/edit-img.png'
                                        alt=''
                                    />
                                    <button className='ml-3 title-text'>
                                        <FaPencilAlt />
                                    </button>
                                    <button className='title-text'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between mb-5 pb-5'>
                                <button className='gradient-btn gradient-lime'>
                                    Cencel
                                </button>
                                <button className='gradient-btn gradient-lime'>
                                    Add Product
                                </button>
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
                    </div>
                </div>
            </form>
        </section>
    )
}
export default ProviderAddProduct
