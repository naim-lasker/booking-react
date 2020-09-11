import React from "react"
import SingleActivity from "../../../components/Public/Home/SingleActivity"

export default () => {
    const activityData = [
        {
            heading: "Restaurants",
            imgUrl: "/images/activities/restaurant.png",
        },
        {
            heading: "Tour & Excursions",
            imgUrl: "/images/activities/tour.png",
        },
        {
            heading: "Land Activities",
            imgUrl: "/images/activities/land.png",
        },
        {
            heading: "Water Activities",
            imgUrl: "/images/activities/water.png",
        },
    ]

    return (
        <section className='activities-area'>
            <div className='container'>
                <div className='row'>
                    {activityData.length > 0 &&
                        activityData.map((activity, index) => (
                            <SingleActivity key={index} activity={activity} />
                        ))}
                </div>
            </div>
        </section>
    )
}
