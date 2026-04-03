import {
  getDucks,
  getDuck,
  fetchRandomDuckImage,
} from "../datasources/duck.datasource.js";

export const resolvers = {
  Duck: {
    photo: () => fetchRandomDuckImage(),
  },
  Query: {
    ducks: () => getDucks(),
    duck: (_: unknown, { id }: { id: string }) => getDuck(id),
  },
};
