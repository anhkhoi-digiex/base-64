"use client"

import React, { useState } from 'react'

const Base64Image = () => {
    const [decode, setDecode] = useState<string>("")

    return (
        <div>
            <div className='flex justify-center align-middle gap-5'>
                <div>
                    <textarea
                        onChange={(e) => {
                            setDecode(e.target.value)
                        }}
                        style={{ backgroundColor: "#444A68" }} className='p-2 text-white w-96 h-96 rounded-sm'></textarea>
                </div>
                <div className={`flex justify-center align-middle w-96 h-96`} style={{ backgroundColor: "#444A68" }}>
                    <div className='m-auto w-80 h-80 bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${decode})` }}></div>
                </div>
            </div>
        </div>
    )
}

export default Base64Image