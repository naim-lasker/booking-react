import React from "react"
import PropTypes from "prop-types"
import { CustomSelect } from "../../../UI/Select"

const ChooseMenu = ({
    value,
    onChange,
    options,
    selectRef,
    hasError,
    onPressDetails,
}) => (
    <div className='mb-5'>
        <div className='mb-4'>
            <div className='d-flex align-items-center mb-3'>
                <label className='label-name'>Choose your menu</label>
                <button className='question-icon ml-2'>?</button>
            </div>
            <div>
                <CustomSelect
                    placeholder='Select a menu'
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
            <a href='provider-add-menu' className='gradient-btn gradient-lime'>
                Add Menu
            </a>
        </div>
    </div>
)

ChooseMenu.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    onPressDetails: PropTypes.func,
}

export default ChooseMenu
