import React from "react"

const Pagination = () => {
    return (
        <div className='booking-pagination mt-4'>
            <ul className='pagination justify-content-center'>
                <li className='page-item mr-2 '>
                    <a
                        className='page-link text-white border-0 active-page  '
                    >
                        1
                    </a>
                </li>
                <li className='page-item mr-2 '>
                    <a className='page-link border-0 single-page'>
                        2
                    </a>
                </li>
                <li className='page-item mr-2 '>
                    <a className='page-link border-0 single-page'>
                        3
                    </a>
                </li>
                <li className='page-item mr-2 '>
                    <a className='page-link border-0 single-page'>
                        4
                    </a>
                </li>
                <span className='mt-2'>.......</span>
                <li className='page-item '>
                    <a className='page-link border-0 single-page'>
                        20
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
