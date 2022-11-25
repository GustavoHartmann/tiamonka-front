import GlobalStyleReset from "../styles/GlobalStyleReset";
import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialPage from "./InitialPage";

export default function App() {
  return (
    <Router>
      <GlobalStyleReset />
      <GlobalStyle />
      <Routes>
        <Route path="/main" element={<InitialPage />} />
      </Routes>
    </Router>
  );
}
