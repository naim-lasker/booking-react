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

    const [service, setService] = useState(null)
    const [menus, setMenus] = useState([])
    const [serviceOptions, setServiceOptions] = useState([])
    const [servicesLoaded, setServicesLoaded] = useState(true)
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        serviceList()
    }, [])

    const serviceList = () => {
        dispatch(
            getProviderMenuList((res, err) => {
                if (res) {
                    setServicesLoaded(false)
                    const response = res.data.data
                    setMenus(response)

                    const customServices =
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

                    setServiceOptions(customServices)
                } else if (err) {
                    setServicesLoaded(false)
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
                        value={service}
                        onChange={(service) => setService(service)}
                        options={serviceOptions}
                        onPressDetails={() => setModalShow(true)}
                    />

                    <SingleMenu
                        menus={menus}
                        loading={servicesLoaded}
                    />
                </div>
            </div>

            <ServiceDetailsModal show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}
export default ProviderMenuList
