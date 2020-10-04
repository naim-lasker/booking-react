import React, { useEffect, useState } from "react"
import { Modal, Spinner } from "react-bootstrap"
import { FaHome, FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { SubmitButton } from "../../../../components/UI/Button"
import { InputWithLabel } from "../../../../components/UI/InputField"
import { CustomAlert, WarningAlert } from "../../../../components/UI/SweetAlert"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { CustomTooltip } from "../../../../components/UI/Tooltip"
import {
    addServiceCategoy,
    getServiceCategoryList,
    updateServiceCategoy,
    deleteServiceCategoy,
} from "../../../../services/category"

const ProviderServiceCategoryList = () => {
    const dispatch = useDispatch()
    const [categoryName, handleCategoryName, setCategoryName] = useInput("")
    const [
        editCategoryName,
        handleEditCategoryName,
        setEditCategoryName,
    ] = useInput("")
    const [deleteCategoryName, setDeleteCategoryName] = useState("")
    const [categoryID, setCategoryID] = useState("")
    const [categories, setCategories] = useState([])
    const [addLoading, setAddLoading] = useState(false)
    const [editLoading, setEditLoading] = useState(false)
    const [categoryLoaded, setCategoryLoaded] = useState(true)
    const [alert, setAlert] = useState(false)
    const [alertDelete, setAlertDelete] = useState(false)
    const [message, setMessage] = useState("")
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        categoryList()
    }, [])

    const addCategory = (event) => {
        event.preventDefault()
        setAddLoading(true)

        dispatch(
            addServiceCategoy(categoryName, (res, err) => {
                setAddLoading(false)
                if (res && res.data && res.data.status === "success") {
                    setMessage(res.data.data)
                    setAlert(true)
                    categoryList()
                } else if (err) {
                    if (err && err.data) {
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
        setCategoryName("")
        setAlert(false)
    }

    const categoryList = () => {
        dispatch(
            getServiceCategoryList((res, err) => {
                if (res) {
                    setCategoryLoaded(false)
                    const response = res.data
                    setCategories(response)
                } else if (err) {
                    setCategoryLoaded(false)
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const editCategoryItem = (id, catName) => {
        setEditCategoryName(catName)
        setCategoryID(id)
        setModalShow(true)
    }

    const editCategory = (event) => {
        event.preventDefault()

        setEditLoading(true)

        dispatch(
            updateServiceCategoy(categoryID, editCategoryName, (res, err) => {
                setEditLoading(false)
                if (res && res.data && res.data.status === "success") {
                    categoryList()
                    setMessage(res.data.data)
                    setAlert(true)
                    setModalShow(false)
                } else if (err) {
                    if (err && err.data) {
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

    const deleteCategory = (id, catName) => {
        setCategoryID(id)
        setDeleteCategoryName(catName)
        setAlertDelete(true)
    }

    const confirmDeleteAlert = () => {
        dispatch(
            deleteServiceCategoy(categoryID, (res, err) => {
                console.log('delete res', res);
                console.log('delete err', err);

                setEditLoading(false)
                if (res && res.data && res.data.status === "success") {
                    categoryList()
                    setEditLoading(false)
                    setMessage(res.data.data)
                    setAlert(true)
                    setAlertDelete(false)
                } else if (err) {
                    if (err && err.data) {
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

    return (
        <section className='checkout-area'>
            <ToastContainer />

            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <WarningAlert
                show={alertDelete}
                message={`Delete ${deleteCategoryName}?`}
                onConfirm={confirmDeleteAlert}
                onCancel={() => setAlertDelete(false)}
            />
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add New Service Category" },
                ]}
            />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <form onSubmit={addCategory}>
                        <div className='mb-3'>
                            <InputWithLabel
                                required
                                type='text'
                                label='Category Name'
                                id='categoryName'
                                infoText='Category Name info'
                                placeholder='Category Name'
                                value={categoryName}
                                onChange={handleCategoryName}
                            />
                        </div>

                        <div className='text-center mb-5'>
                            <SubmitButton
                                lime={true}
                                text='Add Category'
                                loading={addLoading}
                            />
                        </div>
                    </form>
                </div>

                <div className='mb-5 col-lg-8'>
                    <table className='table table-borderless table-responsive table-striped'>
                        <thead>
                            <tr>
                                <th className='title-text fs-17'>
                                    Category Name
                                </th>

                                <th colSpan='2' className='text-right'>
                                    <button className='title-text fs-17'>
                                        Actions
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {!categoryLoaded ? (
                                categories && categories.length > 0 ? (
                                    categories.map((category) => (
                                        <tr key={category.id}>
                                            <td width='80%'>
                                                <span className='fs-17'>
                                                    {category.category_name}
                                                </span>
                                            </td>

                                            <td
                                                width='20%'
                                                className='text-right'
                                            >
                                                <button
                                                    data-tip
                                                    data-for='editButton'
                                                    className='gray-text fs-17'
                                                    onClick={() =>
                                                        editCategoryItem(
                                                            category.id,
                                                            category.category_name
                                                        )
                                                    }
                                                >
                                                    <FaPencilAlt />
                                                </button>
                                                <CustomTooltip
                                                    id='editButton'
                                                    text='Edit'
                                                />

                                                <button
                                                    onClick={() =>
                                                        deleteCategory(
                                                            category.id,
                                                            category.category_name
                                                        )
                                                    }
                                                    data-tip
                                                    data-for='deleteButton'
                                                    className='gray-text fs-17'
                                                >
                                                    <FaTrashAlt />
                                                </button>
                                                <CustomTooltip
                                                    id='deleteButton'
                                                    text='Delete'
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td>"No Category found"</td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td>
                                        <Spinner
                                            as='span'
                                            animation='border'
                                            size='sm'
                                            role='status'
                                            aria-hidden='true'
                                            className='ml-2 mb-1'
                                        />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size='md'
                aria-labelledby='edit-category-modal'
                centered
            >
                <form onSubmit={editCategory}>
                    <Modal.Header closeButton>
                        <Modal.Title id='edit-category-modal'>
                            Edit Category
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='mb-3'>
                            <InputWithLabel
                                required
                                type='text'
                                label='Category Name'
                                id='categoryName'
                                infoText='Category Name info'
                                placeholder='Category Name'
                                value={editCategoryName}
                                onChange={handleEditCategoryName}
                            />
                        </div>

                        <div className='text-center mb-5'>
                            <SubmitButton
                                lime={true}
                                text='Edit Category'
                                loading={editLoading}
                            />
                        </div>
                    </Modal.Body>
                </form>
            </Modal>
        </section>
    )
}
export default ProviderServiceCategoryList
