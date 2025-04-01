'use client'

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Viewport from "../viewport/page";
import RenderedScenes from "../rendered_scenes/page";

//images design
import render1 from '/public/interior_design/render1.jpg'
import render2 from '/public/interior_design/render2.jpg'
import render6 from '/public/interior_design/render6.png'
import render7 from '/public/interior_design/render7.png'
import render8 from '/public/interior_design/render8.png'

//images bentley
import render3 from '/public/bentley/render3.png'
import render4 from '/public/bentley/render4.png'
import render10 from '/public/bentley/render10.png'
import render11 from '/public/bentley/render11.png'

//video viewport
import scene1 from '/public/scenes/azi/scene1.mp4'
import scene2 from '/public/scenes/azi/scene2.mp4'
import scene3 from '/public/scenes/azi/scene3.mp4'
import scene4 from '/public/scenes/azi/scene4.mp4'

//rendered scenes
import rendered1 from '/public/rendered/rendered1.mp4'

const categories = ["Design", "Bentley", "Viewport", "Rendered"];
const images = {
    Design: [render1, render2, render6, render7, render8],
    Bentley: [render3, render4, render10, render11],
    Viewport: [scene1, scene2, scene3, scene4],
};

const scenes = {
    Rendered: [rendered1],
}

export default function ReflectGallery() {
    const [activeCategory, setActiveCategory] = useState("Design");

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Category Selector */}
            <div className="flex justify-between items-center py-6 px-6">
                {/* Logo on the Left */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={render2} alt="Logo" width={50} height={50} />
                    </Link>
                </div>

                {/* Navigation Menu on the Right */}
                <nav className="flex space-x-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-lg transition-colors ${activeCategory === category ? "bg-white text-black" : "bg-gray-700"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Gallery */}
            <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    activeCategory === "Viewport" ? (
                        images[activeCategory]?.map((video, i) => (
                            <Viewport key={i} videoSrc={video} />
                        ))
                    ) :
                        activeCategory === "Rendered" ? (
                            scenes[activeCategory]?.map((renderedSrc, i) => (
                                <RenderedScenes key={i} renderedSrc={renderedSrc} />
                            ))
                        )
                            :
                            (
                                // Otherwise, render images
                                images[activeCategory]?.map((file, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-gray-800 rounded-lg h-60 flex items-center justify-center text-xl"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image
                                            src={file}
                                            alt={`Image ${i + 1}`}
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </motion.div>
                                ))
                            )}
            </section>
        </div>
    );
}
