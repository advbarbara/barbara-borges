import { Job } from "./components/Jobs";
import { Container, Content } from "./styles";

export function JobsOffered() {
  return (
    <Container>
      <h2>Trabalhos oferecidos</h2>

      <Content>
        <Job
          icon="retirement"
          title="Aposentadorias"
          description="Aposentadorias para trabalhadores urbanos e rurais"
        />

        <Job
          icon="inability"
          title="Benefícios por Incapacidade"
          description="Antigo Auxílio-doença / Aposentadoria por Invalidez"
        />

        <Job
          icon="death"
          title="Pensão por Morte"
          description="Pensões para filhos, companheiros e companheiras, cônjuges, etc."
        />

        <Job
          icon="deficient"
          title="BPC idoso/deficiente"
          description="Benefícios Assistenciais ao Idoso e à Pessoa com Deficiência"
        />

        <Job
          icon="maternity"
          title="Salário Maternidade"
          description="Salário Maternidade para trabalhadoras urbanas e rurais"
        />

        <Job
          icon="accident"
          title="Auxílio-Acidente"
          description="Auxílio-acidente para trabalhadores urbanos e rurais"
        />
      </Content>
    </Container>
  )
}