import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import { Client } from "../../api/client";
import FormTransfer from "../../components/transfer";
import { getPermissions } from "../../service/PermissionService";
import { getDataUser } from "../../service/UserService";
import { Container as StyledContainer, FormWrapper, Overlay, Modal } from "./style";

export default function Transfer() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    numeroConta: "",
    amount: ""
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const permissions = getPermissions();
  const dataUser = getDataUser();

  // 🔒 PROTEÇÃO DE ROTA
  function verifyPermission() {
    if (!dataUser) {
      navigate('/login');
    }
  }

  useEffect(() => {
    verifyPermission();
  }, []);

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
      numeroConta: "",
      amount: ""
    });

    navigate("/"); // ou "/transfer" se quiser manter
  }

  return (
    <StyledContainer>

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

    </StyledContainer>
  );
}