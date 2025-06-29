import {promotions} from './types/index';
import PromotionCard from './PromotionCard';
export default function PromotionsComponent(){


    return(
        <>
            <div className="w-full h-[30%] bg-white flex flex-col pt-4">
                <div className="pt-6 -mb-4">
                    <h2 className='text-gray-400 font-bold text-2xl text-center'>PROMOTIONS</h2>
                </div>
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