import styled from "styled-components";

const SignUpPageContainer = styled.div`
  width: 100%;

  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;

    border-radius: 50%;

    margin: 50px 0;

    object-fit: cover;
  }

  & > div {
    width: 700px;

    background-color: white;

    border: 1px solid #e5e5e5e5;
    border-radius: 10px;

    box-shadow: 0px 0px 24px -5px rgba(0, 0, 0, 0.75);

    @media (max-width: 700px) {
      width: 90%;
    }
  }
`;

export default SignUpPageContainer;
