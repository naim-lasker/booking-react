import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"
import { addProviderAccountDetails } from "../../../../services/account"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { SubmitButton } from "../../../../components/UI/Button"
import { CustomAlert } from "../../../../components/UI/SweetAlert"
import { InputWithLabel } from "../../../UI/InputField"

const MainForm = (props) => {
    const dispatch = useDispatch()
    const [bankAccountName, setBankAccountName] = useInput("")
    const [iban, setIban] = useInput("")
    const [bankName, setBankName] = useInput("")
    const [swiftBic, setSwiftBic] = useInput("")
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const confirmAlert = () => {
        setAlert(false)
        props.history.push("/provider-service-category-list")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        dispatch(
            addProviderAccountDetails(
                bankAccountName,
                iban,
                bankName,
                swiftBic,
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
                            <InputWithLabel
                                required
                                label='Name of the Account'
                                id='nameOfAccount'
                                infoText='Name of the Account info'
                                placeholder='Gaji asif'
                                value={bankAccountName}
                                onChange={setBankAccountName}
                            />

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <InputWithLabel
                                        required
                                        label='IBAN'
                                        id='iban'
                                        infoText='IBAN info'
                                        placeholder='lora.king@gmail.com'
                                        value={iban}
                                        onChange={setIban}
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <InputWithLabel
                                        required
                                        label='Bank Name'
                                        id='bankName'
                                        infoText='Bank Name info'
                                        placeholder='Bank Name'
                                        value={bankName}
                                        onChange={setBankName}
                                    />
                                </div>
                            </div>

                            <InputWithLabel
                                required
                                label='SWIFT BIC'
                                id='swiftBic'
                                infoText='SWIFT BIC info'
                                placeholder='**********'
                                value={swiftBic}
                                onChange={setSwiftBic}
                            />

                            <div className='d-flex justify-content-between'>
                                <a
                                    href='/provider-service-category-list'
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
