import React, { Fragment } from "react"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { FaHome } from "react-icons/fa"
import MainForm from "../../../../components/User/Account/Add/MainForm"

const UserAddAccount = () => {

    return (
        <Fragment>

            <section className='customer-edit-area'>
                <Breadcrumb
                    icon={<FaHome />}
                    names={[
                        { name: "Dashboard", link: "/" },
                        { name: "Add Account Details" },
                    ]}
                />
                
                <MainForm />
            </section>
        </Fragment>
    )
}
export default UserAddAccount
