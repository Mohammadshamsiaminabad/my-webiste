import Image from "next/image"
import SexCategory from "./components/SexCategory"

export default function ShopWeb() {
  return (
    <main style={{ marginTop: "80px" }}>
      <h1 className="res-text">Buy something cheap and good quality.</h1>
      <p><strong className="res-text">category</strong></p>
      <SexCategory />
      <section aria-label="discount clothes" className="discount-commudity-container">
        <h2>&quot;Discount Clothes 50%&quot;</h2>
        <div className="discount-container">
          <article className="discount-commudity-box">
            <h3>men's pants</h3>
            <p className="price"><del>300$</del> 150$</p>
            <span className="view">100 <i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.3</span>
            <Image width={200} height={200} src="/man.jpg" alt="s;l" />

          </article>
          <article className="discount-commudity-box">
            <h3>men's pants</h3>
            <p className="price"><del>300$</del> 150$</p>
            <span className="view">100 <i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.3</span>
            <Image width={200} height={200} src="/man.jpg" alt="s;l" />

          </article>
          <article className="discount-commudity-box">
            <h3>men's pants</h3>
            <p className="price"><del>300$</del> 150$</p>
            <span className="view">100 <i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.3</span>
            <Image width={200} height={200} src="/man.jpg" alt="s;l" />

          </article>
          <article className="discount-commudity-box">
            <h3>men's pants</h3>
            <p className="price"><del>300$</del> 150$</p>
            <span className="view">100 <i className="fa-solid fa-eye"></i></span>
            <span className="score"><i className="fa-solid fa-star"></i> 4.3</span>
            <Image width={200} height={200} src="/man.jpg" alt="s;l" />

          </article>
        </div>

      </section>
    </main>
  )
}