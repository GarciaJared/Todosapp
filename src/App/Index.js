import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Context/index.context";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
