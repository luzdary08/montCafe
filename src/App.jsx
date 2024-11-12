
import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import Testimonials from './components/Testimonials';
import Information from './components/Information';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Categories />
      <Contact />
      <Testimonials />
      <Information />
      <Footer />
    </>
  )
}
export default App
