import React from "react"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { FaHome } from "react-icons/fa"
import MainForm from "../../../../components/Provider/Account/Add/MainForm"

const ProviderAddAccount = (props) => {
    return (
        <div className='customer-edit-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add Account Details" },
                ]}
            />

            <MainForm />
        </div>
    )
}
export default ProviderAddAccount
