import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Routes from "./routes";
import { theme } from "./theme";

import { AppContainer } from "./App.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer className="App">
        <Header name="Lucas Correia" />
        <Routes />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
