import "./App.css";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/navbar/ Navbar";
import SideNavbar from "./components/sidebar/ SideNavbar";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
