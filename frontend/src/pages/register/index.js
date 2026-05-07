import { useState } from "react";
import { Container, FormWrapper } from "./style";
import FormRegister from "../../components/register";
import { Client } from "../../api/client";

export default function Register() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    roleId: 1
  });

  function handleChange(field, value) {
    setData((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  async function handleSubmit() {
    console.log("SUBMIT DISPARADO");
    try {
      const response = await Client.post("/auth/register", data);

      console.log("Usuário criado:", response.data);

    } catch (error) {
      console.error(error);
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
    </Container>
  );
}