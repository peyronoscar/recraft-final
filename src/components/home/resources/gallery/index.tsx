"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { Fragment } from "react";
import item1 from "../../../../../public/images/home/resources/gallery/01.jpg";
import item2 from "../../../../../public/images/home/resources/gallery/02.jpg";
import item3 from "../../../../../public/images/home/resources/gallery/03.png";
import item4 from "../../../../../public/images/home/resources/gallery/04.jpg";
import item5 from "../../../../../public/images/home/resources/gallery/05.jpg";
import item6 from "../../../../../public/images/home/resources/gallery/06.jpg";
import item7 from "../../../../../public/images/home/resources/gallery/07.jpg";
import item8 from "../../../../../public/images/home/resources/gallery/08.jpg";
import item9 from "../../../../../public/images/home/resources/gallery/09.jpg";
import item10 from "../../../../../public/images/home/resources/gallery/10.jpg";
import Image from "next/image";

const items = [
  {
    projects: [
      {
        title: "Nykøbing Falster, 2023",
        description: "Former housing complex",
        date: "Built 1963, demolished September 2023",
        image: item1,
      },
      {
        title: "Høje Taastrup",
        description: "Former chrome factory",
        date: "Built 1980, demolition prevented 2024",
        image: item2,
      },
      {
        title: "Prøvestenen, 2024",
        description: "Industrial port Copenhagen",
        date: "Visited November 2024",
        image: item3,
      },
      {
        title: "Nykøbing Falster, 2023",
        description: "Former housing complex",
        date: "Built 1963, demolished September 2023",
        image: item4,
      },
    ],
  },
  {
    intro: [
      {
        title: "Hard Demolition",
        description:
          "The process of deconstructing a building as fast and cost-effective as possible. This approach is typically focusing on the complete removal of the structure rather than the careful dismantling of materials for future use.",
      },
      {
        title: "Soft Demolition",
        description:
          "Soft Demolition: The process of carefully deconstructing a building with the purpose to preserve its components and with the intention to maximize recycling or reuse.",
      },
    ],
    projects: [
      {
        title: "Brøndby, 2024",
        description: "Former chrome factory",
        date: "Built 1960, demolished 2020 to 2024",
        image: item5,
      },
      {
        title: "Brøndby, 2024",
        description: "Former chrome factory",
        date: "Built 1960, demolished 2020 to 2024",
        image: item6,
      },
    ],
  },
  {
    intro: [
      {
        title: "Stone Offcuts",
        description:
          "At ReCraft Design Studio, we are always on the lookout for discarded materials, from demolition waste to unique offcuts. One of our recent stops: visiting a stonemason in Sweden to source beautiful stone offcuts. Excited to give these remnants new life!",
      },
    ],
    projects: [
      {
        title: "Stonemason, 2024",
        description: "Stonemasonery in the Malmö Area",
        date: "Visited October 2024",
        image: item7,
      },
      {
        title: "Stonemason, 2024",
        description: "Stonemasonery in the Malmö Area",
        date: "Visited October 2024",
        image: item8,
      },
      {
        title: "Høje Taastrup",
        description: "Former chrome factory",
        date: "Built 1980, demolition prevented 2024",
        image: item9,
      },
    ],
  },
  {
    intro: [
      {
        title: "Reclaimed materials",
        description:
          "Reclaimed material: Reclaimed materials are considered to be any materials that have been used before either in buildings, temporary works or other uses and are re-used as construction materials (Greenspec, 2004).",
      },
    ],
    projects: [
      {
        title: "Prøvestenen, 2024",
        description: "Industrial port Copenhagen",
        date: "Visited November 2024",
        image: item10,
      },
    ],
  },
];

export function Gallery() {
  return (
    <div className="space-y-10 md:space-y-24 py-16 md:py-32">
      <div className="max-w-3xl space-y-5 container">
        <h2 className="font-bold text-2xl md:text-3xl">Resources</h2>
        <p className="text-lg">
          At ReCraft Design Studio, we are always on the lookout for discarded
          materials, from demolition waste to unique offcuts. Why do we discard
          so many valuable resources while continuing to extract new ones from
          our planet? We believe it is time to rethink this approach. Instead of
          depleting natural reserves, we see urban fabrics and supply chains as
          modern mines—rich sources of materials and inspiration, waiting to be
          reimagined and repurposed.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-10 md:-ml-16 container">
          {items.map((item, index) => (
            <Fragment key={index}>
              {item.intro && (
                <CarouselItem className="basis-full md:basis-[600px] pl-10 md:pl-16">
                  <div className="space-y-8 aspect-[1/1.414] flex flex-col justify-end">
                    {item.intro.map((intro, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-bold text-xl md:text-3xl">
                          {intro.title}
                        </h3>
                        <p className="md:text-lg">{intro.description}</p>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              )}
              {item.projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-[600px] pl-10 md:pl-16 space-y-4"
                >
                  <div className="relative aspect-[1/1.414]">
                    <Image
                      src={project.image}
                      alt={`Gallery item ${index + 1}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.date}</p>
                  </div>
                </CarouselItem>
              ))}
            </Fragment>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>
    </div>
  );
}
