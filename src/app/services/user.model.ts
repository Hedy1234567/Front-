export interface User {
  id: number;
  name: string;
  address: string;
  email: string;
  hotel?: string;
  shift?: string;
  checkIn?: string;
  checkOut?: string;
  role: 'admin' | 'client' | 'manager' | 'extra' | 'receptionist' | 'supervisor' | string;
}
