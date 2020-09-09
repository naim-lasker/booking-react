import React from "react"

const SingleActivity = ({ activity }) => {
    return (
        <div className='col-lg-3 col-md-6'>
            <div className='single-activity'>
                <img
                    className='img-fluid w-100'
                    src={activity && activity.imgUrl}
                    alt=''
                />
                <h2 className='text-white text-center activity-title'>
                    {activity && activity.heading}
                </h2>
            </div>
        </div>
    )
}

export default SingleActivity
