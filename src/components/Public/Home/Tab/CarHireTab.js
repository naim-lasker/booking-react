import React, { useState } from "react"
import { useRadioButtons } from "../../../../helpers/common"
import DateInput from "./DateInput"
import InfoText from "./InfoText"
import RadioInput from "./RadioInput"
import TimeInput from "./TimeInput"

const CarHireTab = () => {
    const [carType, carTypeInputProps] = useRadioButtons("van")
    const [startDate, setStartDate] = useState(new Date())
    const [startTime, setStartTime] = useState("")

    console.log("carType", carType)
    console.log("startDate", startDate)
    console.log("startTime", startTime)
    return (
        <div className='position-relative'>
            <div className='row mb-3 align-items-end'>
                <div className='col-lg-3 col-md-6'>
                    <RadioInput
                        text='Van'
                        icon='/images/icons/van.png'
                        value='van'
                        {...carTypeInputProps}
                    />
                </div>
                <div className='col-lg-3 col-md-6 mt-md-0 mt-3'>
                    <RadioInput
                        text='Saloon'
                        icon='/images/icons/saloon.png'
                        value='saloon'
                        {...carTypeInputProps}
                    />
                </div>

                <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <InfoText text='Arriving Date' />
                    </div>

                    <DateInput
                        placeholderText='29/08/2020'
                        icon='/images/icons/calendar.png'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <InfoText text='Pick Up Time' />
                    </div>
                    <TimeInput
                        placeholder='15.00'
                        icon='/images/icons/clock.png'
                        onChange={(value) =>
                            setStartTime(value && value.format("h:mm a"))
                        }
                    />
                </div>
            </div>

            <div className='row align-items-end mt-lg-0 mt-5'>
                <div className='col-lg-3 col-md-6'>
                    <RadioInput
                        value='carType'
                        text='People Carrier'
                        icon='/images/icons/carrier.png'
                    />
                </div>

                <div className='col-lg-3 col-md-6 mt-3'>
                    <RadioInput
                        value='carType'
                        text='Luxury'
                        icon='/images/icons/luxury.png'
                    />
                </div>

                <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <InfoText text='Departing Date' />
                    </div>

                    <DateInput
                        placeholder='29/08/2020'
                        icon='/images/icons/calendar.png'
                    />
                </div>

                <div className='col-lg-3 col-md-6 mt-lg-0 mt-2'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <InfoText text='Drop Off Time' />
                    </div>
                    <DateInput
                        placeholder='15.00'
                        icon='/images/icons/clock.png'
                    />
                </div>
            </div>

            <div className='reserve-now'>
                <button className='shadow-btn'>Reserve</button>
            </div>
        </div>
    )
}

export default CarHireTab
