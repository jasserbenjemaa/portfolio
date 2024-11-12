import SideNavbar from "../components/sidebar/ SideNavbar";
import Hero from "../components/sections/Hero/Hero";
import Project from "../components/sections/SideProjects/SideProject";
import Navbar from "../components/sections/navbar/ Navbar";
import About from "../components/sections/About/About"
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <Navbar />
      <TracingBeam />
      <SideNavbar />
      <Hero />
      <About/>
      <Project />
      
    </>
  );
}
