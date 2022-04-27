import { Button } from '../Button';

import instaIcon from '../../assets/social/instagram.svg';
import emailIcon from '../../assets/social/email.svg';
import whatsIcon from '../../assets/social/whatsapp.svg';

import { Container, Me, Socials } from './styles';

export function About() {
  function handleMessage() {
    window.open(
      'https://api.whatsapp.com/send?phone=5563992259791&text=Ol%C3%A1%20Barbara%2C%20preciso%20de%20um%20atendimento!',
      '_blank'
    );
  }

  return (
    <Container>
      <Me>
        <h1>Sobre mim</h1>

        <span>
          Pós-graduanda em <strong>Advocacia Previdenciária</strong> pela Escola Brasileira de Direito e Defensora dos Direitos inerentes ao Ser Humano.
        </span>

        <Button title='Atendimento Online' onClick={handleMessage}/>
      </Me>

      <Socials>
        <div>
          <img src={instaIcon} alt="Instagram" />
          <a
            href='https://www.instagram.com/previdenciario.bb/'
            rel="noopener noreferrer nofollow" 
            target="_blank"
          >
            @previdenciario.bb
          </a>
        </div>

        <div>
          <img src={emailIcon} alt="E-mail" />
          <a
            href='mailto:advogadabarbaraborges@gmail.com'
            rel="noopener noreferrer nofollow" 
            target="_blank"
          >
            advogadabarbaraborges@gmail.com
          </a>
        </div>

        <div>
          <img src={whatsIcon} alt="Instagram" />
          <a
            href='https://api.whatsapp.com/send?phone=5563992259791&text=Ol%C3%A1%20Barbara%2C%20preciso%20de%20um%20atendimento!'
            rel="noopener noreferrer nofollow" 
            target="_blank"
          >
            (63) 99225-9791
          </a>
        </div>
      </Socials>
    </Container>
  );
}