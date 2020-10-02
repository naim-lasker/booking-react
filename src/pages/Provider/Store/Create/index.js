import React from "react"
import { FaHome } from "react-icons/fa"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import MainForm from "../../../../components/Provider/Store/Create/MainForm"
import BottomAccordion from "../../../../components/Provider/Store/Create/BottomAccordion"

const ProviderCreateStore = () => {

    return (
        <section className='customer-edit-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/" },
                    { name: "Create Store" },
                ]}
            />

            <MainForm />

            <BottomAccordion />
        </section>
    )
}
export default ProviderCreateStore
