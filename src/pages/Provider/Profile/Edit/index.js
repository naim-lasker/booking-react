import React from "react"
import { FaHome } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import MainForm from "../../../../components/Provider/Profile/Edit/MainForm"
import BottomAccordion from "../../../../components/Provider/Profile/Edit/BottomAccordion"

const ProviderEditProfile = () => {

    return (
        <section className='customer-edit-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Edit Profile" },
                ]}
            />

            <MainForm />

            <BottomAccordion />
        </section>
    )
}
export default ProviderEditProfile