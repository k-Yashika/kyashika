import { About } from "~/components/About";
import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { Marquee } from "~/components/Marquee";
import { Work } from "~/components/Work";
import { Stack } from "~/components/Stack";
import { Contact } from "~/components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "kYashika Portfolio" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
}

export default function Home() {
  return <>
  <Hero />;
  {/* <Marquee />; */}
  <Work />
  <Stack />
  <About />
  <Contact /></>
}
