import { ThemeProvider } from "@/components/theme-provider";
import { TabsDemo } from "./pages/Tabs";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <TabsDemo />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
