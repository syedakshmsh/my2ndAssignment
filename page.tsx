import Image from "next/image";
import Navbar from "./Component/Navbar"
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";




export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Footer />
      
    </div>
  );
}
