import Image from "next/image";
import bgImage from "../../../../../public/images/home/resources/cover-bg.jpg";

export function Cover() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={bgImage}
        alt="ReCraft cover image"
        className="object-cover"
        fill
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h2 className="uppercase text-[12vw] md:text-[7vw] opacity-80 font-bold text-background">
          Resources
        </h2>
      </div>
    </div>
  );
}
