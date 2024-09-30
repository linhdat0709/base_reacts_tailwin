import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import AppRouter from "./layout/AppRouter";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
