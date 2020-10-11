import React from "react"
import { FaHome } from "react-icons/fa"
import MainForm from "../../../../components/Provider/Service/Add/MainForm"
import Breadcrumb from "../../../../components/UI/Breadcrumb"

const ProviderAddService = () => {
    
    return (
        <section className='add-menu-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add Service" },
                ]}
            />

            <div className='row justify-content-center'>
                <MainForm />
            </div>
        </section>
    )
}
export default ProviderAddService
