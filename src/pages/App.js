import GlobalStyleReset from "../styles/GlobalStyleReset";
import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUp";
import MainPage from "./Main/Main";
import Category from "./Category/Category";
import CartProvider from "../contexts/cart.context";
import AuthProvider from "../contexts/AuthContext";
import SignInPage from "./SignIn";

export default function App() {
  return (
    <Router>
      <GlobalStyleReset />
      <GlobalStyle />
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/category/:category" element={<Category />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}
