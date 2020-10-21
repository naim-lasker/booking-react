import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"
import { addUserCardDetails } from "../../../../services/account"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { SubmitButton } from "../../../../components/UI/Button"
import { CustomAlert } from "../../../../components/UI/SweetAlert"
import { CustomInput } from "../../../UI/InputField"
import DateInput from "../../../Public/Home/Tab/DateInput"
import InfoText from "../../../Public/Home/Tab/InfoText"

const MainForm = (props) => {
    const dispatch = useDispatch()
    const [cardHolderName, handleCardHolder] = useInput("")
    const [expiryDate, setExpiryDate] = useState(new Date())
    const [cvv, handleCvv] = useInput(0)
    const [cardNo,handleCardNo] = useInput("")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const confirmAlert = () => {
        setAlert(false)
        props.history.push("/user-restaurant-list")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        dispatch(
            addUserCardDetails(
                cardHolderName,
                expiryDate,
                cvv,
                cardNo,
                (res, err) => {
                    setLoading(false)

                    if (res && res.data && res.data.status === "error") {
                        return notify("error", res.data.data)
                    } else if (
                        res &&
                        res.data &&
                        res.data.status === "success"
                    ) {
                        setMessage(res.data.data)
                        setAlert(true)
                    }
                }
            )
        )
    }

    return (
        <Fragment>
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <form onSubmit={handleSubmit}>
                <div className='row justify-content-center mb-5'>
                    <div className='col-lg-8'>
                        <div className='form-container'>
                            <CustomInput
                                required
                                showLabel
                                label='Card Holder Name'
                                id='cardHolderName'
                                infoText='Card Holder Name info'
                                placeholder='Gaji asif'
                                value={cardHolderName}
                                onChange={handleCardHolder}
                            />

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='d-flex align-items-center mb-3'>
                                        <InfoText
                                            text='Expiry Date'
                                            tooltipText='Expiry Date Info'
                                            id='expiry Date'
                                        />
                                    </div>
                                    <DateInput
                                        classInput='input-with-icon'
                                        classIconContainer='input-icon-container'
                                        classIcon='input-icon'
                                        placeholderText='29/08/2020'
                                        icon='/images/icons/calendar.png'
                                        selected={expiryDate}
                                        onChange={(expiryDate) => setExpiryDate(expiryDate)}
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <CustomInput
                                        showLabel
                                        required
                                        type='number'
                                        label='CVV'
                                        id='cvv'
                                        infoText='CVV info'
                                        placeholder='CVV'
                                        value={cvv}
                                        onChange={handleCvv}
                                    />
                                </div>
                            </div>

                            <CustomInput
                                required
                                type='number'
                                showLabel
                                label='Card no'
                                id='cardNo'
                                infoText='Card no info'
                                placeholder='**********'
                                value={cardNo}
                                onChange={handleCardNo}
                            />

                            <div className='d-flex justify-content-between'>
                                <a
                                    href='/user-restaurant-list'
                                    className='gradient-btn gradient-lime'
                                >
                                    Cancel
                                </a>
                                <SubmitButton
                                    blue={true}
                                    text='Add Account'
                                    loading={loading}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default withRouter(MainForm)
