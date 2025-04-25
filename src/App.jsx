import './index.css'
import CustomersReviews from './Sections/CustomersReviews'
import Footer from './Sections/Footer'
import Hero from './Sections/Hero'
import Nav from './Components/Nav'
import PopularProducts from './Sections/PopularProducts'
import Services from './Sections/Services'
import SpecialOffers from './Sections/SpecialOffers'
import Subscribe from './Sections/Subscribe'
import SuperQuality from './Sections/SuperQuality'

function App() {

  return (
  <>
<main className='relative'>
  <Nav /> 
  <section className='xl:padding-1 wide:padding-r padding-b'>
   <Hero />
  </section>
  <section className='padding'> <PopularProducts /></section>
  <section className='padding'> <SuperQuality /></section>
  <section className='padding-x py-10'> <Services /></section>
  <section className='padding'> <SpecialOffers /></section>
  <section className='padding bg-pale-blue'> <CustomersReviews /></section>
  <section className='padding-x sm:py-32 py-16 w-full'> <Subscribe /></section>
  <section className='padding-x padding-t pb-8 bg-black'> <Footer /></section>
</main>
  </>
  )
}

export default App
