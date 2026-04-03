import { useQuery } from "@apollo/client/react";
import { GET_DUCK_PHOTO } from "./ducks.queries.ts";

interface Props {
  duck: string;
}

export function Duck({ duck }: Props) {
  const { loading, error, data } = useQuery(GET_DUCK_PHOTO, {
    skip: !duck,
    variables: {
      id: duck,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (!data) {
    return null;
  }

  return <img src={data.duck.photo} alt={`picture of ${duck}`} />;
}
