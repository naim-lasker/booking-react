import React from "react"
import PropTypes from "prop-types"
import { CustomSelect } from "../../../UI/Select"

const ChooseProduct = ({
    value,
    onChange,
    options,
    selectRef,
    onPressDetails,
    hasError,
}) => (
    <div className='mb-5'>
        <div className='mb-4'>
            <div className='d-flex align-items-center mb-3'>
                <label className='label-name'>Choose your Product</label>
                <button className='question-icon ml-2'>?</button>
            </div>
            <div>
                <CustomSelect
                    placeholder='Select a product'
                    hasError={hasError}
                    value={value}
                    onChange={onChange}
                    options={options}
                    selectRef={selectRef}
                />
            </div>
        </div>

        <div className='d-flex justify-content-between'>
            <button
                className='gradient-btn gradient-lime'
                onClick={() => onPressDetails(value)}
            >
                Show Details
            </button>
            <a
                href='provider-add-product'
                className='gradient-btn gradient-lime'
            >
                Add Product
            </a>
        </div>
    </div>
)

ChooseProduct.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    onPressDetails: PropTypes.func,
}

export default ChooseProduct
