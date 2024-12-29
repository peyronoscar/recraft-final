import { Contact } from "@/components/contact";
import { Hero } from "@/components/home";
import { Story } from "@/components/home/about";
import { Cover as AboutCover } from "@/components/home/about/cover";
import { Selection } from "@/components/home/collection";
import { Cover as CollectionCover } from "@/components/home/collection/cover";
import { Gallery } from "@/components/home/resources";
import { Cover as ResourcesCover } from "@/components/home/resources/cover";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutCover />
        <Story />
      </section>
      <section id="collection">
        <CollectionCover />
        <Selection />
      </section>
      <section id="resources">
        <ResourcesCover />
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
