import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'


const Page = props => {
    const { title, ...rest } = props

    useEffect(() => {
        document.title = title || ''
    }, [])

    return <Route {...rest} />
}


export default Page
