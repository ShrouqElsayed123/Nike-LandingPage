import { star } from "../assets/icons";

export default function ProductCard({ imgURL, name, price }) {
  return (
   <>
   <div className="flex flex-1 flex-col w-full max-sm:w-full">
    <img src={imgURL} alt="" />
   <div className="pl-2 space-y-1">
   <div className="flex gap-1 mt-3">
        <img src={star} alt="" width={20} height={20}/>
        <p>(4.5)</p>
    </div>
    <p className="font-semibold text-xl">{name}</p>
    <p className="text-coral-red font-bold">{price}</p>
   </div>
   </div>
   </>
  )
}
