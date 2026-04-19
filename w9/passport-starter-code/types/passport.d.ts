interface AppUser {
  id: number;
  name: string;
  email?: string;
  password?: string;
  role?: string;
}

declare global {
  namespace Express {
    interface User extends AppUser {}
  }
}

export {};
