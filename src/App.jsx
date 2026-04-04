import { ThemeProvider } from "./context/ThemeContext";
import PortfolioApp from "./PortfolioApp";

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
