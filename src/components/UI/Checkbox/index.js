import React from "react"
import PropTypes from "prop-types"

const Checkbox = ({ text, textRight, id, checked, onChange, ...rest }) => {
    return (
        <div className='d-flex align-items-center'>
            {!textRight && (
                <label
                    htmlFor='checkBoxId'
                    className='label-name cursor-pointer mr-2'
                >
                    {text}
                </label>
            )}
            <input
                type='checkbox'
                className='cursor-pointer'
                id='checkBoxId'
                checked={checked}
                onChange={onChange}
                {...rest}
            />
            {textRight && (
                <label
                    htmlFor='checkBoxId'
                    className='label-name cursor-pointer ml-2'
                >
                    {text}
                </label>
            )}
        </div>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    textRight: PropTypes.bool,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Checkbox
