import React from "react"
import moment from "moment"
import TimePicker from "rc-time-picker"

const now = moment().hour(0).minute(0)

const TimeInput = ({ icon, ...rest }) => {
    return (
        <div className='input-group flex-nowrap align-items-center'>
            <TimePicker
                showSecond={false}
                defaultValue={now}
                className='form-control input-box py-2 border-right-0 datepicker'
                format='h:mm a'
                use12Hours
                inputReadOnly
                {...rest}
            />
            <span className='input-group-append'>
                <div className='input-group-text bg-transparent'>
                    <img src={icon} alt='' />
                </div>
            </span>
        </div>
    )
}

export default TimeInput
