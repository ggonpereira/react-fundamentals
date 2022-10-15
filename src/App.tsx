import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { themes } from "./styles/themes";

export const App = () => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
