import { v4 as uuidv4 } from "uuid";
let users = [
  {
    firstName: "Bhavani",
    lastName: "K",
    age: 20,
    id: "22a0cebb-fe8f-4f19-bb86-0cff328f3cc3",
  },
  {
    firstName: "Nikhil",
    lastName: "Thogaru",
    age: 20,
    id: "7b1f62bf-dce5-4b8f-8ca6-c4eb3e0a5e54",
  },
  {
    firstName: "Mokshith",
    lastName: "PVS",
    age: 20,
    id: "eb696e2f-b2ee-4087-83d3-0043a7e57c25",
  },
  {
    firstName: "Manoj",
    lastName: "Panneru",
    age: 20,
    id: "069c7f09-c154-40aa-99a5-b74139841663",
  },
];
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  console.log("POST route reached");
  res.send(`User added : ${user.firstName} ${user.lastName}`);
};

export const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

export const getUserbyID = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id == id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  res.send(`User ${user.id} updated`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with ${id} deleted`);
};
