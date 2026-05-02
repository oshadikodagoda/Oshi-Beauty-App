// src/data/products.ts

export interface Product {
  id: number;
  title: string;
  slug: string;
  badge: string;
  category: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  brand: string;
}

export const products: Product[] = [
  // Skincare
  {
    id: 1,
    title: 'Midnight Regeneration Serum',
    slug: 'midnight-regeneration-serum',
    badge: 'Overnight Treatment',
    category: 'skincare',
    price: 'LKR 4,950',
    description: 'A concentrated overnight elixir designed to harmonize with your skin\'s nocturnal rhythm.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    brand: 'Oshi Beauty'
  },
  {
    id: 2,
    title: 'Ceramide Rich Cream',
    slug: 'ceramide-rich-cream',
    badge: 'Intensive Moisturizer',
    category: 'skincare',
    price: 'LKR 3,850',
    description: 'A deeply nourishing cream that restores the skin\'s natural barrier.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
    brand: 'Oshi Beauty'
  },
  {
    id: 3,
    title: 'Radiance Glow Oil',
    slug: 'radiance-glow-oil',
    badge: 'Facial Oil',
    category: 'skincare',
    price: 'LKR 4,900',
    description: 'A lightweight, fast-absorbing facial oil that instantly boosts radiance.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    brand: 'Oshi Beauty'
  },
  {
    id: 4,
    title: 'Pure Balance Toner',
    slug: 'pure-balance-toner',
    badge: 'Balancing Toner',
    category: 'skincare',
    price: 'LKR 2,450',
    description: 'An alcohol-free toner that removes residual impurities.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    brand: 'Oshi Beauty'
  },
  // Makeup
  {
    id: 5,
    title: 'Velvet Matte Lipstick',
    slug: 'velvet-matte-lipstick',
    badge: 'Lipstick',
    category: 'makeup',
    price: 'LKR 3,250',
    description: 'A weightless, long-wearing formula that delivers intense color.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',
    brand: 'Oshi Beauty'
  },
  {
    id: 6,
    title: 'Silk Veil Foundation',
    slug: 'silk-veil-foundation',
    badge: 'Foundation',
    category: 'makeup',
    price: 'LKR 4,800',
    description: 'A weightless, medium-to-full coverage foundation.',
    image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=400',
    brand: 'Oshi Beauty'
  },
  {
    id: 7,
    title: 'Eye Palettes',
    slug: 'eye-palettes',
    badge: 'Eyeshadow',
    category: 'makeup',
    price: 'LKR 5,400',
    description: '10 versatile shades for endless eye looks.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90ab38aba96?w=400',
    brand: 'Oshi Beauty'
  },
  {
    id: 8,
    title: 'Glass Glaze Gloss',
    slug: 'glass-glaze-gloss',
    badge: 'Lip Gloss',
    category: 'makeup',
    price: 'LKR 2,400',
    description: 'Non-sticky, ultra-shiny lip gloss.',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400',
    brand: 'Oshi Beauty'
  },
  // Fragrance
  {
    id: 9,
    title: 'Mistral Oud',
    slug: 'mistral-oud',
    badge: 'Eau De Parfum',
    category: 'fragrance',
    price: 'LKR 4,850',
    description: 'A celestial encounter between Mediterranean winds and Cambodian Oud.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
    brand: 'Oshi Beauty'
  },
  // Gifts
  {
    id: 10,
    title: 'The Luminous Starter Kit',
    slug: 'luminous-starter-kit',
    badge: 'Gift Set',
    category: 'gifts',
    price: 'LKR 4,900',
    originalPrice: 'LKR 6,200',
    description: 'Limited edition kit combining our most coveted formulas.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400',
    brand: 'Oshi Beauty'
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};