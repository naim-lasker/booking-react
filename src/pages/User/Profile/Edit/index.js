import React from "react"
import { FaHome } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import MainForm from "../../../../components/User/Profile/Edit/MainForm"
import BottomAccordion from "../../../../components/User/Profile/Edit/BottomAccordion"

const UserEditProfile = () => {

    return (
        <section className='customer-edit-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/user-restaurant-list" },
                    { name: "Edit Profile" },
                ]}
            />

            <MainForm />

            <BottomAccordion />
        </section>
    )
}
export default UserEditProfile