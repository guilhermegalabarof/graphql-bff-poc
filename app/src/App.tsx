import { Duck, Ducks } from "@/features/ducks/";
import { useState } from "react";

function App() {
  const [duck, setDuck] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDuck(e.target.value);
  };

  return (
    <>
      <Ducks onSelected={handleSelect} />
      <Duck duck={duck} />
      <p>
        this is are not real images of those fake breed of ducks, IDK that much
        yet
      </p>
    </>
  );
}

export default App;
