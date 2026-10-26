import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import Header from "./components/Header";
import FooterConfig from "./components/Footer/FooterConfig";
import { ToastProvider } from "./contexts/toast/ToastContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router>
          <Header />
          <AppRoutes />
          <FooterConfig />
        </Router>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
