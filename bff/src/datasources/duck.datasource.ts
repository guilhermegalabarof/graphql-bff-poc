import type { Duck, Breed } from "../schema/duck.schema.js";

const ducks: Duck[] = [
  {
    id: "1",
    breed: "Mallard",
    photo: "",
    name: "Joe",
  },
  {
    id: "2",
    breed: "Pekin",
    photo: "",
    name: "Yoxi",
  },
  {
    id: "3",
    breed: "Muscovy",
    photo: "",
    name: "Opero",
  },
  {
    id: "4",
    breed: "Muscovy",
    photo: "",
    name: "Mu",
  },
];

const breeds: Breed[] = [
  { id: "1", name: "Mallard", ducksIds: ["1"] },
  { id: "2", name: "Pekin", ducksIds: ["2"] },
  { id: "3", name: "Muscovy", ducksIds: ["3", "4"] },
];

export const fetchRandomDuckImage = async (): Promise<string> => {
  const res = await fetch("https://random-d.uk/api/v2/random");
  const data = await res.json();

  if (typeof data.url === "string") {
    return data.url;
  }

  return "";
};

export function getBreeds(): Breed[] {
  return breeds;
}

export function getBreed(id: string): Breed | undefined {
  return breeds.find((b) => b.id === id);
}

export function getDucksByBreed(name: string[]): Duck[] {
  return ducks.filter((d) => name.includes(d.id));
}

export async function getDucks(): Promise<Duck[]> {
  return ducks;
}

export async function getDuck(id: string): Promise<Duck | undefined> {
  return ducks.find((duck) => duck.id === id);
}
