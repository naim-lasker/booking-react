import React from "react"
import { FaHome} from "react-icons/fa"
import MainForm from "../../../../components/Provider/Product/Add/MainForm"
import Breadcrumb from "../../../../components/UI/Breadcrumb"

const ProviderAddProduct = () => {

    return (
        <section className='add-menu-area'>
            <Breadcrumb
                icon={<FaHome />}
                names={[
                    { name: "Dashboard", link: "/provider-booking" },
                    { name: "Add Product" },
                ]}
            />

            

            <div className='row justify-content-center'>
                <MainForm />
            </div>
        </section>
    )
}
export default ProviderAddProduct
