// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FinancePage from "./pages/FinancePage";
import SafetyPage from "./pages/SafetyPage";
import Header from "./components/Header";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header /> {/* 모든 페이지에 공통으로 노출 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
