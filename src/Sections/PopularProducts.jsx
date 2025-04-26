import ProductCard from "../Components/productCard";
import { products } from "../constants";

export default function PopularProducts() {
  return (
    <>
    <section className="max-container ">
      <div>
      <p className="text-3xl font-semibold">Our <span className="text-coral-red">Popular</span> Products</p>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after
      selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gsp-6">
         {
          products.map((product)=>(
            <ProductCard key={product.name} {...product} />
          ))
         }
      </div>
    </section>
    
    </>
  )
}
