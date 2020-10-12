import React, { useEffect, useState } from "react"
import { FaHome } from "react-icons/fa"
import { useDispatch } from "react-redux"
import SingleService from "../../../../components/Provider/Service/List/SingleService"
import ChooseService from "../../../../components/Provider/Service/List/ChooseService"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { notify } from "../../../../helpers/ui"
import {
    getProviderServiceList,
    deleteProviderService,
} from "../../../../services/service"
import ServiceDetailsModal from "../../../../components/Provider/Service/Details"
import { CustomAlert, WarningAlert } from "../../../../components/UI/SweetAlert"

const ProviderServiceList = () => {
    const dispatch = useDispatch()

    const [service, setService] = useState(null)
    const [services, setServices] = useState([])
    const [serviceObj, setServiceObj] = useState(null)
    const [serviceId, setServicetId] = useState(null)
    const [serviceName, setServiceName] = useState("")
    const [serviceOptions, setServiceOptions] = useState([])
    const [servicesLoaded, setServicesLoaded] = useState(true)
    const [modalShow, setModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [alertDelete, setAlertDelete] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        serviceList()
    }, [])

    const serviceList = () => {
        dispatch(
            getProviderServiceList((res, err) => {
                if (res) {
                    setServicesLoaded(false)
                    const response = res.data.data
                    setServices(response)

                    const customServices =
                        response && response.length > 0
                            ? response.map((item) => {
                                  return {
                                      label: item && item.service_name,
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

    const onClickEdit = (service) => {
        setServiceObj(service)
        setEditModalShow(true)
    }

    const onClickDelete = (service) => {
        setAlertDelete(true)
        setServicetId(service ? service.id : null)
        setServiceName(service ? service.service_name : "")
    }

    const confirmDelete = () => {
        setDeleteLoading(true)
        dispatch(
            deleteProviderService(serviceId, (res, err) => {
                setDeleteLoading(false)
                if (res && res.data && res.data.status === "success") {
                    serviceList()
                    setMessage(res.data.data)
                    setAlert(true)
                    setAlertDelete(false)
                } else if (err) {
                    if (err && err.data) {
                        setAlertDelete(false)
                        notify(
                            "error",
                            (err.data.contents &&
                                err.data.contents.service_name &&
                                err.data.contents.service_name[0]) ||
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

    return (
        <section className='promotion-area mb-5'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Service List" }]} />

            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <WarningAlert
                loading={deleteLoading}
                show={alertDelete}
                message={`Delete ${serviceName ? serviceName : ""}?`}
                onConfirm={confirmDelete}
                onCancel={() => setAlertDelete(false)}
            />

            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <ChooseService
                        value={service}
                        onChange={(service) => setService(service)}
                        options={serviceOptions}
                        onPressDetails={() => setModalShow(true)}
                    />

                    <SingleService
                        services={services}
                        loading={servicesLoaded}
                        onClickEdit={onClickEdit}
                        onClickDelete={onClickDelete}
                    />
                </div>
            </div>

            <ServiceDetailsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>
    )
}
export default ProviderServiceList
