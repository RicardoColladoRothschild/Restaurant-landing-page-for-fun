import { PromotionType } from "./types";



export default function PromotionCard(promotion: { prom: PromotionType }) {
  const { prom } = promotion;
  const { description, image, promotion: promotionName, url, disaccount } = prom;

  return (
    <div className="flex mt-10 w-full sm:w-[35%] md:w-[22%] border-2 shadow rounded-xl px-4 py-10 items-center hover:bg-gray-200 hover:cursor-pointer">
      <div className="w-[25%] flex">
        <img className="h-20 w-auto" src={image} alt={promotionName} />
        <div className="w-px bg-gray-400 mx-4 h-30" /> 
      </div>
      
      <div className="w-[60%] flex flex-col">
        <h2 className="text-black text-xl font-bold">{promotionName}</h2>
        <p className="text-green-400 text-lg  font-bold">{disaccount}</p>
        <p className="text-gray-400 text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
}
