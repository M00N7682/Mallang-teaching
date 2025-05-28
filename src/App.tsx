// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FinancePage from "./pages/FinancePage";
import SafetyPage from "./pages/SafetyPage";
import Header from "./components/Header";
import HistoryPage from "./pages/HistoryPage";
import BookPage from "./pages/HappyPrincePage"; 
import BookSelectPage from "./pages/BookSelectPage";
import HappyPrincePage from "./pages/HappyPrincePage";


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
          <Route path="/book" element={<BookPage />} />
          <Route path="/book-select" element={<BookSelectPage />} />
          <Route path="/book/happy-prince" element={<HappyPrincePage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
