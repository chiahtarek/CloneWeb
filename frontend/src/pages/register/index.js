import { useState } from "react";
import FormRegister from "../../components/register";
import { Client } from "../../api/client";

import {
  Container,
  FormWrapper,
  Overlay,
  Modal
} from "./style";

export default function Register() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",

    roleId: 1,

    endereco: {
      rua: "",
      numero: "",
      cidade: "",
      estado: "",
      bairro: "",
    }
  });

  const [success, setSuccess] = useState(false);

  function handleChange(field, value) {
    const enderecoFields = [
      "rua",
      "numero",
      "cidade",
      "estado",
      "bairro"
    ];

    if (enderecoFields.includes(field)) {
      setData((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          [field]: value
        }
      }));
      return;
    }

    setData((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  function closeModal() {
    setSuccess(false);
  }

  async function handleSubmit() {
    console.log("SUBMIT DISPARADO");

    try {
      const response = await Client.post("/auth/register", data);

      console.log("Usuário criado:", response.data);

      setSuccess(true);

    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  }

  return (
    <Container>
      <FormWrapper>
        <FormRegister
          data={data}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </FormWrapper>

      {success && (
        <Overlay>
          <Modal>
            <h2>✅ Sucesso!</h2>
            <p>Usuário registrado com sucesso.</p>

            <button onClick={closeModal}>
              OK
            </button>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
}