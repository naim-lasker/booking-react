import React from "react"
import Header from "./Header"

const Main = (props) => {
    const { children } = props

    return (
        <main>
            <Header />
            {children}
        </main>
    )
}

export default Main
