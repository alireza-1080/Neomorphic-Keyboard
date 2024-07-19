import "./Keyboard.css"
import React, { useState } from 'react'
import Key from "../Key/Key"

function Keyboard() {
    const [row1] = useState([
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"
    ])
    const [row2] = useState([
        "A", "S", "D", "F", "G", "H", "J", "K", "L"
    ])
    const [row3] = useState([
        "Z", "X", "C", "V", "B", "N", "M"
    ])
    const [row4] = useState([
        "SPACE"
    ])

    return (
        <div className="keyboard-container">
            <div className="keyboard-row">
                {row1.map((item) => {
                    return <Key item={item} key={item}/>
                })}
            </div>
            <div className="keyboard-row">
                {row2.map((item) => {
                    return <Key item={item} key={item}/>
                })}
            </div>
            <div className="keyboard-row">
                {row3.map((item) => {
                    return <Key item={item} key={item}/>
                })}
            </div>
            <div className="keyboard-row">
                {row4.map((item) => {
                    return <Key item={item} key={item}/>
                })}
            </div>
        </div>
    )
}

export default Keyboard