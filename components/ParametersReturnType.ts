interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
}

//Parameters
// Constructs a tuple type from the types used in paramaters of function type Type

function getPerson(
  firstName: string,
  middleName: string,
  lastName: string
): string {
  return `${firstName} ${middleName} ${lastName}`;
}

getPerson("test1", "test2", "test3");

function createUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return { username, password };
}

type CreateUserInput = Parameters<typeof createUser>[number];

const data: CreateUserInput = { username: "Tom", password: "Jerry" };

createUser(data);

// Return Type
// Constructs a type consisting of the return type of function Type

type CreateUserResult = ReturnType<typeof createUser>;

// if there is an async funtion we need to use
Awaited<ReturnType<typeof createUser>>;
