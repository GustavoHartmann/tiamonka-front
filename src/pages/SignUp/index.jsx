import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FormContainer from "../../styles/FormContainer";
import { PinkBody } from "../../styles/PinkBodyGlobalStyle";
import SignUpPageContainer from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";

export default function SignUpPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirmation, setInputPasswordConfirmation] =
    useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  async function makeSignUp(e) {
    e.preventDefault();
    const url = "https://tiamonka.onrender.com/sign-up";
    setLoadingState(true);
    try {
      await axios.post(url, {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
        passwordConfirmation: inputPasswordConfirmation,
        address: inputAddress,
      });

      navigate("/sign-in");
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: err.response.data[0],
      });
      setLoadingState(false);
    }
  }

  function changeVisibility() {
    passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true);
  }

  return (
    <>
      <PinkBody />
      <SignUpPageContainer>
        <Link to={"/initial-screen"}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f80861107612119.5faafcf40b849.jpg"
            alt="Logo"
          />
        </Link>
        <div>
          <FormContainer onSubmit={makeSignUp}>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Nome"
              required
              autoFocus
              disabled={loadingState}
            />
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
            <div>
              <input
                type={passwordVisible ? "text" : "password"}
                value={inputPasswordConfirmation}
                onChange={(e) => setInputPasswordConfirmation(e.target.value)}
                placeholder="Confirme a senha"
                required
                disabled={loadingState}
              />
              {passwordVisible ? (
                <AiOutlineEyeInvisible onClick={changeVisibility} />
              ) : (
                <AiOutlineEye onClick={changeVisibility} />
              )}
            </div>
            <input
              type="text"
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder="Endereço"
              required
              disabled={loadingState}
            />
            <button type="submit" disabled={loadingState}>
              {loadingState ? (
                <TailSpin height="35px" width="100%" color="white" />
              ) : (
                "Cadastrar"
              )}
            </button>
            <Link to={"/sign-in"}>
              <p>Já tem uma conta? Entre agora!</p>
            </Link>
          </FormContainer>
        </div>
      </SignUpPageContainer>
    </>
  );
}
