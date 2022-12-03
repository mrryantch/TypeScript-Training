interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

// Omit
// Construct a type by picking all properties from Type and then removing Keys (string literal or union of string literals)
type UserProfile = Omit<User, "password" | "email">;

// Pick
// Constructs a  type by picking the set of properties Keys (string literal or union of string literals) from Type

type UserProfilePick = Pick<User, "phone" | "name" | "email">;
