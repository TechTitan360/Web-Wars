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
    <div className="relative overflow-hidden bg-black w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
