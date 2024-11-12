import { ChevronRight, MoveDown } from "lucide-react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__body">
                <h3> El mejor café</h3>
                <h1>MontCafé</h1>
                <p>We come with a choice of coffee for coffee lovers. With coffee taken from the best place and mixed by the owner, we present coffee with a taste that will never be forgotten.</p>
                <button>Ver Productos <ChevronRight width={30} />  </button>
                <MoveDown className="hero__arrow" width={16} />
            </div>
        </div>
    </div>
  )
}
