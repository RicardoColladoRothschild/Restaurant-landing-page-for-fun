import {promotions} from './types/index';
import PromotionCard from './PromotionCard';
export default function PromotionsComponent(){


    return(
        <>
            <div className="w-full h-[70%] bg-white">
                <div className="flex flex-wrap justify-center gap-16 py-10">
                    {promotions.map((p, indx)=>(
                       
                        <PromotionCard
                        key={`${indx}_${p.promotion}`}
                        prom={p}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}