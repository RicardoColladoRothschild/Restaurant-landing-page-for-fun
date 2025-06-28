
export type Services = 'Carbon-Food' | 'Fluent-Food' | 'Lucide-Cake' | "Mdi-Food";

export type ServiceType = {
    serviceName: Services;
    url: string;
    image: string;
}



//fakeData

export const services: ServiceType[] = [
    {serviceName:"Carbon-Food", image:"./carbonStore.png", url:"./carbonfood"},
    {serviceName:"Fluent-Food", image:"./fluentFood.png", url:"./fluentfood"},
    {serviceName:"Lucide-Cake", image:"./lucideCake.png", url:"./lucidecake"},
    {serviceName:"Mdi-Food", image:"./mdifood.png", url:"./mdifood"},
]