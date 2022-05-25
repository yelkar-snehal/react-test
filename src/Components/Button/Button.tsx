import React from 'react'

// TODO: implement custom interface props, which adds additional custom props
function Button({ label, onClick }: React.HTMLProps<HTMLButtonElement>) {
    return <button data-testid='button' onClick={onClick}>{label}</button>
}

export default Button