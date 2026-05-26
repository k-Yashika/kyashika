import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "kYashika Portfolio" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
}

export default function Home() {
  return <Hero />;
}
