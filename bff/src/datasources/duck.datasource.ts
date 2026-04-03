import type { Duck } from "../schema/duck.schema.js";

const ducks: Duck[] = [
  {
    id: "1",
    breed: "Mallard",
    photo: "",
  },
  {
    id: "2",
    breed: "Pekin",
    photo: "",
  },
  {
    id: "3",
    breed: "Muscovy",
    photo: "",
  },
];

export const fetchRandomDuckImage = async (): Promise<string> => {
  const res = await fetch("https://random-d.uk/api/v2/random");
  const data = await res.json();

  if (typeof data.url === "string") {
    return data.url;
  }

  return "";
};

export async function getDucks(): Promise<Duck[]> {
  return ducks;
}

export async function getDuck(id: string): Promise<Duck | undefined> {
  return ducks.find((duck) => duck.id === id);
}
