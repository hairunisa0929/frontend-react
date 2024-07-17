import { useState } from "react";

export default function User() {
  const [name, setName] = useState("Miyamura");

  function handleChange() {
    setName("Nanami");
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>My Name is {name}</p>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}
