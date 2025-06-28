import ServiceCard from './ServiceCard/ServiceCard';
import {services} from './Types/index';
export default function ServicesComponents() {
  return (
    <div className="relative w-full h-[30%] bg-cover bg-center bg-[url('/foodtable.png')]">

      <div className="absolute inset-0 bg-white bg-opacity-50" />

    <div className="h-25"></div>
      <div className="relative z-10 flex flex-wrap justify-center gap-16 px-6 py-24">
       
         
                 {services.map((s, indx) => (
          <ServiceCard
            image={s.image}
            serviceName={s.serviceName}
            url={s.url}
            key={`${s.serviceName}_${indx}`}
          />
        ))}
         
    
      </div>
    </div>
  );
}
