export interface Product {
    available: boolean,
    id: number;
    image: string;
    name: string;
    popular: boolean;
    price: string;
    rating: number;
    votes: number
}

/**
 * {
    "id": 1,
    "name": "Cappuccino",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
    "price": "$5.20",
    "rating": 4.7,
    "votes": 65,
    "popular": true,
    "available": true
  },
 */