import React from "react"

export const RadioButton = ({
    className,
    id,
    onChange,
    value,
    checked,
    label,
    ...rest
}) => {
    return (
        <div className={`${className ? className : ""} `}>
            <input
                id={id}
                onChange={onChange}
                value={value}
                type='radio'
                {...rest}
            />
            <label className='ml-1' htmlFor={id}>
                {label}
            </label>
        </div>
    )
}
