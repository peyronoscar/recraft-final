import Image from "next/image";
import bgImage from "../../../../../public/images/home/about/cover-bg.jpg";

export function Cover() {
  return (
    <div className="relative md:min-h-screen min-h-[50vh]">
      <Image
        src={bgImage}
        alt="ReCraft cover image"
        className="object-cover"
        fill
      />
    </div>
  );
}
