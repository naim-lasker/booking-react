import React from "react"

const StoreOrder = () => {
    return (
        <div className='order-table'>
            <div className='row justify-content-center'>
                <h2 className='table-header'>Your Order</h2>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='shadow-table'>
                        <table className='table table-borderless table-responsive'>
                            <tbody>
                                <tr className='table-row'>
                                    <td width='15%'>
                                        <div className='img-container text-center'>
                                            <img
                                                className=''
                                                src='/images/checkout/hair-treatment.png'
                                                alt=''
                                            />
                                        </div>
                                    </td>
                                    <td width='18%'>
                                        <div className='text-center'>
                                            <span className='table-text'>
                                                Hair treatment
                                            </span>
                                            <span className='question-icon ml-3'>
                                                ?
                                            </span>
                                        </div>
                                    </td>
                                    <td width='18%'>
                                        <div className='text-center'>
                                            <div className='text-center table-price-container'>
                                                <span className='table-gray-text'>
                                                    Price:
                                                </span>
                                                <span className='table-text'>
                                                    $50
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td width='10%'>
                                        <div className='d-flex align-items-center'>
                                            <div className='table-gray-text mr-1'>
                                                Qtd:
                                            </div>
                                            <div className='table-quantity-container d-flex'>
                                                <button className='table-quantity-btn'>
                                                    -
                                                </button>
                                                <span className='table-quantity-value'>
                                                    2
                                                </span>
                                                <button className='table-quantity-btn'>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td width='10%'>
                                        <div className='text-center table-total-container'>
                                            <span className='d-block table-text'>
                                                Total
                                            </span>
                                            <span className='d-block table-text'>
                                                $100
                                            </span>
                                        </div>
                                    </td>
                                    <td width='10%'>
                                        <button className='table-gray-text'>
                                            <i className='fas fa-trash-alt'></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='row justify-content-end'>
                <div className='col-lg-5'>
                    <div className='d-flex align-items-center justify-content-lg-end justify-content-center bottom-content'>
                        <span className='total-value'>Subtotal $200</span>
                        <button className='gradient-btn gradient-lime text-uppercase'>
                            Countine
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreOrder
