import React from "react"
import { InputLabel } from "../InputLabel"

export const CustomInput = ({
    showRightText,
    showLabel,
    className,
    label,
    id,
    inputRef,
    rightText,
    infoText,
    type = "text",
    ...rest
}) => {
    return (
        <div className={`${showLabel ? "mb-4" : ''} ${className}`}>
            {showLabel && (
                <InputLabel label={label} id={id} infoText={infoText} />
            )}

            <div className={showRightText && "input-group"}>
                <input
                    ref={inputRef}
                    type={type}
                    id={id}
                    className='form-control input-box'
                    {...rest}
                />
                {showRightText && (
                    <div className='input-group-append'>
                        <span className='input-group-text input-box-text'>
                            {rightText}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

CustomInput.defaultProps = {
    showLabel: false,
    className: "",
}
