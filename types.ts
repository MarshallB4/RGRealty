export interface Listing {
  id: number;
  price: number;
  address: string;
  city: string;
  province: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'House' | 'Condo' | 'Townhouse';
  featured?: boolean;
}

export interface MarketDataPoint {
  month: string;
  avgPrice: number;
  inventory: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}