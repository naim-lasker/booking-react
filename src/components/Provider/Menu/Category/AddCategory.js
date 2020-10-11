import React from "react"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"

const AddCategory = ({ onSubmit, value, onChange, loading }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className='mb-3'>
                <CustomInput
                    required
                    showLabel
                    type='text'
                    label='Category Name'
                    id='categoryName'
                    infoText='Menu Category Name info'
                    placeholder='Menu Category Name'
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
