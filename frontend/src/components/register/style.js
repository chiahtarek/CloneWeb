import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  max-width: 420px;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #555;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  color: #888;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  margin-top: 12px;
  font-size: 14px;
  color: #444;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0 10px;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 42px;
  background-color: lightseagreen;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;