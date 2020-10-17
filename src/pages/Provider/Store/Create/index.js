import React from "react"
import { FaHome } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import MainForm from "../../../../components/Provider/Store/Create/MainForm"

const ProviderCreateStore = () => {

    return (
        <section className='customer-edit-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Create Store" },
                ]}
            />

            <MainForm />

        </section>
    )
}
export default ProviderCreateStore
