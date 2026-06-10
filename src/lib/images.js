export const images = {
  hero: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  warehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  garage: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
  factory: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
  commercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  industrial: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  loadingDock: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  residential: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  overhead: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f7?w=800&q=80',
  cta: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80',
};

export const productImages = {
  'Commercial Overhead Doors': images.overhead,
  'Rolling Steel Doors': images.industrial,
  'Dock Levelers': images.loadingDock,
  'Dock Seals & Shelters': images.warehouse,
  'Residential Garage Doors': images.garage,
  'Garage Door Openers': images.residential,
  'Lock Systems & Hardware': images.commercial,
};

export const galleryImages = [
  { id: 1, src: images.loadingDock, title: 'Warehouse Dock Leveler Install', location: 'Edison, NJ', category: 'Commercial' },
  { id: 2, src: images.industrial, title: 'Rolling Steel Door Replacement', location: 'Newark, NJ', category: 'Commercial' },
  { id: 3, src: images.garage, title: 'Residential Garage Door Upgrade', location: 'Wayne, NJ', category: 'Residential' },
  { id: 4, src: images.overhead, title: 'Fire-Rated Door Installation', location: 'Jersey City, NJ', category: 'Commercial' },
  { id: 5, src: images.warehouse, title: 'Loading Dock Equipment', location: 'Paterson, NJ', category: 'Industrial' },
  { id: 6, src: images.factory, title: 'Factory Access Doors', location: 'Elizabeth, NJ', category: 'Industrial' },
];
