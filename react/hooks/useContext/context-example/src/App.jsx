import { createContext, useState } from "react";
import ThemeComponent from "./ThemeComponent";

import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}

export default App;
