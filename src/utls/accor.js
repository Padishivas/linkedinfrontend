import React, { useState } from 'react'
import acc from "./acc.module.scss"
const Accor = () => {
    const [show, setShow] = useState(false)

    const toggleButton = () => {
        if (show === false) setShow(true)
        else setShow(false)
    }
    return (
        <div className={acc.container}>
            <button className={acc.button} onClick={toggleButton}>User</button>
            <section className={!show ? acc.none : acc.dropdown}>

            </section>
        </div>
    )
}

export default Accor