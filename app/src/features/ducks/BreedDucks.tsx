import { useQuery } from "@apollo/client/react";
import { GET_BREED_DUCKS } from "./ducks.queries.ts";

interface Props {
  breedId: string;
  selectedDuckId: string;
  onDuckSelected: (id: string) => void;
}

export function BreedDucks({ breedId, selectedDuckId, onDuckSelected }: Props) {
  const { loading, error, data } = useQuery(GET_BREED_DUCKS, {
    skip: !breedId,
    variables: { id: breedId },
  });

  if (loading) return <p aria-live="polite">Loading ducks...</p>;
  if (error) return <p role="alert">{error.message}</p>;
  if (!data) return null;

  return (
    <>
      <ul>
        {data.breed.ducks.map((duck) => (
          <li key={duck.id}>
            <button
              className={duck.id === selectedDuckId ? "active" : undefined}
              onClick={() => onDuckSelected(duck.id)}
            >
              {duck.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
