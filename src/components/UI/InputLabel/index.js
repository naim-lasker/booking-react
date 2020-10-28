import React from "react"
import { CustomTooltip } from "../Tooltip"

export const InputLabel = ({ label, id, infoText }) => {
    return (
        <div className='d-flex align-items-center mb-sm-3 mb-2'>
            <label className='label-name' htmlFor={id}>
                {label}
            </label>
            <button className='question-icon ml-2' data-tip data-for={id}>
                ?
            </button>
            <CustomTooltip id={id} text={infoText} />
        </div>
    )
}
