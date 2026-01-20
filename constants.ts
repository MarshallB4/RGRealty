import { Listing, MarketDataPoint, ServiceItem } from './types';

export const COMPANY_NAME = "RGRealty";
export const AGENT_NAME = "Roland Gjelaj";
export const AGENCY_NAME = "eXp Realty";
export const LOCATION = "Calgary, Alberta";

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    price: 849000,
    address: "123 Aspen Woods Blvd SW",
    city: "Calgary",
    province: "AB",
    beds: 4,
    baths: 3.5,
    sqft: 2450,
    imageUrl: "https://picsum.photos/800/600?random=1",
    type: "House",
    featured: true
  },
  {
    id: 2,
    price: 425000,
    address: "505 4th Avenue SW",
    city: "Calgary",
    province: "AB",
    beds: 2,
    baths: 2,
    sqft: 950,
    imageUrl: "https://picsum.photos/800/600?random=2",
    type: "Condo",
    featured: false
  },
  {
    id: 3,
    price: 610000,
    address: "88 Mahogany Row SE",
    city: "Calgary",
    province: "AB",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    imageUrl: "https://picsum.photos/800/600?random=3",
    type: "Townhouse",
    featured: true
  },
  {
    id: 4,
    price: 1250000,
    address: "44 Elbow Park Dr SW",
    city: "Calgary",
    province: "AB",
    beds: 5,
    baths: 4,
    sqft: 3200,
    imageUrl: "https://picsum.photos/800/600?random=4",
    type: "House",
    featured: true
  },
  {
    id: 5,
    price: 315000,
    address: "1205 Beltline Ave SW",
    city: "Calgary",
    province: "AB",
    beds: 1,
    baths: 1,
    sqft: 650,
    imageUrl: "https://picsum.photos/800/600?random=5",
    type: "Condo",
    featured: false
  },
  {
    id: 6,
    price: 550000,
    address: "22 Tuscany Ravine Rd NW",
    city: "Calgary",
    province: "AB",
    beds: 3,
    baths: 2.5,
    sqft: 1650,
    imageUrl: "https://picsum.photos/800/600?random=6",
    type: "House",
    featured: false
  }
];

export const MOCK_MARKET_DATA: MarketDataPoint[] = [
  { month: 'Jan', avgPrice: 540000, inventory: 2200 },
  { month: 'Feb', avgPrice: 545000, inventory: 2150 },
  { month: 'Mar', avgPrice: 552000, inventory: 2300 },
  { month: 'Apr', avgPrice: 560000, inventory: 2450 },
  { month: 'May', avgPrice: 565000, inventory: 2600 },
  { month: 'Jun', avgPrice: 558000, inventory: 2700 },
  { month: 'Jul', avgPrice: 555000, inventory: 2650 },
  { month: 'Aug', avgPrice: 562000, inventory: 2500 },
  { month: 'Sep', avgPrice: 570000, inventory: 2400 },
  { month: 'Oct', avgPrice: 575000, inventory: 2300 },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Buying a Home",
    description: "Expert guidance through the home buying process, from search to keys.",
    icon: "home"
  },
  {
    title: "Selling Your Property",
    description: "Strategic marketing and negotiation to get you the best price for your home.",
    icon: "trending-up"
  },
  {
    title: "Luxury Estate",
    description: "Specialized service for high-end properties requiring discrete and premium handling.",
    icon: "star"
  },
  {
    title: "Home Evaluation",
    description: "Accurate, data-driven market assessments to determine your home's true value.",
    icon: "bar-chart"
  }
];