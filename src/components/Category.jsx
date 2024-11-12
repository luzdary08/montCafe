import { ChevronRight } from "lucide-react"

export default function Category({category,img,className = ''}) {
    return (
        <figure className={"categories__item "+className}>
            <img className="categories__img" src={img} alt="" />
            <div className="categories__details">
                <p>{category}</p>
                <button className="categories__btn">
                          <ChevronRight width={16}/>
                </button>
            </div>
        </figure>
    )
}
