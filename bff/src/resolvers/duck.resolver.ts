import {
  getDucks,
  getDuck,
  fetchRandomDuckImage,
  getDucksByBreed,
  getBreeds,
  getBreed,
} from "../datasources/duck.datasource.js";

import type { Breed } from "../schema/duck.schema.js";

export const resolvers = {
  Duck: {
    photo: () => fetchRandomDuckImage(),
  },
  Breed: {
    ducks: (parent: Breed) => getDucksByBreed(parent.ducksIds),
  },
  Query: {
    ducks: () => getDucks(),
    duck: (_: unknown, { id }: { id: string }) => getDuck(id),
    breeds: () => getBreeds(),
    breed: (_: unknown, { id }: { id: string }) => getBreed(id),
  },
};
