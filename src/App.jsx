import { useState } from "react";
import Home from "./pages/Home";
import LiveSystems from "./pages/LiveSystems";

function App() {
  const [view, setView] = useState("home");
  const openLiveSystems = () => { setView("live-systems"); window.scrollTo(0, 0); };
  const returnHome = () => { setView("home"); window.scrollTo(0, 0); };

  if (view === "live-systems") return <LiveSystems onBack={returnHome} />;
  return <Home onOpenLiveSystems={openLiveSystems} />;
}

export default App;
