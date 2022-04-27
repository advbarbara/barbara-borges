import { About } from '../../components/About';
import { Header } from '../../components/Header';
import { JobsOffered } from '../../components/JobsOffered';
import { Person } from '../../components/Person';

import { Container } from './styles';

export function Landing() {
  return (
    <>
      <Container>
        <Header />

        <Person />

        <JobsOffered />

        <About />
      </Container>
    </>
  );
}
