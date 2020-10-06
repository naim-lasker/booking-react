import React from "react"
import { FaHome, FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import MenuSummery from "../../../../components/Provider/Product/Add/MenuSummery"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { CustomInput } from "../../../../components/UI/InputField"
import { RadioButton } from "../../../../components/UI/RadioButton"
import { useInput } from "../../../../helpers/common"

const ProviderAddProduct = () => {
    const [productName, handleProductName, setProductName] = useInput("")
    const [overview, handleOverview, setOverview] = useInput("")
    const [
        additionalInformation,
        handleAdditionalInformation,
        setAdditionalInformation,
    ] = useInput("")
    const [sellingPrice, handleSellingPrice, setSellingPrice] = useInput(0)
    const [
        vatCodePercentence,
        handleVatCodePercentence,
        setVatCodePercentence,
    ] = useInput(0)
    const [
        availabilityFrom,
        handleAvailabilityFrom,
        setAvailabilityFrom,
    ] = useInput(new Date())
    const [availabilityTo, handleAvailabilityTo, setAvailabilityTo] = useInput(
        new Date()
    )
    const [
        isDiscountAvailable,
        handleIsDiscountAvailable,
        setIsDiscountAvailable,
    ] = useInput("")
    const [
        discountPercentence,
        handleDiscountPercentence,
        setDiscountPercentence,
    ] = useInput(0)

    let discountAmount = 0
    discountAmount = ((sellingPrice * discountPercentence) / 100).toFixed(2)

    let vatCodeAmount = 0
    vatCodeAmount = ((sellingPrice * vatCodePercentence) / 100).toFixed(2)

    let customerPays = 0
    customerPays = (sellingPrice - (Number(discountAmount) + Number(vatCodeAmount))).toFixed(2)

    return (
        <section className='add-menu-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add Product" },
                ]}
            />

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
                                        id='imageInput'
                                        type='file'
                                        className='d-none'
                                        accept='image/gif, image/jpg, image/jpeg, image/png'
                                        alt=''
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
                            Upload Product images
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
                            id='additionalInformation'
                            infoText='Additional Information info'
                            placeholder='We used pork, chicken, spicy beef on a tomato base pizza bread'
                            value={additionalInformation}
                            onChange={handleAdditionalInformation}
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
                                    id='vatCodePercentence'
                                    infoText='Choose VAT code info'
                                    placeholder='5% - 15%'
                                    value={vatCodePercentence}
                                    onChange={handleVatCodePercentence}
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
                            <button className='question-icon ml-2'>?</button>
                        </div>

                        <div className='d-flex mb-3'>
                            <RadioButton
                                className='mr-5'
                                id='discountAvailable'
                                onChange={handleIsDiscountAvailable}
                                label='Yes'
                                value='yes'
                                name='isDiscountAvailable'
                            />
                            <RadioButton
                                id='discountNotAvailable'
                                onChange={handleIsDiscountAvailable}
                                label='No'
                                value='no'
                                name='isDiscountAvailable'
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
                                    id='discountPercentence'
                                    infoText='Discount Percentence info'
                                    placeholder='Enter Percentence'
                                    value={discountPercentence}
                                    onChange={handleDiscountPercentence}
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
                        discountPercentence={discountPercentence}
                        discountAmount={discountAmount}
                        vatCodePercentence={vatCodePercentence}
                        vatCodeAmount={vatCodeAmount}
                        customerPays={customerPays}
                    />
                </div>
            </div>
        </section>
    )
}
export default ProviderAddProduct
