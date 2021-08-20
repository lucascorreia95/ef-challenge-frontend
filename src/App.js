import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Routes from "./routes";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header name="Lucas Correia" />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
