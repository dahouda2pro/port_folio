import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Dahouda <br />
          MWAMBA KASONGO, Ph.D.
        </SectionTitle>
        <SectionText>
       Software Engineer | Data Scientist | Big Data Developer | Machine & Deep Learning Engineer |  <br />
       I am a versatile engineer passionate about building scalable software, designing and deploying AI/ML models, and processing large-scale data. <br />
       With expertise in Python, SQL, big data frameworks, and machine learning pipelines [Kedro, ZenML and Apache Airflow], <br />
       I solve real-world problems by bridging software development, AI, and data engineering.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;