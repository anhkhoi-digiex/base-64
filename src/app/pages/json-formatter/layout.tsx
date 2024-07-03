import React from 'react'

const JsonFormatterLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <section className='m-10'>
            {children}
        </section>
    )
}

export default JsonFormatterLayout