
export type Promotion = 'Monster Food' | 'Pizza Rule' | 'Burger Palace' | 'Grill and Chill'

export type PromotionType = {
    promotion: Promotion;
    disaccount?:string;
    image:string;
    url:string;
    description:string;
}

export const promotions: PromotionType[] = [
  {
    promotion: 'Monster Food',
    disaccount: '20% Discount',
    image: './moster.png',
    url: '/promotions/monsterfood',
    description: 'Enjoy 20% OFF your first order.'
  },
  {
    promotion: 'Pizza Rule',
    disaccount: '15% Discount',
    image: './pizza.png',
    url: '/promotions/pizzarule',
    description: 'Enjoy 15% OFF during this week.'
  },
  {
    promotion: 'Burger Palace',
    disaccount: '2x1 Week',
    image: './burger.png',
    url: '/promotions/burgerpalace',
    description: 'Enjoy 2x1 on selected orders.'
  },
  {
    promotion: 'Grill and Chill',
    disaccount: '20% Discount',
    image: './grill.png',
    url: '/promotions/grillandchill',
    description: 'Get 20% OFF on your first order.'
  }
];

