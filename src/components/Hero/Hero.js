import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Dahouda MWAMBA
        </SectionTitle>
        <SectionText>
        Mwamba Kasongo Dahouda received a BS in information system engineering from the University Protestant of Lubumbashi, Lubumbashi, DR Congo, and the MS in software engineering from Hanyang University, Seoul, Korea in 2020.
        <br /> He is currently pursuing a Ph.D. in software engineering at Hanyang University, Seoul, Korea
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;