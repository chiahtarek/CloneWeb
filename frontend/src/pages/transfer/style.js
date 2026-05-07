import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
`;

// 🔥 ESSA PARTE ESTAVA FALTANDO
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    border: none;
    background: lightseagreen;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }
`;