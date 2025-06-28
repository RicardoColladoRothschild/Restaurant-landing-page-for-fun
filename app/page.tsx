import Navbar from "@/components/Navbar/Navbar";
import PromotionsComponent from "@/components/PromotionsComponent/PromotionsComponent";
import ServicesComponents from "@/components/ServicesComponents/ServicesComponents";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Navbar/>
       <main className="flex flex-col h-screen">
        <ServicesComponents/>
        <PromotionsComponent/>
       </main>
    </div>
  );
}
