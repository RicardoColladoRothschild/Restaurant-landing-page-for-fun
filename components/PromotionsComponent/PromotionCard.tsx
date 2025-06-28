import { PromotionType } from "./types";



export default function PromotionCard(promotion: { prom: PromotionType }) {
  const { prom } = promotion;
  const { description, image, promotion: promotionName, url, disaccount } = prom;

  return (
    <div className="flex mt-10 w-full sm:w-[45%] md:w-[22%] border-2 shadow rounded-xl px-4 py-10 items-center">
      <div className="w-[30%]">
        <img className="h-20 w-auto" src={image} alt={promotionName} />
      </div>
      <div className="w-[70%]  flex flex-col gap-2 justify-center items-center bg-red-200">
        <h2 className="text-black text-xl text-center font-bold">{promotionName}</h2>
      </div>
    </div>
  );
}
