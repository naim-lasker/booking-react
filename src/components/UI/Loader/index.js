import React from "react"
import { Spinner } from "react-bootstrap"

export const CustomLoader = () => {
    return (
        <div className='text-center py-5'>
            <Spinner
                as='span'
                animation='border'
                size='sm'
                variant='primary'
                role='status'
                aria-hidden='true'
                className='ml-2 mb-1'
            />
        </div>
    )
}
