import Button from "../Button"
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
            <div className="flex flex-col md:flex-row items-center justify-between mb-0.5">
                <p className="font-bold text-price xl:text-price-desktop text-sky-500">R$ {price.toFixed(2)}</p>
                <Button>Comprar agora</Button>
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