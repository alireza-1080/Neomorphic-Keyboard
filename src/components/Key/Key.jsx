import "./Key.css"
import React, { useEffect, useRef } from 'react'

function Key({ item }) {
    const keyRef = useRef(null)
    let key;
    useEffect(() => {
        key = keyRef.current
    }, [])

    useEffect(() => {
        if (item === "SPACE") {
            key.style.width = "570px"
        }
    }, [key])

    return (
        <div className="key-container" ref={keyRef}>
            <input type="text" value={item} readOnly/>
        </div>
    )
}

export default Key