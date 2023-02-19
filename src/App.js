import "./App.css";
import BottomNav from "./BottomNav/BottomNav";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div
      className="font-main text-dark w-full
      
    "
    >
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
