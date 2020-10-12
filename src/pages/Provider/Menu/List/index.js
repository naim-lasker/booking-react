import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import SingleMenu from "../../../../components/Provider/Menu/List/SingleMenu"
import ChooseMenu from "../../../../components/Provider/Menu/List/ChooseMenu"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import { getProviderMenuList } from "../../../../services/menu"
import ServiceDetailsModal from "../../../../components/Provider/Menu/Details"

const ProviderMenuList = () => {
    const dispatch = useDispatch()

    const [menu, setMenu] = useState(null)
    const [menus, setMenus] = useState([])
    const [menuOptions, setMenuOptions] = useState([])
    const [menusLoaded, setMenusLoaded] = useState(true)
    const [modalShow, setModalShow] = useState(false)

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

    return (
        <section className='promotion-area mb-5'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Menu List" }]} />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <ChooseMenu
                        value={menu}
                        onChange={(menu) => setMenu(menu)}
                        options={menuOptions}
                        onPressDetails={() => setModalShow(true)}
                    />

                    <SingleMenu
                        menus={menus}
                        loading={menusLoaded}
                    />
                </div>
            </div>

            <ServiceDetailsModal show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}
export default ProviderMenuList
