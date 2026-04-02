import { gql } from "@apollo/client";
import type { TypedDocumentNode } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
};

type GetLocationsQuery = {
  locations: Location[];
};

type GetLocationsQueryVariables = Record<string, never>;

const GET_LOCATIONS: TypedDocumentNode<
  GetLocationsQuery,
  GetLocationsQueryVariables
> = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function ListLocations({ locations }: { locations: Location[] | undefined }) {
  if (!locations) {
    return "empty";
  }

  return locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

function App() {
  const { loading, error, data, refetch } = useQuery(GET_LOCATIONS, {
    fetchPolicy: "cache-only",
  });

  if (loading) {
    return "loading";
  }

  if (error) {
    return `error ${error.message}`;
  }

  return (
    <>
      <button onClick={() => refetch()}>Refetch </button>
      <ListLocations locations={data?.locations} />
    </>
  );
}

export default App;
