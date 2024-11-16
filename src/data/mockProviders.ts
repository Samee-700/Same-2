export interface LoanProvider {
  id: string;
  name: string;
  rating: number;
  distance: number;
  address: string;
  loanTypes: string[];
  minAmount: number;
  maxAmount: number;
  minAPR: number;
  image: string;
}

export const providers: LoanProvider[] = [
  {
    id: '1',
    name: 'Premier Financial',
    rating: 4.8,
    distance: 1.2,
    address: '123 Financial District, NY',
    loanTypes: ['Personal', 'Business', 'Home Improvement'],
    minAmount: 5000,
    maxAmount: 50000,
    minAPR: 5.99,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: '2',
    name: 'Liberty Loans',
    rating: 4.5,
    distance: 2.4,
    address: '456 Liberty Ave, NY',
    loanTypes: ['Personal', 'Auto', 'Debt Consolidation'],
    minAmount: 2000,
    maxAmount: 35000,
    minAPR: 6.49,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=300&h=200'
  },
  {
    id: '3',
    name: 'Future Finance',
    rating: 4.9,
    distance: 3.1,
    address: '789 Future Blvd, NY',
    loanTypes: ['Personal', 'Education', 'Business'],
    minAmount: 10000,
    maxAmount: 100000,
    minAPR: 4.99,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=300&h=200'
  }
];