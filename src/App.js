import "./App.css";
import Scrollbar from "./components/scrollbar/Scrollbar";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/navbar/ Navbar";
import SideNavbar from "./components/sidebar/ SideNavbar";

function App() {
  return (
    <div className="App">
      <Scrollbar />
      <SideNavbar />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
