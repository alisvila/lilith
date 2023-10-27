interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export type Person = {
  id: never;
  avatarUrl: string;
  lastName: string;
  name: number;
  email: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  birthDate: string;
  phoneNumber: string;
};

export type Role = "Admin" | "User" | "All";

export default User;
