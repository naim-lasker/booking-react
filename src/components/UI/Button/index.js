import React from "react"
import { Spinner } from "react-bootstrap"

export const SubmitButton = ({onClick, text, loading, lime, blue, customClass}) => {
    return (
        <button onClick={onClick} type='submit' className={`gradient-btn ${customClass} ${lime ? 'gradient-lime' : blue ? 'gradient-blue' : null}`}>
            <span>{text}</span>
            {loading && (
                <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                    className='ml-2 mb-1'
                />
            )}
        </button>
    )
}
