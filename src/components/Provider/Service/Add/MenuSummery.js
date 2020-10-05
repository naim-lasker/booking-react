import React from "react"
import PropTypes from "prop-types"

const MenuSummery = ({
    sellingPrice,
    discountPercentence,
    discountAmount,
    vatCodePercentence,
    vatCodeAmount,
    customerPays,
}) => {
    return (
        <div className='menu-summery-area'>
            <p className='mb-3 ml-2 menu-summery-title'>Summery</p>
            <table className='table table-borderless table-responsive mb-0'>
                <tbody>
                    <tr>
                        <td width='150'>Selling Price</td>
                        <td>${sellingPrice ? sellingPrice : 0}</td>
                    </tr>
                    <tr>
                        <td width='150'>Vat @ {vatCodePercentence ? vatCodePercentence : 0}%</td>
                        <td>${vatCodeAmount}</td>
                    </tr>
                    <tr>
                        <td width='150'>Discount {discountPercentence ? discountPercentence : 0}%</td>
                        <td>${discountAmount}</td>
                    </tr>
                    <tr>
                        <td width='150'>Customer Pays</td>
                        <td>${customerPays}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default MenuSummery
