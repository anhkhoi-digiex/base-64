import Link from "next/link"
import React from "react"


export interface ButtonCustomeProps {
    isActive: boolean,
    name: string,
    href: string
}

export const ButtonCustome: React.FC<ButtonCustomeProps> = ({ isActive, name, href }) => {
    return (
        <div>
            <Link className={isActive == true ? " underline decoration-pink-500 decoration-solid decoration-2 text-white text-base  p-1" : "text-white text-base  p-1"} href={href}>{name}</Link>
        </div>
    )
}

