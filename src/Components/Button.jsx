import { arrowRight } from "../assets/icons";

export default function Button() {
  return (
    <>
    <div>
        <button className="bg-coral-red  text-white rounded-full px-4 py-2 flex gap-3">
            Shop Now
            <img src={arrowRight} alt="arroe right icon" />
        </button>
    </div>
    </>
  )
}
