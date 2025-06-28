import { ServiceType } from "../Types";

export default function ServiceCard(service:ServiceType){

    return(
        <>
            <div  className="mt-10 w-full sm:w-[45%] md:w-[22%] rounded-2xl px-2 py-10 flex flex-col items-center gap-4 bg-white shadow-lg hover:bg-gray-200 hover:cursor-pointer">
                <div>
                    <img className="h-16 w-auto " src={`${service.image}`} alt={`${service.serviceName}`}/>
                </div>
                <p className="text-gray-600 text-2xl">{service.serviceName}</p>
            </div>
        </>
    );
}   