import { useMemo } from "react";
import { Container } from "./styles";

import retirementIcon from '../../../../assets/work/retirement.svg';
import inabilityIcon from '../../../../assets/work/inability.svg';
import deathIcon from '../../../../assets/work/death.svg';
import deficientIcon from '../../../../assets/work/deficient.svg';
import maternityIcon from '../../../../assets/work/maternity.svg';
import accidentIcon from '../../../../assets/work/accident.svg';

interface JobProps {
  icon: string;
  title: string;
  description: string;
}

export function Job({ icon, title, description }: JobProps) {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'retirement':
        return retirementIcon
      case 'inability':
        return inabilityIcon
      case 'death':
        return deathIcon
      case 'deficient':
        return deficientIcon
      case 'maternity':
        return maternityIcon
      case 'accident':
        return accidentIcon
    }
  }, [icon]);

  return (
    <Container>
      <img src={iconSelected} alt="Icone" />

      <h3>{title}</h3>

      <span>{description}</span>
    </Container>
  )
}