export interface Duck {
  id: string;
  breed: string;
  photo: string;
  name: string;
}

export interface Breed {
  id: string;
  name: string;
  ducksIds: string[];
}

export const typeDefs = `
  type Duck {
    id: ID!
    breed: String!
    photo: String!
    name: String!
  }

  type Breed {
    id: ID!
    name: String!
    ducks: [Duck]
  }

  type Query {
    ducks: [Duck]
    duck(id: ID!): Duck
    breeds: [Breed]
    breed(id: ID!): Breed
  }
`;
