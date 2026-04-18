import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@apollo/client";

type Breed = {
  id: string;
  name: string;
};

type GetBreedsQuery = {
  breeds: Breed[];
};

export const GET_BREEDS: TypedDocumentNode<
  GetBreedsQuery,
  Record<string, never>
> = gql`
  query GetBreeds {
    breeds {
      id
      name
    }
  }
`;

type GetBreedDucksQuery = {
  breed: {
    id: string;
    name: string;
    ducks: Duck[];
  };
};

type GetBreedDucksVariables = {
  id: string;
};

export const GET_BREED_DUCKS: TypedDocumentNode<
  GetBreedDucksQuery,
  GetBreedDucksVariables
> = gql`
  query GetBreedDucks($id: ID!) {
    breed(id: $id) {
      id
      name
      ducks {
        id
        name
      }
    }
  }
`;

type Duck = {
  id: string;
  breed: string;
  name: string;
};

type DuckWithPhoto = Duck & { photo: string };

type GetDucksQuery = {
  ducks: Duck[];
};

type GetDucksQueryVariables = Record<string, never>;

export const GET_DUCKS: TypedDocumentNode<
  GetDucksQuery,
  GetDucksQueryVariables
> = gql`
  query GetDucks {
    ducks {
      id
      breed
    }
  }
`;

type GetDuckPhotoQuery = {
  duck: DuckWithPhoto;
};

type GetDuckPhotoQueryVariables = {
  id: string;
};

export const GET_DUCK: TypedDocumentNode<
  GetDuckPhotoQuery,
  GetDuckPhotoQueryVariables
> = gql`
  query Duck($id: ID!) {
    duck(id: $id) {
      id
      photo
      breed
    }
  }
`;
