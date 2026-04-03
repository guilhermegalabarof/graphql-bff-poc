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
    </>
  );
}

export default App;
