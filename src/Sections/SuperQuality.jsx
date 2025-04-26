import { shoe8 } from "../assets/images";
import Button from "../Components/Button";

export default function SuperQuality() {
  return (
   <>
   <section className="max-container">
    <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full"> 
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-4xl font-semibold capitalize  lg:max-w-lg ">We Provide You
           <span className="text-coral-red"> Super  Quality </span>
           Shoes</h1>
        <p className="lg:max-w-lg info-text ">Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <Button label="View Details"/>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt=""
         width={570}
         height={522}
         className='object-contain' />
      </div>
    </div>
   </section>
   </>
  )
}
