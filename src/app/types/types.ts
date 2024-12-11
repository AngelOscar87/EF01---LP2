export interface Apartment {
    id?: number;
    name: string;
    phone: string;
    floor: number;
    block: string;
  }
  
  export interface ElectricityConsumption {
    id?: number;
    apartmentId: number;
    date: string;
    quantityKw: number;
  }
  