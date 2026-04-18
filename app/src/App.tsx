import { Duck, Breeds, BreedDucks } from "@/features/ducks/";
import { useState } from "react";

function App() {
  const [breedId, setBreedId] = useState("");
  const [currentDuck, setCurrentDuck] = useState("");

  const handleBreedSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreedId(e.target.value);
  };

  return (
    <>
      <Breeds onSelected={handleBreedSelect} />
      <BreedDucks
        breedId={breedId}
        selectedDuckId={currentDuck}
        onDuckSelected={setCurrentDuck}
      />
      <Duck duck={currentDuck} />
      <p>
        this is are not real images of those fake breed of ducks, IDK that much
        yet
      </p>
    </>
  );
}

export default App;
