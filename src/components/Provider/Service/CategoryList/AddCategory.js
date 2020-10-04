import React from "react"
import { SubmitButton } from "../../../UI/Button"
import { InputWithLabel } from "../../../UI/InputField"

const AddCategory = ({ onSubmit, value, onChange, loading }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <InputWithLabel
                    required
                    type='text'
                    label='Category Name'
                    id='categoryName'
                    infoText='Category Name info'
                    placeholder='Category Name'
                    value={value}
                    onChange={onChange}
                />
            </div>

            <div className='text-center mb-5'>
                <SubmitButton
                    lime={true}
                    text='Add Category'
                    loading={loading}
                />
            </div>
        </form>
    )
}

export default AddCategory
