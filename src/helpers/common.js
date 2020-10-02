import { useState } from "react"

export let useInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue)
    let handleChange = (e) => setValue(e.target.value)

    return [value, handleChange, setValue]
}

export let useFileInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    let handleChange = event => {
      if(event.target && event.target.files && event.target.files.length) {
        let raw = event.target.files[0]
        let reader = new FileReader();
        reader.onloadend = (e) => {
          setValue({
            file : raw,
            image: reader.result
          });
        }
        reader.readAsDataURL(event.target.files[0])
      }
    }
    
    return [
      value,
      handleChange,
      setValue
    ]
  }
