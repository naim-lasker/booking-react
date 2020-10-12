import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"

const ChooseMenu = ({ value, onChange, options, onPressDetails }) => (
    <div className='mb-5'>
        <div className='mb-4'>
            <div className='d-flex align-items-center mb-3'>
                <label className='label-name'>Choose your menu</label>
                <button className='question-icon ml-2'>?</button>
            </div>
            <div>
                <Select
                    placeholder='Select a menu'
                    className='form-control input-box'
                    value={value}
                    onChange={onChange}
                    options={options}
                />
            </div>
        </div>

        <div className='d-flex justify-content-between'>
            <button className='gradient-btn gradient-lime' onClick={onPressDetails}>Show Details</button>
            <a
                href='provider-add-menu'
                className='gradient-btn gradient-lime'
            >
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
