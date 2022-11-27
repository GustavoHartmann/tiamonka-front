import axios from "axios";
import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormContainer from "../../styles/FormContainer";
import { PinkBody } from "../../styles/PinkBodyGlobalStyle";
import SignInPageContainer from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { BiLogIn } from "react-icons/bi";

export default function SignInPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  async function makeSignIn(e) {
    e.preventDefault();
    const url = "https://tiamonka.onrender.com/sign-in";

    setLoadingState(true);

    try {
      const response = await axios.post(url, {
        email: inputEmail,
        password: inputPassword,
      });

      setToken(response.data.token);

      navigate("/main");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.response.data,
      });
      setLoadingState(false);
    }
  }

  function changeVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <>
      <PinkBody />
      <SignInPageContainer>
        <Link to={"/"}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f80861107612119.5faafcf40b849.jpg"
            alt="Logo"
          />
        </Link>
        <div>
          <FormContainer onSubmit={makeSignIn}>
            <input
              type="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder="Email"
              required
              disabled={loadingState}
            />
            <div>
              <input
                type={passwordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Senha"
                required
                disabled={loadingState}
              />
              {passwordVisible ? (
                <AiOutlineEyeInvisible onClick={changeVisibility} />
              ) : (
                <AiOutlineEye onClick={changeVisibility} />
              )}
            </div>
            <button type="submit" disabled={loadingState}>
              {loadingState ? (
                <TailSpin height="35px" width="100%" color="white" />
              ) : (
                <>
                  Entrar
                  <BiLogIn />
                </>
              )}
            </button>
            <Link to={"/sign-up"}>
              <p>Já tem uma conta? Entre agora!</p>
            </Link>
          </FormContainer>
        </div>
      </SignInPageContainer>
    </>
  );
}
