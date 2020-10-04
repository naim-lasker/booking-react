import React from "react"
import { InputLabel } from "../InputLabel"

export const InputWithLabel = ({
    label,
    inputRef,
    id,
    infoText,
    type = "text",
    ...rest
}) => {
    return (
        <div className='mb-4'>
            <InputLabel label={label} id={id} infoText={infoText} />
            <div>
                <input
                    ref={inputRef}
                    id={id}
                    type={type}
                    className='form-control input-box'
                    {...rest}
                />
            </div>
        </div>
    )
}
