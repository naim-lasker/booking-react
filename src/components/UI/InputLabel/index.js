import React from "react"
import { CustomTooltip } from "../Tooltip"

export const InputLabel = ({ label, id, infoText }) => {
    return (
        <div className='d-flex align-items-center mb-3'>
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
