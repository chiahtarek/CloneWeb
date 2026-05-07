import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  SubTitle,
  Label,
  Input,
  Select,
  Button
} from './style';

export default function FormRegister({ data, onChange, onSubmit }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // impede reload
    onSubmit();
  }

  return (
    <Container as="form" onSubmit={handleSubmit}>

      <Title>Cadastro</Title>
      <SubTitle>Crie sua conta</SubTitle>

      <Label>Nome completo</Label>
      <Input
        value={data.fullName}
        onChange={(e) => onChange('fullName', e.target.value)}
      />

      <Label>Email</Label>
      <Input
        type="email"
        value={data.email}
        onChange={(e) => onChange('email', e.target.value)}
      />

      <Label>Senha</Label>
      <Input
        type="password"
        value={data.password}
        onChange={(e) => onChange('password', e.target.value)}
      />

      <Label>Tipo de usuário</Label>
      <Select
        value={data.roleId}
        onChange={(e) => onChange('roleId', Number(e.target.value))}
      >
        <option value={1}>Cliente</option>
        <option value={2}>Gerente</option>
      </Select>

      <Button type="submit">
        Registrar
      </Button>

      <p onClick={() => navigate('/login')}>
        Já tenho conta
      </p>

    </Container>
  );
}