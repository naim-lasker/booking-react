import React from "react"
import PropTypes from "prop-types"
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa"
import { CustomLoader } from "../../../UI/Loader"
import PlaceholderData from "../../../UI/PlaceholderData"

const SingleMenu = ({ menus, loading }) => {
    return !loading ? (
        menus && menus.length > 0 ? (
            menus.map((menu) => (
                <div className='single-promotion mb-3 p-3' key={menu.id}>
                    <div className='row'>
                        {/* <div className='col-lg-3'>
                            <img
                                width='100%'
                                className='img-fluid'
                                src={menu.service_image ? menu.service_image : '/images/no-image.png'}
                                alt=''
                            />
                        </div> */}
                        <div className='col-lg-10'>
                            <div className='single-promotion-content'>
                                <div className='single-promotion-head-content d-flex'>
                                    <div className='single-promotion-head-info d-flex justify-content-between align-items-center w-100'>
                                        <div className='header-content'>
                                            <p className='mb-0'>
                                                {menu.menu_name}
                                                <br />
                                                <strong className='primary-text3'>
                                                    {menu.selling_price ? ('$' + menu.selling_price) : ''}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-2'>
                            <button className='gray-text fs-17'>
                                <FaPencilAlt />
                            </button>
                            <button className='gray-text fs-17'>
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className='border py-2 px-3 rounded'>
                <PlaceholderData text='No menu found!' />
            </div>
        )
    ) : (
        <div className='border py-2 px-3 rounded'>
            <CustomLoader />
        </div>
    )
}


SingleMenu.propTypes = {
    menus: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default SingleMenu
