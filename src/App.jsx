
import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import Testimonials from './components/Testimonials';
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
    </>
  )
}
export default App
