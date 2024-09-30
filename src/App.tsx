import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./layout/AppLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout />
    </ThemeProvider>
  );
}

export default App;
