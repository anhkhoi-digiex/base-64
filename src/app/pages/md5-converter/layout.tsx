import React from 'react'

const MD5ConverterLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <section className='m-10'>
            {children}
        </section>
    )
}

export default MD5ConverterLayout