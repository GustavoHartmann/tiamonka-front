import GlobalStyleReset from "../styles/GlobalStyleReset";
import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Main/Main";
import Category from "./Category/Category";

export default function App() {
  return (
    <Router>
      <GlobalStyleReset />
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </Router>
  );
}
