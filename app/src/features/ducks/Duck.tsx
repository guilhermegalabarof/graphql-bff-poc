import { useQuery } from "@apollo/client/react";
import { GET_DUCK } from "./ducks.queries.ts";

interface Props {
  duck: string;
}

export function Duck({ duck }: Props) {
  const { loading, error, data } = useQuery(GET_DUCK, {
    skip: !duck,
    variables: {
      id: duck,
    },
  });

  if (loading) return <p aria-live="polite">"Loading..."</p>;
  if (error) return <p role="alert">{error.message}</p>;

  if (!data) {
    return null;
  }

  return (
    <img src={data.duck.photo} alt={`random picture of ${data.duck.breed}`} />
  );
}
