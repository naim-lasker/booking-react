import { useState } from "react"

export const useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    const handleChange = (e) => setValue(e.target.value)

    return [value, handleChange, setValue]
}

export const useRadioButtons = (name) => {
    const [value, setValue] = useState(null)

    const handleChange = (e) => setValue(e.target.value)

    const inputProps = {
        name,
        type: "radio",
        onChange: handleChange,
    }

    return [value, inputProps]
}

export const useFileInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        if (event.target && event.target.files && event.target.files.length) {
            let reader = new FileReader()
            reader.onloadend = (e) => {
                setValue(reader.result)
            }
            reader.readAsDataURL(event.target.files[0])
        }
    }

    return [value, handleChange, setValue]
}

export const getServiceSelectItems = (arr) => {
    if (arr && arr.length > 0) {
        return arr.map((item) => {
            return {
                id: item && item.id,
                label: item && item.category_name,
                value:
                    item &&
                    item.category_name.toLowerCase().replace(/\s/g, "_"),
            }
        })
    }
}

export const randomString = (length) => {
    let result = ""
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}
