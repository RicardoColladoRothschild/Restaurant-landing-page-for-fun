import { RecentDelivery } from "./types";



export default function RecentDeliveryCard(delivery:RecentDelivery ){


    return(
        <div className="flex gap-2 w-full sm:w[45%] md:w-[22%] border-2 shadow rounded-xl px-4 py-10">
            <div className="w-[25%] flex">
                <img className="h-25 w-20" src={delivery.image} alt={delivery.foodName}/>
                 <div className="w-px bg-gray-400 mx-4 h-30" /> 
            </div>
            <div className="w-[65%] flex flex-col">
                <h2 className="text-black text-xl font-bold">{delivery.foodName}</h2>
                <p className="text-gray-400 text-lg">{delivery.foodDetailed.toUpperCase()}</p>
                <p className="text-green-600 text-lg font-bold">{delivery.price.toUpperCase()}</p>
            </div>
            <div className="w-[15%]">
                <button className="text-white text-lg font-bold bg-yellow-400 h-20 w-full hover:bg-yellow-300 hover:cursor-pointer rounded-xl">
                Add to Cart
            </button>
            </div>
        </div>
    );
}