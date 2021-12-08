import React from 'react'
import './Button.css'
const Button = ({ onClick, children ,type,customCss}) => {
    return (
        <button onClick={onClick} type={type} className={customCss}>
            {children}
        </button>
    )
}

export default Button