"use client";

import { Carousel } from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Galgotias University",
      src: "/galgotias.jpg",
    },
    {
      title: "",
      src: "/confSlider1.webp",
    },
    {
      title: "",
      src: "/confSlider4.webp",
    },
    {
      title: "",
      src: "/confSlider5.webp",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-gradient-to-b from-[#17202A] to-[#0F1419]">
      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/[0.05] to-purple-700/[0.05] blur-3xl" />
      
      {/* Carousel Content */}
      <div className="relative z-10">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}