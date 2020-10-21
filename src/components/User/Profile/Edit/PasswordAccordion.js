import React, { useEffect, useState } from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { useDispatch } from "react-redux"
import auth from "../../../../helpers/auth"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { updatePassword } from "../../../../services/authentication"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"
import { CustomAlert } from "../../../UI/SweetAlert"

const PasswordAccordion = () => {
    const dispatch = useDispatch()
    const providerInfo = auth.getProviderInfo()

    const [password, handlePassword] = useInput("")
    const [
        confirmPassword,
        handleConfirmPassword,
    ] = useInput("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            return notify("error", "Your pasword does not match!")
        }

        setLoading(true)

        dispatch(
            updatePassword(providerInfo.id, password, (res, err) => {
                setLoading(false)

                if (res && res.data && res.data.status === "success") {
                    setMessage(res.data.data)
                    setAlert(true)
                } else if (err) {
                    return notify("error", "Please check all the fields")
                }
            })
        )
    }

    return (
        <Card className='border-0 custom-card px-4'>
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={() => setAlert(false)}
            />
            <Card.Header className='card-header border-0 bg-white px-0 px-0'>
                <Accordion.Toggle
                    as={Button}
                    className='btn d-block w-100 p-0'
                    variant='link'
                    eventKey='1'
                >
                    <div className='collapsed collapse-btn d-flex justify-content-between align-items-center'>
                        <span>Change Password</span>
                        <FaChevronUp />
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
                <Card.Body className='px-0 pt-0'>
                    <form onSubmit={handleSubmit}>
                        <CustomInput
                            minLength='6'
                            required
                            type='password'
                            showLabel
                            label='Password'
                            id='password'
                            infoText='Password info'
                            className='mb-2'
                            placeholder='******'
                            value={password}
                            onChange={handlePassword}
                        />

                        <CustomInput
                            minLength='6'
                            required
                            type='password'
                            showLabel
                            label='Confirm Password'
                            id='confirmPassword'
                            infoText='Confirm Password info'
                            placeholder='******'
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                        />

                        <div className='mt-3 text-right'>
                            <SubmitButton
                                blue={true}
                                text='Update Password'
                                loading={loading}
                            />
                        </div>
                    </form>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default PasswordAccordion
