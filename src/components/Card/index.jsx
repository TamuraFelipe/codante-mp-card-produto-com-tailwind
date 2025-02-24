import StarRating from "../StarRating"

/* eslint-disable react/prop-types */
const carPng = "assets/car.png"

const Card = ({image, name, description, assessment, avaliation_quantity, price}) => {
    return (
    <div className="w-full md:w-[calc(50%-24px)] max-[564px]: rounded-3xl overflow-hidden  border border-gray-300 shadow-card">
        <img className="w-full block" src={image} alt={name} />
        <div className="p-0.5 xl:p-2.5">
            <h2 className="text-black text-title xl:text-title-desktop font-bold mb-0.5">{name}</h2>
            <p className="text-description xl:text-description-desktop mb-0.5 font-medium">{description}</p>
            <div className="flex items-center gap-0.5 mb-0.5">
                <StarRating rating={assessment} /> 
                <span className="text-description xl:text-description-desktop text-neutral-500">({avaliation_quantity} avaliações)</span>
            </div>
            <div className="flex items-center justify-between mb-0.5">
                <p className="font-bold text-[22px] xl:text-[40px] text-sky-500">R$ {price.toFixed(2)}</p>
                <button className="relative px-1.5 py-[6px] xl:py-[12px] rounded-[65px] text-white text-[14px] xl:text-[20px] 
                    bg-[linear-gradient(to_right,#138CFF_0%,rgba(22,19,116,0.47)_100%)] 
                    transition-all duration-300 ease-in-out 
                    hover:scale-105 hover:shadow-[0_0_12px_rgba(19,140,255,0.6)] 
                    hover:bg-[linear-gradient(to_right,#0F7EE6_0%,rgba(18,17,98,0.6)_100%)]">
                Comprar agora
                </button>

            </div>
            <div className="flex items-center gap-0.5">
                <img src={carPng} alt="Delivery icon" />
                <span className="text-description text-neutral-400">Frete grátis para todo o Brasil</span>
            </div>
        </div>
    </div>
  )
}

export default Card