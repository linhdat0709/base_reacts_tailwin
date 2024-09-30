<<<<<<< HEAD
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./Router";

export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}
=======
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
>>>>>>> refs/remotes/origin/main
