import React, { Fragment } from "react"
import { InputLabel } from "../InputLabel"

export const InputWithLabel = ({
    label,
    id,
    infoText,
    type = "text",
    ...rest
}) => {
    return (
        <Fragment>
            <InputLabel label={label} id={id} infoText={infoText} />
            <div>
                <input
                    id={id}
                    type={type}
                    className='form-control input-box'
                    {...rest}
                />
            </div>
        </Fragment>
    )
}
