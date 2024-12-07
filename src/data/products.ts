import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bibit Tomat Cherry',
    description: 'Bibit tomat cherry berkualitas tinggi, cocok untuk urban farming',
    price: 15000,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=800',
    category: 'sayuran'
  },
  {
    id: '2',
    name: 'Bibit Cabai Rawit',
    description: 'Bibit cabai rawit tahan penyakit dengan hasil panen melimpah',
    price: 12000,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800',
    category: 'sayuran'
  },
  {
    id: '3',
    name: 'Bibit Jeruk Nipis',
    description: 'Bibit jeruk nipis hasil okulasi dengan buah lebat',
    price: 25000,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1590502593389-7c09051166dd?auto=format&fit=crop&q=80&w=800',
    category: 'buah'
  }
];