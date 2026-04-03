export interface Duck {
  id: string;
  breed: string;
  photo: string;
}

export const typeDefs = `
  type Duck {
    id: ID!
    breed: String!
    photo: String!
  }

  type Query {
    ducks: [Duck]
    duck(id: ID!): Duck
  }
`;
