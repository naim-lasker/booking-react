import React from "react"
import { InputLabel } from "../InputLabel"

export const TextareaWithLabel = ({
    label,
    id,
    infoText,
    ...rest
}) => {
    return (
        <div className='mb-4'>
            <InputLabel label={label} id={id} infoText={infoText} />
            <div>
                <textarea
                    className='form-control input-box pt-2'
                    {...rest}
                />
            </div>
        </div>
    )
}
