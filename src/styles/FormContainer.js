import styled from "styled-components";
import { THEME_COLOR } from "../assets/constants";

const FormContainer = styled.form`
  width: 100%;

  font-size: 20px;

  text-align: center;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    height: 58px;

    font-size: 20px;

    border: 1px solid #868686;
    border-radius: 5px;

    margin-bottom: 15px;
    padding-left: 15px;
  }

  input::placeholder {
    font-style: italic;

    color: #868686;
  }

  input:focus {
    outline-color: ${THEME_COLOR};
  }

  button {
    width: 50%;
    height: 45px;

    font-size: 20px;

    background-color: ${THEME_COLOR};
    color: white;

    border: none;
    border-radius: 5px;

    margin-bottom: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    text-align: center;

    font-size: 15px;

    color: ${THEME_COLOR};
  }

  p:hover {
    text-decoration: underline;
  }

  & > div {
    width: 100%;

    position: relative;

    svg {
      font-size: 30px;

      color: #393737;

      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 1;

      cursor: pointer;
    }
  }
`;

export default FormContainer;
