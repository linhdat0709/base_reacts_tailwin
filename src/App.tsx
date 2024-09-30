import AxiosInterceptor from "./components/AxiosInterceptor";
import { ThemeProvider } from "./components/ThemeProvider";
import AppRouter from "./layout/AppRouter";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AxiosInterceptor>
        <AppRouter />
      </AxiosInterceptor>
    </ThemeProvider>
  );
}
export default App;
