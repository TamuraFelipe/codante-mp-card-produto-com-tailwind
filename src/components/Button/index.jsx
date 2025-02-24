/* eslint-disable react/prop-types */

const Button = ({children}) => {
  return (
    <button className="relative px-1.5 py-[6px] xl:py-[12px] rounded-[65px] text-white text-[14px] xl:text-[20px] 
    bg-[linear-gradient(to_right,#138CFF_0%,rgba(22,19,116,0.47)_100%)] 
    transition-all duration-300 ease-in-out 
    hover:scale-105 hover:shadow-[0_0_12px_rgba(19,140,255,0.6)] 
    hover:bg-[linear-gradient(to_right,#0F7EE6_0%,rgba(18,17,98,0.6)_100%)] cursor-pointer">
        {children}
    </button>
  )
}

export default Button