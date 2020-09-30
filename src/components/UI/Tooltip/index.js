import React from "react"
import ReactTooltip from "react-tooltip"

export const CustomTooltip = ({ text, id }) => {
    return (
        <ReactTooltip id={id} type='info' effect='solid'>
            <span>{text}</span>
        </ReactTooltip>
    )
}
