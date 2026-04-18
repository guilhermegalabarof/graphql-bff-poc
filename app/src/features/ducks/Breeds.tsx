import { useQuery } from "@apollo/client/react";
import { GET_BREEDS } from "./ducks.queries.ts";

interface Props {
  onSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Breeds({ onSelected }: Props) {
  const { loading, error, data } = useQuery(GET_BREEDS);

  if (loading) return <p aria-live="polite">Loading...</p>;
  if (error) return <p role="alert">`Error! ${error.message}`</p>;

  if (!data) {
    return null;
  }

  return (
    <>
      <label htmlFor="duck-select">Choose breed</label>
      <select id="duck-select" name="duck" onChange={onSelected}>
        <option value="">Select</option>
        {data.breeds.map((duck) => (
          <option key={duck.id} value={duck.id}>
            {duck.name}
          </option>
        ))}
      </select>
    </>
  );
}
