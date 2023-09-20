interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export type Role = "Admin" | "User" | "All";

export default User;
