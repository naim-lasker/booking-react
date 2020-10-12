import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import SingleMenu from "../../../../components/Provider/Menu/List/SingleMenu"
import ChooseMenu from "../../../../components/Provider/Menu/List/ChooseMenu"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import { deleteProviderMenu, getProviderMenuDetails, getProviderMenuList } from "../../../../services/menu"
import MenuDetailsModal from "../../../../components/Provider/Menu/Details"
import { CustomAlert, WarningAlert } from "../../../../components/UI/SweetAlert"

const ProviderMenuList = () => {
    const dispatch = useDispatch()

    const [menu, setMenu] = useState(null)
    const [menus, setMenus] = useState([])
    const [menuObj, setMenuObj] = useState(null)
    const [menuId, setMenuId] = useState(null)
    const [menuName, setMenuName] = useState("")
    const [menuDetails, setMenuDetails] = useState(null)
    const [menuOptions, setMenuOptions] = useState([])
    const [menusLoaded, setMenusLoaded] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [alertDelete, setAlertDelete] = useState(false)
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [detailsLoading, setDetailsLoading] = useState(true)

    useEffect(() => {
        menuList()
    }, [])

    const menuList = () => {
        dispatch(
            getProviderMenuList((res, err) => {
                if (res) {
                    setMenusLoaded(false)
                    const response = res.data.data
                    setMenus(response)

                    const customMenus =
                        response && response.length > 0
                            ? response.map((item) => {
                                  return {
                                      id: item && item.id,
                                      label: item && item.menu_name,
                                      value: item && item.id,
                                  }
                              })
                            : [
                                  {
                                      label: "",
                                      value: "",
                                  },
                              ]

                    setMenuOptions(customMenus)
                } else if (err) {
                    setMenusLoaded(false)
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const onClickEdit = (menu) => {
        setMenuObj(menu)
        setEditModalShow(true)
    }

    const onClickDelete = (menu) => {
        setAlertDelete(true)
        setMenuId(menu ? menu.id : null)
        setMenuName(menu ? menu.menu_name : "")
    }

    const confirmDelete = () => {
        setDeleteLoading(true)
        dispatch(
            deleteProviderMenu(menuId, (res, err) => {
                setDeleteLoading(false)
                if (res && res.data && res.data.status === "success") {
                    menuList()
                    setMessage(res.data.data)
                    setAlert(true)
                    setAlertDelete(false)
                } else if (err) {
                    if (err && err.data) {
                        setAlertDelete(false)
                        notify(
                            "error",
                            (err.data.contents &&
                                err.data.contents.menu_name &&
                                err.data.contents.menu_name[0]) ||
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

    const getMenuDetails = (menuId) => {
        dispatch(
            getProviderMenuDetails(menuId, (res, err) => {
                setDetailsLoading(false)
                if (res && res.data) {
                    setMenuDetails(res.data.data)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const onPressDetails = (menuCategory) => {
        if (!menuCategory) {
            return notify("error", "Please choose a menu")
        }
        setDetailsLoading(true)
        setModalShow(true)
        getMenuDetails(menuCategory.id)
    }


    return (
        <section className='promotion-area mb-5'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Menu List" }]} />

            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <WarningAlert
                loading={deleteLoading}
                show={alertDelete}
                message={`Delete ${menuName ? menuName : ""}?`}
                onConfirm={confirmDelete}
                onCancel={() => setAlertDelete(false)}
            />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <ChooseMenu
                        value={menu}
                        onChange={(menu) => setMenu(menu)}
                        options={menuOptions}
                        onPressDetails={onPressDetails}
                    />

                    <SingleMenu
                        menus={menus}
                        loading={menusLoaded}
                        onClickEdit={onClickEdit}
                        onClickDelete={onClickDelete}
                    />
                </div>
            </div>

            <MenuDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                menuDetails={menuDetails}
                loading={detailsLoading}
            />
        </section>
    )
}
export default ProviderMenuList
