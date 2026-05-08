import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;

  background-color: #ffffff;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;

  background: #fff;
  border-radius: 16px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;

  width: 320px;
  text-align: center;

  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  button {
    margin-top: 20px;
    padding: 10px 20px;

    border: none;
    border-radius: 6px;

    background: lightseagreen;
    color: white;

    cursor: pointer;
  }
`;