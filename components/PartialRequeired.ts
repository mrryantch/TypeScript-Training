interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

// Partial
// Constructs a type with all properties of Type set to optional
type UserPartial = Partial<User>;

// if you want one properties that is not optional then
type UserPartial1 = Partial<User> & { name: string };

const UserTest: UserPartial1 = {
  name: "Tom",
};

// Required
// Constructs a type consisting of all properties of Type set to requried. (The opposite of Partial)

type UserRequired = Required<User>;

// if you want one properties optional and all required

type UserRequired1 = Required<User> & { city: string };
