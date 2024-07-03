import React from 'react'

const Base64ImageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <section className='m-10'>
            {children}
        </section>
    )
}

export default Base64ImageLayout