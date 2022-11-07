import { ThemeProvider } from "styled-components";
import { UserProvider } from "./contexts/UserContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { themes } from "./styles/themes";

export const App = () => (
  <ThemeProvider theme={themes.dark}>
    <UserProvider>
      <GlobalStyle />
      <Home />
    </UserProvider>
  </ThemeProvider>
);
