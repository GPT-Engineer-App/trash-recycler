import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Camera, BarChart } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import LiveView from "./pages/LiveView.jsx";
import TalliesAndSettings from "./pages/TalliesAndSettings.jsx";
import { SettingsProvider } from "./contexts/SettingsContext";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Live View",
    to: "/live-view",
    icon: <Camera className="h-4 w-4" />,
  },
  {
    title: "Tallies & Settings",
    to: "/tallies-settings",
    icon: <BarChart className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SettingsProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="live-view" element={<LiveView />} />
                <Route path="tallies-settings" element={<TalliesAndSettings />} />
              </Route>
            </Routes>
          </Router>
        </SettingsProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;