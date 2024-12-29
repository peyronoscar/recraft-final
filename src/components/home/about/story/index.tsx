"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import itemImage0 from "../../../../../public/images/home/about/story/item-0.jpg";
import itemImage1 from "../../../../../public/images/home/about/story/item-1.jpg";
import itemImage2 from "../../../../../public/images/home/about/story/item-2.jpg";
import Autoplay from "embla-carousel-autoplay";

const items = [
  {
    image: itemImage0,
    alt: "ReCraft cover image",
  },
  {
    image: itemImage1,
    alt: "ReCraft cover image",
  },
  {
    image: itemImage2,
    alt: "ReCraft cover image",
  },
];

export function Story() {
  return (
    <div className="flex flex-col lg:flex-row container max-w-6xl lg:gap-32 lg:items-center py-16 md:py-32 gap-8">
      <div className="lg:flex-1">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[9/12]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="font-bold text-2xl md:text-3xl">About</h2>
        <p className="text-lg">
          Our mission is to reduce waste by crafting upcycled materials that
          transcend their original purpose. We believe architecture is more than
          just the design of space—it’s a narrative woven through the materials
          that define it. Each material carries a story: where it came from, who
          shaped it, and how it connects the past to the present. Through local
          craftsmanship, we reclaim discarded materials from demolition sites
          and offcuts from production, honoring their histories and transforming
          waste into meaningful elements for new spaces.
        </p>
      </div>
    </div>
  );
}
