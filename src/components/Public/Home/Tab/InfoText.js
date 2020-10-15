import React, { Fragment } from "react"
import { CustomTooltip } from "../../../UI/Tooltip"

const InfoText = ({ id, text, tooltipText }) => {
    return (
        <Fragment>
            <p className='mb-0 tab-top-text'>{text}</p>
            <button className='question-icon ml-3' data-tip data-for={id}>
                ?
            </button>
            <CustomTooltip id={id} text={tooltipText} />
        </Fragment>
    )
}

export default InfoText
