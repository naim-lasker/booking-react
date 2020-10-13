import React from "react"
import Select from "react-select"

export const CustomSelect = ({
    selectRef,
    hasError,
    value,
    className,
    ...rest
}) => {
    return (
        <Select
            ref={selectRef}
            className={`${
                hasError && !value ? "border-red" : ""
            } form-control input-box ${className}`}
            value={value}
            {...rest}
        />
    )
}

CustomSelect.defaultProps = {
    hasError: false,
    className: "",
}
