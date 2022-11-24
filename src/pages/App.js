import GlobalStyleReset from "../styles/GlobalStyleReset";
import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InitialPage from "./InitialPage";

export default function App() {
  return (
    <>
      <GlobalStyleReset />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<InitialPage />} />
        </Routes>
      </Router>
    </>
  );
}
