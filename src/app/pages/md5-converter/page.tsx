"use client"
import React, { useState } from 'react'
var md5 = require('md5');

const MD5Converter = () => {
    const [converterMd5, setConverterMd5] = useState<string>("")


    const handleConverterMd5 = (text: string) => {
        if(text == ""){

        }else{
            setConverterMd5(md5(text))
        }
    }

    return (
        <div className='flex justify-center align-middle gap-5'>
            <div>
                <textarea
                    onChange={(e) => {
                        handleConverterMd5(e.target.value)
                    }}
                    style={{ backgroundColor: "#444A68" }} className='p-2 text-white w-96 h-96 rounded-sm'></textarea>
            </div>
            <div>
                <textarea readOnly value={converterMd5} style={{ backgroundColor: "#444A68" }} className='p-2 text-white w-96 h-96 rounded-sm'></textarea>
            </div>
        </div>
    )
}

export default MD5Converter