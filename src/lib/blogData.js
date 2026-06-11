import { images } from './images';

export const blogCategories = ['Window', 'Material', 'Insight'];

export const blogPosts = [
  {
    slug: '7-mind-numbing-facts-about-windows',
    title: '7 Mind Numbing Facts About Windows You must Know',
    date: 'November 27, 2021',
    category: 'Window',
    image: images.residential,
    imageAlt: 'Construction workers installing new window in house',
    excerpt:
      'Discover surprising facts about modern window technology — from insulation ratings to UV protection — that every homeowner should know before making a purchase.',
    content: [
      'Modern windows do far more than let light in. Today\'s glazing systems are engineered for thermal performance, noise reduction, and long-term durability — especially important in Bali\'s tropical climate.',
      'Double and triple glazing can reduce heat transfer significantly, lowering air-conditioning costs while keeping interiors comfortable year-round. Low-E coatings reflect infrared heat without blocking natural daylight.',
      'UV-filtering glass protects furniture, flooring, and artwork from fading caused by harsh sunlight — a common issue for villas and homes with large glass openings.',
      'Acoustic-rated windows can cut outside noise by up to 70%, making them ideal for properties near busy roads or commercial areas.',
      'Quality frames — whether aluminum, uPVC, or wood — affect lifespan, maintenance, and resale value. The right choice depends on exposure, budget, and design goals.',
      'Professional measurement and installation matter as much as the product itself. Even premium windows underperform when fitted incorrectly.',
      'Before you buy, compare warranty terms, energy ratings, and after-sales support. A trusted installer like Windco helps you navigate every option with confidence.',
    ],
  },
  {
    slug: 'home-value-windows-doors',
    title: 'Do You Know How Home Value is Affected by Windows & Doors',
    date: 'November 27, 2021',
    category: 'Insight',
    image: images.commercial,
    imageAlt: 'Man measure and install curtain panel at the window',
    excerpt:
      "Upgrading your windows and doors isn't just about looks. Learn how the right choices can significantly boost your property's market value and curb appeal.",
    content: [
      'Windows and doors are among the first features buyers and guests notice. Updated, well-fitted units signal that a property has been cared for — and that translates directly into perceived value.',
      'Energy-efficient glazing is increasingly sought after in Bali\'s rental and resale market. Lower utility bills and better comfort make a property more attractive to both owners and tenants.',
      'Security upgrades — reinforced frames, multi-point locks, and impact-resistant glass — add peace of mind and can justify a higher asking price.',
      'Consistent style across all openings creates a cohesive exterior. Mismatched or aging units can make even a well-maintained home look dated.',
      'Documenting professional installation and warranty coverage gives buyers confidence that they won\'t face unexpected replacement costs soon after purchase.',
      'Whether you plan to sell soon or stay for years, investing in quality windows and doors is one of the most cost-effective ways to improve both daily living and long-term property value.',
    ],
  },
  {
    slug: 'choosing-right-material-window-door',
    title: 'Choosing the Right Material To Your Window & Door',
    date: 'November 27, 2021',
    category: 'Material',
    image: images.overhead,
    imageAlt: 'Handyman measuring window near client',
    excerpt:
      'Wood, uPVC, aluminum — each material has its pros and cons. Our expert guide helps you pick the right fit for your climate, budget, and style.',
    content: [
      'Aluminum is lightweight, corrosion-resistant, and ideal for modern designs. Slim profiles maximize glass area and suit Bali\'s coastal humidity when properly treated.',
      'uPVC offers excellent insulation at a competitive price point. It requires minimal maintenance and performs well in residential settings with standard opening sizes.',
      'Wood delivers timeless warmth and premium aesthetics. It needs more upkeep in humid climates but remains a top choice for luxury villas and heritage-style homes.',
      'Consider exposure: sea-facing properties benefit from marine-grade finishes; inland homes may prioritize thermal performance over salt resistance.',
      'Hardware quality — hinges, handles, and locking systems — should match the frame material. Cheap fittings on premium frames undermine the entire installation.',
      'Windco provides free on-site consultation to recommend materials based on your property, budget, and design vision. The right material is the one that balances beauty, performance, and longevity for your specific project.',
    ],
  },
];

export function getPostBySlug(slug) {
  if (!slug) return undefined;
  const decoded = decodeURIComponent(slug);
  return blogPosts.find((post) => post.slug === decoded);
}
