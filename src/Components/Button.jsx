
export default function Button({ label,
    iconURL}) {
  return (
    <>
    <div>
        <button className="bg-coral-red  text-white rounded-full px-4 py-2 flex gap-3">
            {label}
            {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
        </button>
    </div>
    </>
  )
}
