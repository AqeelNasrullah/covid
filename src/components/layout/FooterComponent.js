import React from 'react'

const Footer = () => {
    return (
        <div className="p-2 bg-secondary">
            <p className="text-light text-center mb-0">Copyrights &copy; { new Date().getFullYear() } - All rights reserved. Developed with <i className="bi bi-heart-fill text-danger"></i> by <a href="https://aqeelnasrullah.me" target="_blank" rel="noreferrer" className="text-light">Aqeel Nasrullah</a></p>
        </div>
    )
}

export default Footer
