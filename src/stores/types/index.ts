export interface ProductTypes {
   id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
      },
      addedToCart:boolean;
    }
      
export interface CartTypes {
 
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
        quantity: number
      }
      
