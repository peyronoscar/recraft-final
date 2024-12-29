"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import page1 from "../../../../../public/images/home/collection/selection/01.png";
import page2 from "../../../../../public/images/home/collection/selection/02.png";
import page3 from "../../../../../public/images/home/collection/selection/03.png";
import page4 from "../../../../../public/images/home/collection/selection/04.png";
import page5 from "../../../../../public/images/home/collection/selection/05.png";
import page6 from "../../../../../public/images/home/collection/selection/06.png";
import page7 from "../../../../../public/images/home/collection/selection/07.png";
import page8 from "../../../../../public/images/home/collection/selection/08.png";
import page9 from "../../../../../public/images/home/collection/selection/09.png";
import page10 from "../../../../../public/images/home/collection/selection/10.png";
import page11 from "../../../../../public/images/home/collection/selection/11.png";
import page12 from "../../../../../public/images/home/collection/selection/12.png";
import page13 from "../../../../../public/images/home/collection/selection/13.png";
import page14 from "../../../../../public/images/home/collection/selection/14.png";
import page15 from "../../../../../public/images/home/collection/selection/15.png";
import page16 from "../../../../../public/images/home/collection/selection/16.png";
import page17 from "../../../../../public/images/home/collection/selection/17.png";
import page18 from "../../../../../public/images/home/collection/selection/18.png";
import page19 from "../../../../../public/images/home/collection/selection/19.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
];

export function Selection() {
  return (
    <div className="space-y-10 md:space-y-24 py-16 md:py-32">
      <div className="container max-w-3xl space-y-5">
        <h2 className="font-bold text-2xl md:text-3xl">
          Fall/Winter Selection 2024
        </h2>
        <p className="text-lg">
          The first material selection created by Recraft Design Studio includes
          discarded materials from two former demolition sites in Brøndby and
          Nykobing Falster, as well as one transformati Instead of calling it a
          collection, we prefer to refer to it as a selection—harvested from the
          unique opportunities each site provides, reflecting the paradox of
          fashions seasonality within the case-specific nature of sustainable
          urban miningon site in Høje Taastrup.
        </p>
        <Button className="px-8" asChild>
          <a
            href="/pdfs/Fall-Winter_Selection_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Brochure
          </a>
        </Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="-ml-10 md:-ml-32 container">
          {pages.map((page, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-[600px] pl-10 md:pl-32"
            >
              <div className="relative aspect-[1/1.414]">
                <Image
                  src={page}
                  alt={`Selection page ${index + 1}`}
                  className="object-cover"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>
    </div>
  );
}
