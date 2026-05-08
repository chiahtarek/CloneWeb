import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  SubTitle,
  Label,
  Input,
  Button
} from './style';

export default function FormTransfer({ data, onChange, onSubmit }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Container as="form" onSubmit={handleSubmit}>

      <Title>Transferência</Title>
      <SubTitle>Envie dinheiro com segurança</SubTitle>


      <Label>Número Conta Destinatário</Label>
      <Input
        type="number"
        value={data.numeroConta}
        onChange={(e) => onChange('numeroConta', Number(e.target.value))}
      />

      <Label>Valor</Label>
      <Input
        type="number"
        value={data.amount}
        onChange={(e) => onChange('amount', Number(e.target.value))}
      />

      <Button type="submit">
        Transferir
      </Button>

      <p onClick={() => navigate('/home')}>
        Voltar
      </p>

    </Container>
  );
}