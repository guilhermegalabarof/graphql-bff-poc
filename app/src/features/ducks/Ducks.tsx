import { useQuery } from "@apollo/client/react";
import { GET_DUCKS } from "./ducks.queries.ts";

interface Props {
  onSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Ducks({ onSelected }: Props) {
  const { loading, error, data } = useQuery(GET_DUCKS);

  if (loading) return <p aria-live="polite">Loading...</p>;
  if (error) return <p role="alert">`Error! ${error.message}`</p>;

  if (!data) {
    return null;
  }

  return (
    <>
      <label htmlFor="duck-select">Choose a duck breed</label>
      <select id="duck-select" name="duck" onChange={onSelected}>
        <option value="">Select</option>
        {data.ducks.map((duck) => (
          <option key={duck.id} value={duck.id}>
            {duck.breed}
          </option>
        ))}
      </select>
    </>
  );
}
