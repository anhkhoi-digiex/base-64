'use client'
import React, { useEffect, useState } from "react"
import { ButtonCustome, ButtonCustomeProps } from "../components"
import { usePathname, useRouter } from "next/navigation"


const Header: React.FC = () => {
    const router = usePathname()



    const listBtn: ButtonCustomeProps[] = [
        { href: "/", isActive: false, name: "Base 64" },
        { href: "/pages/base64-image", isActive: false, name: "Base 64 Image" },
        { href: "/pages/json-formatter", isActive: false, name: "JSON formatter" },
        { href: "/pages/md5-converter", isActive: false, name: "Md5 converter" },

    ]

    return (
        <div>
            <div className="w-full grid justify-center align-middle text-center">
                <h1 className="text-white text-4xl font-bold">Decode 64 base</h1>
                <p className="text-white  text-sm tracking-wider">Decode 64 base - Simplifying Data Encoding and Decoding</p>
            </div>

            <div className="mt-10 flex justify-center align-middle gap-10">
                {listBtn.map((btn, index) => {
                    return (
                        <div key={index}>
                            <ButtonCustome key={index} href={btn.href} isActive={btn.href == router ? true : false} name={btn.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Header