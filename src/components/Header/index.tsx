import { Button } from '../Button';

import { Container } from './styles';

export function Header() {
  function handleMessage() {
    window.open(
      'https://api.whatsapp.com/send?phone=5563992259791&text=Ol%C3%A1%20Barbara%2C%20preciso%20de%20um%20atendimento!',
      '_blank'
    );
  }

  return (
    <Container>
      <div>
        <h2>Advogada Barbara Borges</h2>
      </div>

      <Button title="Me chame no whatsapp" onClick={handleMessage} />
    </Container>
  )
}