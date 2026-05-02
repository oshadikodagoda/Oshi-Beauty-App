export interface Product {
  id: number;
  title: string;
  slug: string;
  category: string;
  categoryName: string;
  brand: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  description: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  // SKINCARE (4)
  { id: 1, title: 'Attitude Super Leaves Hand Soap', slug: 'attitude-super-leaves-hand-soap', category: 'skincare', categoryName: 'Skincare', brand: 'Attitude', price: 'LKR 1,250', originalPrice: 'LKR 1,520', discount: '18% OFF', description: 'Gentle hand soap made with natural ingredients.', image: 'https://images.unsplash.com/photo-1612892485217-9d8c5c6efbf0?w=400', rating: 4.7 },
  { id: 2, title: 'Olay Ultra Moisture Shea Butter Body Wash', slug: 'olay-ultra-moisture-shea-butter-body-wash', category: 'skincare', categoryName: 'Skincare', brand: 'Olay', price: 'LKR 2,100', originalPrice: 'LKR 2,500', discount: '16% OFF', description: 'Ultra-moisturizing body wash with shea butter.', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400', rating: 4.8 },
  { id: 3, title: 'Vaseline Men Body and Face Lotion', slug: 'vaseline-men-body-and-face-lotion', category: 'skincare', categoryName: 'Skincare', brand: 'Vaseline', price: 'LKR 1,850', originalPrice: 'LKR 2,130', discount: '13% OFF', description: '2-in-1 lotion for body and face.', image: 'https://images.unsplash.com/photo-1620916566397-39f1143ab9be?w=400', rating: 4.6 },
  { id: 4, title: 'Moisturizing Body Wash', slug: 'moisturizing-body-wash', category: 'skincare', categoryName: 'Skincare', brand: 'Olay', price: 'LKR 1,850', originalPrice: 'LKR 2,500', discount: '26% OFF', description: 'Deeply moisturizing body wash.', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400', rating: 4.9 },

  // MAKEUP (8)
  { id: 5, title: 'Velvet Matte Lipstick - Crimson', slug: 'velvet-matte-lipstick-crimson', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 3,250', originalPrice: 'LKR 4,500', discount: '28% OFF', description: 'Long-wearing matte lipstick.', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', rating: 4.9 },
  { id: 6, title: 'Silk Veil Foundation', slug: 'silk-veil-foundation', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 4,800', originalPrice: 'LKR 6,500', discount: '26% OFF', description: 'Weightless medium-to-full coverage foundation.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0nUZkVBIX72CBdhh-gUpsa9CblNJRrdAwwOgHrITyEXx4bo4m6MgmtUwL6CfCRERa1xVeS7tHLM0vSdjZiAhNUgCnHvI5VfH_YMaQO4riv13VrRNmFYUarWh_dnwi0e00Oz75snmoNb4sPKEr_7RfsgSyjTR39aolhRb1vHXF7xpRWvP_hypCI6mzDGtbxH6oUaQasHAMRCMRE5fbN8PsvEZx_VPDJ1P6meaPgnzS2n5WzORYiuHl_RX10FbJUE5weq0m86-tNcp9', rating: 4.8 },
  { id: 7, title: 'Moonlight Shimmer Palette', slug: 'moonlight-shimmer-palette', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 5,400', originalPrice: 'LKR 7,200', discount: '25% OFF', description: '10 versatile eyeshadow shades.', image: 'https://images.unsplash.com/photo-1512496015851-a90ab38aba96?w=400', rating: 4.7 },
  { id: 8, title: 'Lash Princess Mascara', slug: 'lash-princess-mascara', category: 'makeup', categoryName: 'Makeup', brand: 'Essence', price: 'LKR 1,850', originalPrice: 'LKR 2,500', discount: '26% OFF', description: 'Volumizing and lengthening mascara.', image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=400', rating: 4.8 },
  { id: 9, title: 'Rose Petal Blush', slug: 'rose-petal-blush', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 2,200', description: 'Natural flush with buildable color.', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.6 },
  { id: 10, title: 'Glass Glaze Lip Gloss', slug: 'glass-glaze-lip-gloss', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 2,400', description: 'Non-sticky ultra-shiny lip gloss.', image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400', rating: 4.7 },
  { id: 11, title: 'BB Cream SPF 30', slug: 'bb-cream-spf-30', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 3,500', description: 'Tinted moisturizer with sun protection.', image: 'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=400', rating: 4.5 },
  { id: 12, title: 'Smokey Eye Palette', slug: 'smokey-eye-palette', category: 'makeup', categoryName: 'Makeup', brand: 'Oshi Beauty', price: 'LKR 4,200', description: 'Neutral to dark shades for smokey eyes.', image: 'https://images.unsplash.com/photo-1512496015851-a90ab38aba96?w=400', rating: 4.8 },

  // FRAGRANCE (8)
  { id: 13, title: 'Mistral Oud', slug: 'mistral-oud', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 4,850', originalPrice: 'LKR 6,800', discount: '29% OFF', description: 'Marine and woody amber fragrance.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPTCUT-c7tjtGt9AY5T7BKSYJXs66KESF11h3NYrSZfYQ5JC1jwJwSv88mvcV8aB6VOx85hA5VVht6AHOztB_6BffHdMVNMFULAPZ_jruvHC8yP6SxB0kNn_rOM4LrfCIO9CUiphOpnAKEgaXn_Q4cLDcajaH3vdgS5dFQQk1ybnAd72h70gv2Tfmvg0XZSONhOeZ5HB-Jg0Dj6_MY78xL7qjFPZRCgvpdxvgqHMYxDlgjXWZ_VWemTgNJn1pjAtt3aOIyPiX6g6OX', rating: 4.9 },
  { id: 14, title: 'Midnight Bloom', slug: 'midnight-bloom', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 14,800', originalPrice: 'LKR 18,500', discount: '20% OFF', description: 'Rose and oud fragrance.', image: 'https://images.unsplash.com/photo-1594035910386-e2f6ea0b0a3b?w=400', rating: 4.8 },
  { id: 15, title: 'Citrus Dawn', slug: 'citrus-dawn', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 8,900', originalPrice: 'LKR 11,500', discount: '23% OFF', description: 'Bergamot and neroli fragrance.', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.7 },
  { id: 16, title: 'Velvet Amber', slug: 'velvet-amber', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 11,200', originalPrice: 'LKR 14,800', discount: '24% OFF', description: 'Amber and vanilla fragrance.', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400', rating: 4.8 },
  { id: 17, title: 'Oshi No.1', slug: 'oshi-no1', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 12,500', originalPrice: 'LKR 16,000', discount: '22% OFF', description: 'Jasmine and sandalwood signature scent.', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400', rating: 4.9 },
  { id: 18, title: 'White Tea', slug: 'white-tea', category: 'fragrance', categoryName: 'Fragrance', brand: 'Elizabeth Arden', price: 'LKR 6,500', originalPrice: 'LKR 8,900', discount: '27% OFF', description: 'Fresh and clean white tea scent.', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.6 },
  { id: 19, title: 'Gardenia Bloom', slug: 'gardenia-bloom', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 7,200', originalPrice: 'LKR 9,500', discount: '24% OFF', description: 'White floral bouquet fragrance.', image: 'https://images.unsplash.com/photo-1594035910386-e2f6ea0b0a3b?w=400', rating: 4.7 },
  { id: 20, title: 'Sandalwood Mist', slug: 'sandalwood-mist', category: 'fragrance', categoryName: 'Fragrance', brand: 'Oshi Beauty', price: 'LKR 5,800', originalPrice: 'LKR 7,800', discount: '26% OFF', description: 'Warm sandalwood and musk.', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400', rating: 4.8 },

  // GIFTS (8)
  { id: 21, title: 'The Luminous Starter Kit', slug: 'luminous-starter-kit', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 4,900', originalPrice: 'LKR 6,200', discount: '21% OFF', description: 'Limited edition kit with our most coveted formulas.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuPVVGhvyzZo_b3upgOAwHXskIpNeA10E7WV-C-Yr_kpaXS67wLO31E7FVLu_apj2QNnPZOZX1JGt8EeemRB2d6PuUzamb0WCH9pVamDEWskONSWQJipmg7ribx3RXYXcGbxrdjd1bb_awWruRzXhlzBTQFsaFHC5p5fDp7PP7ymg9MbTLrptUysYAytniGDyli41vCsP_XrOlS_F1PH4ciYu662_uoYT8qRyEIzWOFB94WLgIrc-frK25QsKGzv4zr5u2bSMOpCIA', rating: 4.9 },
  { id: 22, title: 'The Radiance Ritual', slug: 'the-radiance-ritual', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 15,800', originalPrice: 'LKR 19,500', discount: '19% OFF', description: 'Full-size serum and moisturizer set.', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', rating: 4.8 },
  { id: 23, title: 'Signature Discovery Set', slug: 'signature-discovery-set', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 8,500', originalPrice: 'LKR 11,000', discount: '23% OFF', description: 'Three mini fragrances.', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400', rating: 4.7 },
  { id: 24, title: 'Colour Wardrobe', slug: 'colour-wardrobe', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 12,900', originalPrice: 'LKR 16,800', discount: '23% OFF', description: '6 lipsticks + 3 glosses.', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.8 },
  { id: 25, title: 'The Atelier Box', slug: 'the-atelier-box', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 22,500', originalPrice: 'LKR 28,000', discount: '20% OFF', description: 'Curated bestsellers box.', image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400', rating: 4.9 },
  { id: 26, title: 'Holiday Beauty Bundle', slug: 'holiday-beauty-bundle', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 18,500', originalPrice: 'LKR 24,000', discount: '23% OFF', description: 'Festive beauty bundle.', image: 'https://images.unsplash.com/photo-1549465220-1a8f3e3a3a3a?w=400', rating: 4.8 },
  { id: 27, title: 'Mini Makeup Kit', slug: 'mini-makeup-kit', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 4,800', originalPrice: 'LKR 6,500', discount: '26% OFF', description: 'Travel-friendly makeup essentials.', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400', rating: 4.6 },
  { id: 28, title: 'Fragrance Mini Trio', slug: 'fragrance-mini-trio', category: 'gifts', categoryName: 'Gifts', brand: 'Oshi Beauty', price: 'LKR 5,200', originalPrice: 'LKR 7,200', discount: '28% OFF', description: 'Three signature scents.', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400', rating: 4.7 }
];

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getTrendingProducts = (limit: number = 4) => {
  return products.slice(0, limit);
};