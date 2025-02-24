/* eslint-disable react/prop-types */
import { Star } from "lucide-react";

const StarRating = ({ rating, maxStars = 5 }) => {
    const screenWidth = window.innerWidth;

  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        let fillColor = "text-gray-300"; // Padrão: estrela vazia

        if (rating >= starValue) {
          fillColor = "fill-yellow-400 text-yellow-400"; // Estrela cheia
        } else if (rating >= starValue - 0.5) {
          fillColor = "fill-yellow-400 text-yellow-400"; // Meia estrela
          return (
            <div key={index} className="relative">
              <Star size={screenWidth > 1279 ? 24 : 20} className="text-gray-300" />
              <Star
                size={screenWidth > 1279 ? 24 : 20}
                className="fill-yellow-400 text-yellow-400 absolute top-0 left-0"
                style={{ clipPath: "inset(0 50% 0 0)" }} // Máscara para meia estrela
              />
            </div>
          );
        }

        return <Star key={index} size={screenWidth > 1279 ? 24 : 20} className={fillColor} />;
      })}
    </div>
  );
};

export default StarRating;
