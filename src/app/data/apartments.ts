export interface Apartment {
  id: string;
  title: string;
  type: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  status: 'available' | 'occupied';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  floor: string;
}

export const apartments: Apartment[] = [
  {
    id: 'apt-001',
    title: 'Executive 3-Bedroom Flat',
    type: '3 Bedroom',
    price: 850000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&h=600&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1630699375019-c334927264df?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1662454419716-c4c504728811?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'A beautifully finished executive 3-bedroom flat with spacious living areas, modern kitchen, and stunning views. Perfect for families seeking comfort and style in a secure estate environment.',
    features: ['Fitted Kitchen', 'POP Ceiling', 'Wardrobes', 'Tiled Floors', 'Private Balcony', 'Ensuite Master Bedroom'],
    floor: '2nd Floor',
  },
  {
    id: 'apt-002',
    title: 'Luxury 2-Bedroom Suite',
    type: '2 Bedroom',
    price: 600000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1611094016919-36b65678f3d6?w=800&h=600&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1611094016919-36b65678f3d6?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1708113388262-17fdf0e21205?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'A modern 2-bedroom suite offering premium finishes and ample space. Ideal for young professionals or small families looking for quality living in a peaceful environment.',
    features: ['Open Plan Living', 'Modern Kitchen', 'Built-in Wardrobes', 'City Views', 'Parking Space'],
    floor: '3rd Floor',
  },
  {
    id: 'apt-003',
    title: 'Premier 4-Bedroom Penthouse',
    type: '4 Bedroom',
    price: 1200000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 2600,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=800&h=600&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1760072513367-55182245e76c?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'The crown jewel of KINGS PALACE Estate. This 4-bedroom penthouse offers unrivaled luxury with panoramic views, premium fixtures, and an expansive rooftop terrace.',
    features: ['Rooftop Terrace', 'Panoramic Views', 'Smart Home System', 'Double Parking', 'Jacuzzi', 'Private Study'],
    floor: 'Top Floor',
  },
  {
    id: 'apt-004',
    title: 'Studio Executive Suite',
    type: 'Studio',
    price: 350000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1708113388262-17fdf0e21205?w=800&h=600&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1708113388262-17fdf0e21205?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1662454419736-de132ff75638?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'A smart, efficiently designed studio suite perfect for single professionals or students. Fully fitted and ready to move in with modern amenities in a secure estate.',
    features: ['Kitchenette', 'Built-in Storage', 'High-Speed Internet', 'Security Access', 'Parking'],
    floor: '1st Floor',
  },
  {
    id: 'apt-005',
    title: 'Classic 2-Bedroom Apartment',
    type: '2 Bedroom',
    price: 550000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1760072513367-55182245e76c?w=800&h=600&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1760072513367-55182245e76c?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'A classic 2-bedroom apartment combining comfort and affordability. Featuring quality finishes, generous storage, and access to all estate amenities.',
    features: ['Tiled Floors', 'Fitted Kitchen', 'Balcony', 'Parking Space', 'Security'],
    floor: '1st Floor',
  },
  {
    id: 'apt-006',
    title: 'Deluxe 3-Bedroom Duplex',
    type: '3 Bedroom',
    price: 1000000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    status: 'available',
    image: 'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=800&h=600&fit=crop&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1758957701419-2c6e266f7988?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=800&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1662454419716-c4c504728811?w=1200&h=800&fit=crop&auto=format',
    ],
    description: 'A stunning duplex offering split-level living with three spacious bedrooms, a private staircase, and premium interior finishes throughout.',
    features: ['Split-Level Design', 'Private Staircase', 'Ensuite Bedrooms', 'Large Living Room', 'Double Parking', 'Garden View'],
    floor: 'Ground & 1st',
  },
];

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString('en-NG')}/yr`;
}
