import Hero from "./components/hero";
import Products from "./components/products";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="snap-mandatory h-screen w-full scroll-smooth bg-gradient-to-br from-black to-indigo-500 overflow-y-auto snap-y scrollbar-hidden">

   <Hero />
    {/* <Products /> */}
    <Footer/>
    </div>
  );
}