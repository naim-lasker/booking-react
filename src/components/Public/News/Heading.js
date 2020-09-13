import React from "react"

const Heading = ({ text }) => {
    return (
        <section>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='title-section text-center'>
                            <h2>News</h2>
                            <img src='/images/title-img.png' alt='' />
                            <p>
                                These are great products that due to a tired
                                translator or an over worked copy write ended up
                                with hilarious. These are great products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heading
