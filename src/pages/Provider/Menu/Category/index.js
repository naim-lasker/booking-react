import React, { useEffect, useState } from "react"
import { FaHome, FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import { useDispatch } from "react-redux"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { CustomAlert, WarningAlert } from "../../../../components/UI/SweetAlert"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { CustomTooltip } from "../../../../components/UI/Tooltip"
import PlaceholderData from "../../../../components/UI/PlaceholderData"
import {
    addMenuCategory,
    getMenuCategoryList,
    updateMenuCategory,
    deleteMenuCategory,
} from "../../../../services/menu"
import { CustomLoader } from "../../../../components/UI/Loader"
import EditCategory from "../../../../components/Provider/Menu/Category/EditCategory"
import AddCategory from "../../../../components/Provider/Menu/Category/AddCategory"

const ProviderMenuCategory = () => {
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
    const [deleteLoading, setDeleteLoading] = useState(false)
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
            addMenuCategory(categoryName, (res, err) => {
                setAddLoading(false)
                if (res && res.data && res.data.status === "success") {
                    categoryList()
                    setMessage(res.data.data)
                    setAlert(true)
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
            getMenuCategoryList((res, err) => {
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
            updateMenuCategory(categoryID, editCategoryName, (res, err) => {
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

    const deleteCategoryItem = (id, catName) => {
        setCategoryID(id)
        setDeleteCategoryName(catName)
        setAlertDelete(true)
    }

    const confirmDelete = () => {
        setDeleteLoading(true)
        dispatch(
            deleteMenuCategory(categoryID, (res, err) => {
                setDeleteLoading(false)
                if (res && res.data && res.data.status === "success") {
                    categoryList()
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
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <WarningAlert
                loading={deleteLoading}
                show={alertDelete}
                message={`Delete ${deleteCategoryName}?`}
                onConfirm={confirmDelete}
                onCancel={() => setAlertDelete(false)}
            />
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add menu Category" },
                ]}
            />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <AddCategory
                        onSubmit={addCategory}
                        value={categoryName}
                        onChange={handleCategoryName}
                        loading={addLoading}
                    />
                </div>

                <div className='mb-5 col-lg-8'>
                    <table className='table table-borderless table-responsive table-striped'>
                        <thead>
                            <tr>
                                <th width='80%' className='title-text fs-17'>
                                    Menu Category Name
                                </th>

                                <th
                                    width='20%'
                                    className='text-right title-text fs-17'
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {!categoryLoaded ? (
                                categories && categories.length > 0 ? (
                                    categories.map((category) => (
                                        <tr key={category.id}>
                                            <td>
                                                <span className='fs-17'>
                                                    {category.category_name}
                                                </span>
                                            </td>

                                            <td className='text-right'>
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
                                                        deleteCategoryItem(
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
                                        <td colSpan='2'>
                                            <PlaceholderData text='No service category found!' />
                                        </td>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <td colSpan='2'>
                                        <CustomLoader />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <EditCategory
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={editCategory}
                value={editCategoryName}
                onChange={handleEditCategoryName}
                loading={editLoading}
            />
        </section>
    )
}
export default ProviderMenuCategory
