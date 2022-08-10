export type ProductType = {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
};

export type ProductCartType = {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  quantity: number;
};

export type UserType = {
  email: string;
  password: string;
  name: string;
  id: number;
  role?: string;
  age?: string;
};
