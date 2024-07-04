import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export const navData = [
    { name: 'Home', path: '/', },
    { name: 'About', path: '/about', },
    { name: 'Timeline', path: '/timeline', },
    { name: 'Ambassador', path: '/campus', },
    { name: 'Team', path: '/team', },
    { name: 'Gallery', path: '/gallery', },
    { name: 'Faqs', path: '/contact', },
];
export default function Footer() {
    return (
        <div>
            <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10 " />

            <div className="flex items-center flex-col w-full h-full bg-hack footer-list p-16 lg:p-10 lg:pt-16 lg:pb-8">


                <ul className="hidden items-center gap-5 xl:gap-10 text-base-1xl flex-col lg:flex-row footer-list lg:flex mb-4 space-x-5">
                    {navData.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}>
                                <div className={`flex flex-col items-center justify-center  mx-1 `} >
                                    <div className='text-lg font-thin'>{item.name}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <Link href={'/'} >
                        <Image src={'/logo.svg'} width={288} height={64} alt='' priority={true} />
                    </Link>
                </div>
                <div className="flex items-center gap-6 mb-4 footer-list text-2xl">
                    <a className="cursor-pointer">
                        <IoEarthOutline />
                    </a>
                    <a className="cursor-pointer">
                        <FaInstagram />
                    </a>
                    <a className="cursor-pointer">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="flex footer-list mb-4 text-center pt-8 gap-1">
                    ©2024 MUJHackX, All rights reserved.
                </p>
            </div>
        </div>
    );
}