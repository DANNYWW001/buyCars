import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Featured from "./components/Featured";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import Rent from "./components/Rent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="hero min-h-screen bg-no-repeat bg-cover bg-center layout">
        <Nav />
        <Hero />
      </div>
      <Experience />
      <Featured />
      <HowItWorks />
      <Reviews />
      <Rent />
      <Footer />
    </>
  );
}

export default App;
