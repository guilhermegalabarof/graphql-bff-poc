import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@apollo/client";

type Ducks = {
  id: string;
  breed: string;
};

type GetDucksQuery = {
  ducks: Ducks[];
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
  duck: {
    id: string;
    photo: string;
  };
};

type GetDuckPhotoQueryVariables = {
  id: string;
};

export const GET_DUCK_PHOTO: TypedDocumentNode<
  GetDuckPhotoQuery,
  GetDuckPhotoQueryVariables
> = gql`
  query Duck($id: ID!) {
    duck(id: $id) {
      id
      photo
    }
  }
`;
