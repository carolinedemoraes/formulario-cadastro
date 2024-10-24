import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import MemberForm from "./MemberForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MemberForm />
    </>
  );
}

export default App;
