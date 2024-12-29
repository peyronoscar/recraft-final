import Image from "next/image";
import bgImage from "../../../../public/images/home/hero/hero-bg.jpg";
import { Logo } from "@/svgs/layout/logo";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={bgImage}
        alt="ReCraft cover image"
        className="object-cover"
        fill
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Logo className="w-16 md:w-24" />
      </div>
    </div>
  );
}
