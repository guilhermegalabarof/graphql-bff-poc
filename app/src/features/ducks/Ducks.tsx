import { useQuery } from "@apollo/client/react";
import { GET_DUCKS } from "./ducks.queries.ts";

interface Props {
  onSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Ducks({ onSelected }: Props) {
  const { loading, error, data } = useQuery(GET_DUCKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (!data) {
    return null;
  }

  return (
    <select name="duck" onChange={onSelected}>
      <option value="">Select</option>
      {data.ducks.map((duck) => (
        <option key={duck.id} value={duck.id}>
          {duck.breed}
        </option>
      ))}
    </select>
  );
}
