import { useState } from "react"

export let useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    let handleChange = (e) => setValue(e.target.value)

    return [value, handleChange, setValue]
}
