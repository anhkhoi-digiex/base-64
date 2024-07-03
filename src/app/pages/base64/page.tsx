"use client"
import React, { useEffect, useState } from 'react'


const Base64 = () => {
    const [isDecode, setIsDecode] = useState<boolean>(true)
    const [encode, setEncode] = useState<string>("")
    const [temp, setTemp] = useState<string>("")    


    const decodeBase64 = (data: string) => {
        try {
            if (data == "") {
                setEncode("")

            } else {
                const binaryData = atob(data)
                const decodeData = decodeURIComponent(binaryData)
                setEncode(decodeData)
            }
        } catch (error: any) {
            setEncode("Invalid length for a Base-64 char array or string.");

        }
    }

    const encodeBase64 = (data: string) => {
        try {
            if (data == "") {
                setEncode("")
            }
            const encodeData = encodeURIComponent(data)
            const base64String = btoa(encodeData)
            setEncode(base64String)

        } catch (error: any) {
            setEncode(error)
        }
    }

    return (
        <div className='grid gap-5'>
            <div className='flex justify-center'>
                <div className='group' onClick={() => { setIsDecode(true); decodeBase64(temp) }} >
                    <button className={`${isDecode == true ? "bg-pink-500 px-5 py-2 font-bold text-white uppercase" : "group-hover:bg-pink-300 bg-slate-500 px-5 py-2 font-bold text-white uppercase"}`}>decode</button>
                </div>
                <div className='group' onClick={() => { setIsDecode(false); encodeBase64(temp) }} >
                    <button className={`${isDecode == false ? "bg-pink-500 px-5 py-2 font-bold text-white uppercase" : "group-hover:bg-pink-300 bg-slate-500 px-5 py-2 font-bold text-white uppercase"}`}>encode</button>
                </div>
            </div>
            <div className='flex justify-center align-middle gap-5'>
                <div>
                    <textarea
                        onChange={(e) => {
                            isDecode == true ? decodeBase64(e.target.value) : encodeBase64(e.target.value)
                            setTemp(e.target.value)
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

export default Base64
