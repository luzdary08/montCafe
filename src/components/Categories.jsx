import "../styles/categories.css"
import Subtitle from "./Subtitle"
import { categories } from "../helper/utils"
import Category from "./Category"


export default function Categories() {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__body">
          <Subtitle position="center">Categorias</Subtitle>
          <div className="categories__images">
              {
                categories.map((item,index) => (
                  <Category key={index} category={item.category} img={item.img} className={item.className} />
                ))
              }
          </div>
        </div>
      </div>
    </div>
  )
}
