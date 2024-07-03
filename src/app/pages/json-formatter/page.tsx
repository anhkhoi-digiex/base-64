"use client"
import React, { useState } from 'react'

const JsonFormatter = () => {
    const [encode, setEncode] = useState<string>("")

    const converterJson = (json: string) => {
        try {

            if (json == "") {
                setEncode("")
            } else {
                const result = JSON.stringify(JSON.parse(json), null, "  ")
                setEncode(result)
            }
        } catch (error) {
            setEncode("Invalid json")
        }
    }


    return (
        <div>
            <div className='flex justify-center align-middle gap-5'>
                <div>
                    <textarea
                        onChange={(e) => {
                            converterJson(e.target.value)
                        }}
                        style={{ backgroundColor: "#444A68" }} className='p-2 text-white w-96 h-96 rounded-sm'></textarea>
                </div>
                <div>
                    <textarea readOnly value={encode} style={{ backgroundColor: "#444A68" }} className='p-2 text-white w-96 h-96 rounded-sm'></textarea>
                </div>
            </div>
        </div>
    )
}

export default JsonFormatter
