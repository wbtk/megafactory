export type UserRole = 'admin' | 'director' | 'manager';

export type UserId = string;

export interface UserData {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  email: string;
  password?: string;
  isActive?: boolean; 
  roles?: UserRole[];
  permissions?: [];
  createdAt?: string;
  updatedAt?: string;
}
