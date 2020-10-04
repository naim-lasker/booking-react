import React, { Fragment } from "react"
import { Tab, Tabs } from "react-bootstrap"
import { FaDollarSign, FaHome, FaWallet } from "react-icons/fa"
import Breadcrumb from "../../../components/UI/Breadcrumb"

const ProviderWallet = () => {
    return (
        <section className='booking-area'>
            <Breadcrumb icon={<FaHome />} names={[{ name: "Wallet" }]} />

            <div className='row'>
                <div className='col-lg-11'>
                    <Tabs className='shadow-tab' defaultActiveKey='myMoney'>
                        <Tab eventKey='myMoney' title='My Money'>
                            <div className='row'>
                                <div className='col-lg-6 mt-3 pt-3'>
                                    <div className='card text-center'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <FaWallet size={30} />
                                            </h5>
                                            <p className='card-text'>$5000</p>
                                        </div>
                                        <div className='card-footer text-muted'>
                                            Total Balances
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 mt-3 pt-3'>
                                    <div className='card text-center'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>
                                                <FaDollarSign size={30} />
                                            </h5>
                                            <p className='card-text'>$1000</p>
                                        </div>
                                        <div className='card-footer text-muted'>
                                            Total Withdrawn
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>

                        <Tab
                            eventKey='allTransactions'
                            title='All Transactions'
                        >
                            <Fragment>
                                <div className='row justify-content-center'>
                                    <div className='mb-3 col-lg-10 mt-3 pt-3'>
                                        <div className='mb-4'>
                                            <div className='d-flex align-items-center mb-3'>
                                                <label className='label-name'>
                                                    Select Range
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    defaultValue='1'
                                                    className='custom-select mr-sm-2 input-box py-2 text-muted '
                                                    id='inlineFormCustomSelect'
                                                >
                                                    <option>Choose One</option>
                                                    <option value='1'>
                                                        This Year
                                                    </option>
                                                    <option value='2'>
                                                        Last Year
                                                    </option>
                                                    <option value='3'>
                                                        last 7 days
                                                    </option>
                                                    <option value='3'>
                                                        last 30 days
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className='table table-striped mt-4 pt-4'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>#</th>
                                            <th scope='col'>Date</th>
                                            <th scope='col'>Description</th>
                                            <th scope='col'>Status</th>
                                            <th scope='col'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>1</th>
                                            <td>02/15/2020</td>
                                            <td>
                                                this is a description. Your
                                                money is this. please check{" "}
                                            </td>
                                            <td>Sent</td>
                                            <td>$500</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>1</th>
                                            <td>02/15/2020</td>
                                            <td>
                                                this is a description. Your
                                                money is this. please check{" "}
                                            </td>
                                            <td>Not Sent</td>
                                            <td>$500</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>1</th>
                                            <td>02/15/2020</td>
                                            <td>
                                                this is a description. Your
                                                money is this. please check{" "}
                                            </td>
                                            <td>Not Sent</td>
                                            <td>$500</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>1</th>
                                            <td>02/15/2020</td>
                                            <td>
                                                this is a description. Your
                                                money is this. please check{" "}
                                            </td>
                                            <td>Not Sent</td>
                                            <td>$500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Fragment>
                        </Tab>

                        <Tab eventKey='paymentMethods' title='Payment Methods'>
                            <div class='row'>
                                <div class='col-lg-6 mt-3 pt-3'>
                                    <div class='card text-center'>
                                        <div class='card-body'>
                                            <p class='card-text'>
                                                ID: 1254958A
                                            </p>
                                            <p class='card-text'>
                                                APP Key: 1254958A
                                            </p>
                                            <p class='card-text'>
                                                App Secret ID: A988 - 12213-
                                                ADDDD
                                            </p>
                                        </div>
                                        <div class='card-footer text-muted'>
                                            Paypal
                                        </div>
                                    </div>
                                </div>
                                <div class='col-lg-6 mt-3 pt-3'>
                                    <div class='card text-center'>
                                        <div class='card-body'>
                                            <p class='card-text'>
                                                ID: 1254958A
                                            </p>
                                            <p class='card-text'>
                                                APP Key: 1254958A
                                            </p>
                                            <p class='card-text'>
                                                App Secret ID: A988 - 12213-
                                                ADDDD
                                            </p>
                                        </div>
                                        <div class='card-footer text-muted'>
                                            Stripe
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
export default ProviderWallet
