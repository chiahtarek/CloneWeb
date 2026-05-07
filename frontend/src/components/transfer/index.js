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

      <Label>Seu ID</Label>
      <Input
        type="number"
        value={data.senderId}
        onChange={(e) => onChange('fromId', Number(e.target.value))}
      />

      <Label>ID do destinatário</Label>
      <Input
        type="number"
        value={data.receiverId}
        onChange={(e) => onChange('toId', Number(e.target.value))}
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