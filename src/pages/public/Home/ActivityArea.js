import React from "react"


export default () => {
    return (
        <section className='activities-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                        <div className='single-activity'>
                            <img
                                className='img-fluid w-100'
                                src='/images/activities/restaurant.png'
                                alt=''
                            />
                            <h2 className='text-white text-center activity-title'>
                                Restaurants
                            </h2>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className='single-activity'>
                            <img
                                className='img-fluid w-100'
                                src='/images/activities/tour.png'
                                alt=''
                            />
                            <h2 className='text-white text-center activity-title'>
                                Tour & Excursions
                            </h2>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className='single-activity'>
                            <img
                                className='img-fluid w-100'
                                src='/images/activities/land.png'
                                alt=''
                            />
                            <h2 className='text-white text-center activity-title'>
                                Land Activities
                            </h2>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <div className='single-activity'>
                            <img
                                className='img-fluid w-100'
                                src='/images/activities/water.png'
                                alt=''
                            />
                            <h2 className='text-white text-center activity-title'>
                                Water Activities
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
