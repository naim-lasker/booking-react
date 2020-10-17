import React, { createRef, useEffect, useState } from "react"
import { CustomInput } from "../../../UI/InputField"
import Checkbox from "../../../UI/Checkbox"
import { RadioButton } from "../../../UI/RadioButton"
import { SubmitButton } from "../../../UI/Button"
import { useDispatch } from "react-redux"
import { useFileInput, useInput } from "../../../../helpers/common"
import { editProviderService } from "../../../../services/service"
import { ConfirmAlert, CustomAlert } from "../../../UI/SweetAlert"
import { notify } from "../../../../helpers/ui"
import { Modal } from "react-bootstrap"
import { InputLabel } from "../../../UI/InputLabel"
import { CustomSelect } from "../../../UI/Select"

const EditServiceModal = ({ show, onHide, service }) => {
    console.log('service', service)
    const dispatch = useDispatch()
    const [category, setCategory] = useState([])
    const [categories, setCategories] = useState([])
    const [serviceId, setServiceId] = useState(0)
    const [serviceImage, handleServiceImage, setServiceImage] = useFileInput("")
    const [serviceName, handleServiceName, setServiceName] = useInput("")
    const [overview, handleOverview, setOverview] = useInput("")
    const [additionalInfo, handleAdditionalInfo, setAdditionalInfo] = useInput(
        ""
    )
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

    const serviceNameRef = createRef()

    const setServiceInfo = () => {
        setServiceId(service && service.id ? service.id : 0)
        setServiceImage(
            service && service.service_image ? service.service_image : ""
        )
        setServiceName(
            service && service.service_name ? service.service_name : ""
        )
        setOverview(service && service.overview ? service.overview : "")
        setAdditionalInfo(
            service && service.additional_info ? service.additional_info : ""
        )
        setSellingPrice(
            service && service.selling_price ? service.selling_price : 0
        )
        setVatCodePercentence(service && service.vat ? service.vat : 0)
        setAvailabilityStatus(
            service && service.availability_status == 1 ? true : false
        )
        setAvailabilityFrom(
            service && service.availability_from
                ? service.availability_from
                : ""
        )
        setAvailabilityTo(
            service && service.availability_to ? service.availability_to : ""
        )
        setDiscountStatus(
            service && service.discount_status == 1 ? true : false
        )
        setDiscountPercentence(
            service && service.discount_percentage
                ? service.discount_percentage
                : ""
        )
    }

    useEffect(() => {
        setServiceInfo()
    }, [service])

    let serviceObj = {
        serviceImage,
        serviceName,
        overview,
        additionalInfo,
        sellingPrice,
        vat,
        discountStatus,
        discountAmount,
        discountPercentage,
        availabilityStatus,
        availabilityFrom,
        availabilityTo,
    }

    const checkSubmit = () => {
        if (!serviceName) {
            serviceNameRef.current.focus()
            notify("error", "Please enter service name")
        } else {
            setConfirmAlert(true)
        }
    }

    const handleSubmit = () => {
        setLoading(true)

        dispatch(
            editProviderService(serviceObj, serviceId, (res, err) => {
                setLoading(false)
                setConfirmAlert(false)
                window.location.href = "/provider-service-list"

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

    const confirmAddService = () => {
        setAlert(false)
        onHide()
    }

    return (
        <Modal
            className='add-menu-area'
            show={show}
            onHide={onHide}
            size='lg'
            aria-labelledby='edit-service'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='edit-service'>Update Service</Modal.Title>
            </Modal.Header>
            <Modal.Body className='mx-3'>
                <ConfirmAlert
                    loadingYes={loading}
                    show={confirmAlert}
                    message='Update service?'
                    onConfirm={handleSubmit}
                    onCancel={() => {
                        setConfirmAlert(false)
                        onHide()
                    }}
                />

                <CustomAlert
                    show={alert}
                    message={message}
                    onConfirm={confirmAddService}
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
                                    onChange={handleServiceImage}
                                />
                                <img
                                    className='profile-pic-inner-img'
                                    src={
                                        serviceImage
                                            ? serviceImage
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
                    <h3 className='upload-img-header'>Upload service image</h3>
                </div>

                <div className='mb-3'>
                    <div className='mb-4'>
                        <InputLabel
                            label='Service Category'
                            id='serviceCategory'
                            infoText='Service Catgory info'
                        />
                        <CustomSelect
                            placeholder='Choose service category'
                            value={category}
                            onChange={(category) => setCategory(category)}
                            options={categories}
                        />
                    </div>
                    <CustomInput
                        inputRef={serviceNameRef}
                        showLabel
                        type='text'
                        label='Service Name'
                        id='serviceName'
                        infoText='Service Name info'
                        placeholder='All meat pizza'
                        value={serviceName}
                        onChange={handleServiceName}
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

                    <div className='d-flex justify-content-center pb-3'>
                        <button
                            onClick={onHide}
                            className='gradient-btn gradient-lime mr-3'
                        >
                            Cancel
                        </button>
                        <SubmitButton
                            lime={true}
                            text='Update Service'
                            onClick={checkSubmit}
                        />
                    </div>
                </div>

                {/* <MenuSummery
                    sellingPrice={sellingPrice}
                    discountPercentage={discountPercentage}
                    discountAmount={discountAmount}
                    vat={vat}
                    vatCodeAmount={vatCodeAmount}
                    customerPays={customerPays}
                /> */}
            </Modal.Body>
        </Modal>
    )
}

export default EditServiceModal
