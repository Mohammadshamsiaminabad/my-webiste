import Image from "next/image"
import SexCategory from "./components/SexCategory"
import DiscountContainer from "./components/DiscountContainer"

export default function ShopWeb() {
  return (
    <main style={{ marginTop: "80px", textAlign: "left" }}>
      <h1 className="res-text">Buy something cheap and good quality.</h1>
      <p className="res-text"><strong>category</strong></p>
      <div className="responsive-container">
        <SexCategory />
        <DiscountContainer />
      </div>

      <div className="top-clothes">
        <h2></h2>
        <div className="top-clothes-container">
          <div className="clothes-box">
            <h4>women&lsquo;s clothes</h4>
            <p className="price">97$</p>
            <span className="view">123<i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.6</span>
            <Image width={200} height={200} alt="clothes" src="/women's-clothes.jpg" />
          </div>
          <div className="clothes-box" style={{ animationDelay: "250ms" }}>
            <h4>men&lsquo;s clothes</h4>
            <p className="price">97$</p>
            <span className="view">123<i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.6</span>
            <Image width={200} height={200} alt="clothes" src="/men's-clothes.avif" />
          </div>
          <div className="clothes-box" style={{ animationDelay: "500ms" }}>
            <h4>women&lsquo;s clothes</h4>
            <p className="price">97$</p>
            <span className="view">123<i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.6</span>
            <Image width={200} height={200} alt="clothes" src="/men's-suit.jpg" />
          </div>
          <div className="clothes-box" style={{ animationDelay: "750ms" }}>
            <h4>women&lsquo;s clothes</h4>
            <p className="price">97$</p>
            <span className="view">123<i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.6</span>
            <Image width={200} height={200} alt="clothes" src="/men's-shoes.jpg" />
          </div>
          <div className="clothes-box" style={{ animationDelay: "1000ms" }}>
            <h4>women&lsquo;s clothes</h4>
            <p className="price">97$</p>
            <span className="view">123<i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.6</span>
            <Image width={200} height={200} alt="clothes" src="/women's-shoes.jpg" />
          </div>
        </div>

      </div>
    </main>
  )
}