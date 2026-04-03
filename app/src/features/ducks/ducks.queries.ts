import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@apollo/client";

type Duck = {
  id: string;
  breed: string;
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
