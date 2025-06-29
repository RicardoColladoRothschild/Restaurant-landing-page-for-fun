import Foot from "@/components/Foot/Foot";
import Navbar from "@/components/Navbar/Navbar";
import PromotionsComponent from "@/components/PromotionsComponent/PromotionsComponent";
import RecentsDeliveryComponent from "@/components/RecentDelivery/RecentsDeliveryComponent";
import ServicesComponents from "@/components/ServicesComponents/ServicesComponents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
       <Navbar/>
       <main className="flex flex-col h-screen">
        <ServicesComponents/>
        <PromotionsComponent/>
        <RecentsDeliveryComponent/>
        <Foot/>
       </main>
    </div>
  );
}
