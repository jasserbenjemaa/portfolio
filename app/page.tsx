import SideNavbar from "../components/sidebar/ SideNavbar";
import Hero from "../components/sections/Hero/Hero";
import Navbar from "../components/sections/navbar/ Navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <TracingBeam />
      <SideNavbar />
      <Navbar />
      <Hero />
    </>
  );
}
