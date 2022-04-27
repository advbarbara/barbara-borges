import { Button } from '../Button';

import personImg from '../../assets/person/barbara.png';
import { Container, Content, Title, Subtitle } from './styles';

export function Person() {
  function handleMessage() {
    window.open(
      'https://api.whatsapp.com/send?phone=5563992259791&text=Ol%C3%A1%20Barbara%2C%20preciso%20de%20um%20atendimento!',
      '_blank'
    );
  }

  return (
    <Container>
      <Content>
        <Title>
          <h1>Advogada</h1>
          <h1>Previdenciarista</h1>
        </Title>

        <Subtitle>
          <h3>
            Precisa de benefícios previdenciários ou já requereu algum benefício junto ao INSS e teve seu pedido negado?
          </h3>
        </Subtitle>

        <Button title="Me chame no whatsapp" onClick={handleMessage} />
      </Content>

      <img src={personImg} alt="Advogada Barbara" />
    </Container>
  )
}