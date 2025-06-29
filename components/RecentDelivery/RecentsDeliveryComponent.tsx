import RecentDeliveryCard from "./RecentDeliveryCard";
import { recentDeliveryData } from "./types";



export default function RecentsDeliveryComponent(){


    return(
        <>
            <div className="w-full h-[40%] bg-white pl-10 flex flex-col gap-4">
               <div className="pl-10">
                 <h2 className="text-gray-600 font-bold text-2xl">{"Enjoy Again"}</h2>
               </div>
                <div className="flex flex-wrap px-4 mr-10">
                    
                    {recentDeliveryData.map((dev, indx)=>(
                           <RecentDeliveryCard
                           foodDetailed={dev.foodDetailed}
                           foodName={dev.foodName}
                           image={dev.image}
                           price={dev.price}
                           url=""
                           key={`${indx}_${dev.foodName}`}
                           
                           />
                    ))}
                </div>
            </div>
        </>
    );
}