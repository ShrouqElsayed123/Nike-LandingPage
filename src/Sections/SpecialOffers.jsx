import {offer} from '../assets/images'
import  Button  from "../components/Button";
import { arrowRight } from "../assets/icons";

export default function SpecialOffers() {
  return (
   <>
   <section className="max-container">
   <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-16 py-10 gap-10">
    <div className=' flex-1'>
      <img src={offer} alt="specialoffer" className='object-cover w-full h-full' />
    </div>
    <div className='w-full max-w-md text-left'>
      <h1 className='text-3xl font-bold'><span className='text-coral-red'>Special</span> Offers</h1>
      <p className='text-slate-gray leading-1 pt-5'> Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
          
          <p className='text-slate-gray leading-1 py-5'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
          </p>
          <div className='flex items-center gap-10'>
            <Button label="Shop now" iconURL={arrowRight} />
            <div className='rounded-full px-4 py-2 text-gray-700 border border-gray-700 w-fit'>Learn More </div>
          </div>
    </div>
    </div>
   </section>
   
   </>
  )
}
