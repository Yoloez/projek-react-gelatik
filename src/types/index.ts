export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: 'sayuran' | 'buah' | 'rempah';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserProfile {
  name: string;
  age: number;
  totalSales: number;
  balance: number;
  avatar: string;
}