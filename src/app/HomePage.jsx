"use client"

import Link from "next/link";
import Image from "next/image";
import logo from '/public/bentley/render3.jpg'

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            {/* Navigation Menu */}
            <nav className="absolute top-5 right-10 flex space-x-6">
                <Link href="/reflect">
                    <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-white hover:text-black transition-colors">
                        Enter Gallery
                    </button>
                </Link>
            </nav>
            
            {/* Centered Logo */}
            <div className="flex-grow flex justify-center items-center">
                <Image src={logo} alt="Logo" width={200} height={200} className="animate-pulse" />
            </div>
        </div>
    )
}