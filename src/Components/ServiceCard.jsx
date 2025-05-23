
export default function ServiceCard({imgURL,label,subtext}) {
  return (
   <>
   <div  className=' flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 '>
   <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
     <img src={imgURL} alt="" width={24} height={24}/>
     </div>
     <h1 className="py-4 text-xl font-semibold">{label}</h1>
     <p className="text-slate-gray">{subtext}</p>
   </div>
   </>
  )
}


