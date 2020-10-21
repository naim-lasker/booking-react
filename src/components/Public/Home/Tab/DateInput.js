import React from "react"
import DatePicker from "react-datepicker"

const DateInput = ({
    icon,
    classInput = "",
    classIconContainer = "",
    classIcon = "",
    ...rest
}) => {
    return (
        <div className='input-group flex-nowrap align-items-center'>
            <DatePicker
                className={`form-control input-box py-2 border-right-0 datepicker ${
                    classInput ? classInput : ""
                }`}
                {...rest}
            />
            <span
                className={`input-group-append ${
                    classIconContainer ? classIconContainer : ""
                }`}
            >
                <div
                    className={`input-group-text bg-transparent ${
                        classIcon ? classIcon : ""
                    }`}
                >
                    <img src={icon} alt='' />
                </div>
            </span>
        </div>
    )
}

export default DateInput
