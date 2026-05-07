import { useState } from "react";
import { Container, FormWrapper, Overlay, Modal } from "./style";
import FormTransfer from "../../components/transfer";
import { Client } from "../../api/client";

export default function Transfer() {
  const [data, setData] = useState({
    fromId: "",
    toId: "",
    amount: ""
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(field, value) {
    setData((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  async function handleSubmit() {
    console.log("TRANSFERÊNCIA DISPARADA");

    setLoading(true);

    try {
      const response = await Client.post("/transfer", data);

      console.log("Transferência realizada:", response.data);

      // 👇 abre modal de sucesso
      setSuccess(true);

    } catch (error) {
      console.error(error.response?.data || error);

    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setSuccess(false);

    setData({
      fromId: "",
      toId: "",
      amount: ""
    });
  }

  return (
    <Container>
      <FormWrapper>
        <FormTransfer
          data={data}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </FormWrapper>

      {success && (
        <Overlay>
          <Modal>
            <h2>✅ Sucesso!</h2>
            <p>Transferência realizada com sucesso.</p>

            <button onClick={closeModal}>
              OK
            </button>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
}