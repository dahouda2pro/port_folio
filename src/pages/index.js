
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { FiArrowUpRight, FiGitBranch, FiDatabase, FiBarChart2, FiTruck, FiCode, FiBookOpen, FiMail, FiLayers, FiActivity, FiEye } from 'react-icons/fi';
import translations from '../translations';

const Container = styled.main`
  width: min(1160px, calc(100% - 48px)); margin: 0 auto;
  @media(max-width:640px){width:calc(100% - 36px);}
`;
const Header = styled.header`
  height:92px; display:flex; align-items:center; justify-content:space-between;
  border-bottom:1px solid #e9edf3; position:sticky; top:0; z-index:20;
  background:rgba(255,255,255,.92); backdrop-filter:blur(14px);
`;
const Brand = styled.a`display:inline-flex;align-items:center;gap:12px;font-size:18px;font-weight:800;letter-spacing:-.04em;color:#14243b;text-decoration:none;white-space:nowrap;
  span{color:#3978d5;}
  img{width:50px;height:50px;object-fit:cover;object-position:center 30%;border-radius:50%;border:2px solid #dce8f7;box-shadow:0 3px 12px #183a641c}
  @media(max-width:640px){font-size:15px;gap:8px;img{width:42px;height:42px}}`;
const Button = styled.a`
 display:inline-flex;align-items:center;gap:9px;padding:13px 18px;border-radius:8px;
 background:${p => p.$light ? '#fff' : '#2468c7'};color:${p => p.$light ? '#1d3555' : '#fff'};
 border:1px solid ${p => p.$light ? '#dce5f0' : '#2468c7'};font-size:15px;font-weight:700;text-decoration:none;
 transition:.2s; &:hover{transform:translateY(-2px);box-shadow:0 8px 24px #1e4e891c}
`;
const Eyebrow = styled.div`display:flex;align-items:center;gap:10px;color:#3978d5;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;
 &:before{content:"";width:24px;height:1px;background:#3978d5}`;
const Hero = styled.section`
 display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:center;padding:100px 0 94px;
 @media(max-width:800px){grid-template-columns:1fr;gap:38px;padding:68px 0}
`;
const H1 = styled.h1`font-size:clamp(42px,6vw,72px);line-height:1.04;letter-spacing:-.065em;color:#14243b;margin:22px 0 20px;
 span{color:#3978d5}`;
const Lead = styled.p`font-size:19px;line-height:1.8;color:#617087;max-width:660px;margin:0 0 28px`;
const HeroActions = styled.div`display:flex;gap:12px;flex-wrap:wrap;margin-top:30px`;
const ProfilePanel = styled.div`
 background:linear-gradient(145deg,#f3f7fc,#eaf1fa);border:1px solid #e2eaf4;border-radius:20px;
 min-height:380px;padding:28px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;
 &:before{content:"";position:absolute;width:260px;height:260px;border-radius:50%;border:1px solid #d5e2f1;right:-80px;top:-80px;box-shadow:0 0 0 28px #ffffff30,0 0 0 58px #ffffff25}
`;
const Monogram = styled.div`width:112px;height:112px;border-radius:24px;background:#fff;display:grid;place-items:center;color:#2468c7;font-size:36px;font-weight:800;letter-spacing:-.07em;box-shadow:0 12px 35px #234b7b12;position:relative`;
const PanelCaption = styled.div`position:relative;color:#51647d;font-size:15px;line-height:1.8;max-width:290px;
 strong{display:block;color:#1b2e49;font-size:18px;margin-bottom:7px}`;
const Stats = styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:20px 0;border-top:1px solid #e9edf3;border-bottom:1px solid #e9edf3;
 @media(max-width:560px){grid-template-columns:1fr;gap:16px}`;
const Stat = styled.div`strong{display:block;color:#172b46;font-size:23px;letter-spacing:-.04em}span{font-size:13px;color:#78869a}`;
const Section = styled.section`padding:82px 0;border-bottom:1px solid #e9edf3;scroll-margin-top:95px;
 @media(max-width:640px){padding:60px 0}`;
const SectionHead = styled.div`display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:34px;
 @media(max-width:640px){display:block}`;
const H2 = styled.h2`font-size:clamp(29px,4vw,42px);letter-spacing:-.055em;color:#172b46;margin:13px 0 0`;
const SectionIntro = styled.p`max-width:500px;color:#718096;font-size:16px;line-height:1.8;margin-top:12px`;
const ExpertiseGrid = styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:14px;
 @media(max-width:900px){grid-template-columns:repeat(2,1fr)} @media(max-width:440px){grid-template-columns:1fr}`;
const Skill = styled.article`padding:24px;border:1px solid #e7edf4;border-radius:13px;background:#fff;transition:.2s;
 &:hover{border-color:#b9cde6;transform:translateY(-3px);box-shadow:0 12px 30px #203e6510}
 svg{color:#3978d5;font-size:22px}h3{font-size:17px;color:#1c304b;margin:17px 0 8px}p{font-size:14px;line-height:1.75;color:#78869a}`;
const ProjectGrid = styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:18px;
 @media(max-width:700px){grid-template-columns:1fr}`;
const Project = styled.article`padding:26px;border:1px solid #e5ebf3;border-radius:14px;background:#fff;
 .top{display:flex;justify-content:space-between;align-items:center;color:#3978d5}
 h3{font-size:20px;letter-spacing:-.025em;color:#1b2e49;margin:20px 0 10px}
 p{font-size:15px;line-height:1.8;color:#718096;min-height:70px}
 .tags{display:flex;gap:7px;flex-wrap:wrap;margin-top:18px}
 .tags span{font-size:12px;color:#526982;background:#f1f5fa;padding:6px 9px;border-radius:20px}`;
const TwoCol = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:60px;
 @media(max-width:760px){grid-template-columns:1fr;gap:34px}`;
const Body = styled.p`font-size:16px;line-height:1.9;color:#66768c;margin-top:18px`;
const Timeline = styled.div`border-left:1px solid #dce5f0;margin:26px 0 0 7px;padding-left:25px;display:grid;gap:26px`;
const Milestone = styled.div`position:relative;&:before{content:"";position:absolute;left:-31px;top:5px;width:10px;height:10px;border-radius:50%;background:#3978d5;border:3px solid #e8f0fa}
 small{font-size:12px;color:#3978d5;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
 h3{font-size:17px;color:#1d304a;margin:6px 0}p{font-size:14px;color:#77859a;line-height:1.7}`;
const Stack = styled.div`display:flex;flex-wrap:wrap;gap:9px;margin-top:22px`;
const StackTag = styled.span`border:1px solid #e1e8f1;border-radius:7px;padding:10px 13px;color:#53657c;font-size:13px;background:#fff`;
const Contact = styled.div`background:#f2f6fb;border:1px solid #e4ebf4;border-radius:18px;padding:38px;display:flex;align-items:center;justify-content:space-between;gap:25px;
 @media(max-width:700px){display:block;padding:27px}`;
const Footer = styled.footer`padding:30px 0 42px;display:flex;justify-content:space-between;gap:20px;color:#8793a4;font-size:13px;
 a{color:#64748b;text-decoration:none;margin-left:16px} @media(max-width:560px){display:block;line-height:2.2}`;

const LanguageControls = styled.div`
 display:flex;align-items:center;gap:5px;margin-left:8px;flex-shrink:0;
 button{border:1px solid #dce5f0;background:#fff;color:#52647b;border-radius:7px;padding:7px 9px;font-size:12px;font-weight:800;cursor:pointer;transition:.2s}
 button[aria-pressed="true"]{background:#2468c7;color:#fff;border-color:#2468c7}
 button:focus-visible{outline:3px solid #9dc2f4;outline-offset:2px}
`;
const HeaderRight = styled.div`display:flex;align-items:center;gap:12px;@media(max-width:960px){gap:6px}`;
const Nav = styled.nav`
 display:flex;align-items:center;gap:22px;flex-wrap:wrap;
 a{font-size:14px;font-weight:600;color:#58677c;text-decoration:none;transition:.2s;white-space:nowrap}
 a:hover{color:#2868c7}
 @media(max-width:960px){gap:12px;a{font-size:12px}}
 @media(max-width:760px){display:none}
`;
const DataList = styled.div`display:grid;gap:18px`;
const CourseHeading = styled.h3`font-size:19px;color:#1d304a;margin:0 0 12px`;
const Home = () => {
  const [lang, setLang] = useState('EN');
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { const saved = window.localStorage.getItem('portfolio-language'); if (['EN', 'FR', 'KR'].includes(saved)) setLang(saved); } catch (e) { }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { window.localStorage.setItem('portfolio-language', lang); } catch (e) { }
    document.documentElement.lang = lang === 'KR' ? 'ko' : lang.toLowerCase();
  }, [lang, ready]);
  const t = translations[lang];
  const projects = [
    { icon: FiBarChart2, title: 'Mining KPI Intelligence', tags: ['Python', 'SQL Server', 'Pandas', 'Power BI', 'ETL'] },
    { icon: FiActivity, title: 'Predictive Cycle Time Modelling', tags: ['XGBoost', 'Scikit-learn', 'TensorFlow', 'Feature Engineering'] },
    { icon: FiEye, title: 'Computer Vision for Vehicle Analytics', tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'Video Analytics'] },
    { icon: FiLayers, title: 'Enterprise Data Pipeline Platform', tags: ['Kedro', 'Apache Airflow', 'SQL Server', 'Python'] },
    { icon: FiDatabase, title: 'Intelligent PDF Data Extraction', tags: ['Tesseract OCR', 'OpenCV', 'MinIO', 'Pandas'] },
    { icon: FiGitBranch, title: 'Enterprise Knowledge Assistant', tags: ['Ollama', 'FastAPI', 'React', 'RAG'] }
  ];
  const skills = ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'TensorFlow / Keras', 'PyTorch', 'XGBoost', 'OpenCV', 'Kedro', 'Apache Airflow', 'Docker', 'MinIO', 'FastAPI', 'Power BI', 'React'];
  const navIds = ['about', 'expertise', 'projects', 'experience', 'teaching', 'publications', 'contact'];
  const milestone = (item, i) => <Milestone key={i}><small>{item[0]}</small><h3>{item[1]}</h3>{item[2] && <p>{item[2]}</p>}</Milestone>;
  return <>
    <Head><title>{lang === 'FR' ? 'Dahouda Mwamba Kasongo, Ph.D. | IA et Science des données' : lang === 'KR' ? 'Dahouda Mwamba Kasongo 박사 | AI 및 데이터 과학' : 'Dahouda Mwamba Kasongo, Ph.D. | AI & Data Science'}</title><meta name="description" content={t.hero} /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="theme-color" content="#ffffff" /></Head>
    <Container>
      <Header>
        <Brand href="#home"><Image src="/images/profile.jpg" alt="Dahouda Mwamba Kasongo" width={100} height={100} priority /><span>Dahouda Mwamba</span></Brand>
        <HeaderRight>
          <Nav>{t.nav.map((label, i) => <a key={navIds[i]} href={'#' + navIds[i]}>{label}</a>)}</Nav>
          <LanguageControls aria-label="Select language">
            {['FR', 'EN', 'KR'].map(code => <button key={code} type="button" aria-label={code === 'FR' ? 'Français' : code === 'EN' ? 'English' : '한국어'} aria-pressed={lang === code} onClick={() => setLang(code)}>{code}</button>)}
          </LanguageControls>
        </HeaderRight>
      </Header>
      <Hero id="home">
        <div><Eyebrow>{t.eyebrow}</Eyebrow><H1>{t.headline1} <span>{t.headline2}</span></H1><Lead>{t.hero}</Lead><HeroActions><Button href="#projects">{t.explore} <FiArrowUpRight /></Button><Button $light href="#contact">{t.contactBtn} <FiMail /></Button></HeroActions></div>
        <ProfilePanel><Monogram>DMK</Monogram><PanelCaption><strong>{t.panelTitle}</strong>{t.panel}</PanelCaption><div style={{ position: 'relative', fontSize: 13, color: '#6f8097', letterSpacing: '.1em', fontWeight: 700 }}>{t.location}</div></ProfilePanel>
      </Hero>
      <Stats><Stat><strong>Ph.D.</strong><span>{t.stat1}</span></Stat><Stat><strong>AI + Data</strong><span>{t.stat2}</span></Stat><Stat><strong>End-to-end</strong><span>{t.stat3}</span></Stat></Stats>
      <Section id="about"><SectionHead><div><Eyebrow>{t.profile}</Eyebrow><H2>{t.aboutTitle}</H2></div><SectionIntro>{t.aboutIntro}</SectionIntro></SectionHead><TwoCol><div><Body>{t.about1}</Body><Body>{t.about2}</Body></div><div><H2 style={{ fontSize: 24, marginTop: 0 }}>{t.drives}</H2><Body>{t.drivesText}</Body></div></TwoCol></Section>
      <Section id="expertise"><SectionHead><div><Eyebrow>{t.capabilities}</Eyebrow><H2>{t.expertiseTitle}</H2></div><SectionIntro>{t.expertiseIntro}</SectionIntro></SectionHead><ExpertiseGrid>
        <Skill><FiGitBranch /><h3>{t.ai}</h3><p>{t.aiDesc}</p></Skill><Skill><FiDatabase /><h3>{t.de}</h3><p>{t.deDesc}</p></Skill><Skill><FiBarChart2 /><h3>{t.bi}</h3><p>{t.biDesc}</p></Skill><Skill><FiTruck /><h3>{t.industrial}</h3><p>{t.industrialDesc}</p></Skill>
      </ExpertiseGrid><Stack>{skills.map(x => <StackTag key={x}>{x}</StackTag>)}</Stack></Section>
      <Section id="projects"><SectionHead><div><Eyebrow>{t.selected}</Eyebrow><H2>{t.projectsTitle}</H2></div><SectionIntro>{t.projectsIntro}</SectionIntro></SectionHead><ProjectGrid>{projects.map((p, i) => <Project key={p.title}><div className="top"><p.icon size={23} /><FiArrowUpRight /></div><h3>{p.title}</h3><p>{t.projectDescs[i]}</p><div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div></Project>)}</ProjectGrid></Section>
      <Section id="career"><SectionHead><div><Eyebrow>{t.background}</Eyebrow><H2>{t.educationExperience}</H2></div><SectionIntro>{t.backgroundIntro}</SectionIntro></SectionHead><TwoCol><div><H2 style={{ fontSize: 23, marginTop: 0 }}>{t.education}</H2><Timeline>{milestone([t.doctoral, t.phd, t.hanyang], 0)}{milestone([t.masters, t.master, t.hanyang], 1)}{milestone([t.undergrad, t.bachelor, t.upl], 2)}</Timeline></div><div><H2 style={{ fontSize: 23, marginTop: 0 }}>{t.professionalFocus}</H2><Timeline>{milestone([t.current, t.senior, t.seniorDesc], 0)}{milestone([t.academic, t.associate, t.associateDesc], 1)}{milestone([t.initiative, t.lab, t.labDesc], 2)}</Timeline></div></TwoCol></Section>
      <Section id="research"><SectionHead><div><Eyebrow>{t.knowledge}</Eyebrow><H2>{t.researchTitle}</H2></div><SectionIntro>{t.researchIntro}</SectionIntro></SectionHead><TwoCol><div><FiBookOpen color="#3978d5" size={25} /><Body>{t.research1}</Body></div><div><FiCode color="#3978d5" size={25} /><Body>{t.research2}</Body></div></TwoCol></Section>
      <Section id="teaching"><SectionHead><div><Eyebrow>{t.academicContrib}</Eyebrow><H2>{t.teachingTitle}</H2></div><SectionIntro>{t.teachingIntro}</SectionIntro></SectionHead><TwoCol><div><CourseHeading>{t.visiting}</CourseHeading><Body>UNILU (Math-Info), UDBL (ESIS), UHN, ISTL, Maria Malkia, ISTA/Kolwezi and UJKOL.</Body><CourseHeading style={{ marginTop: 28 }}>{t.coursesMasters}</CourseHeading><Stack>{t.masterCourses.map(x => <StackTag key={x}>{x}</StackTag>)}</Stack></div><div><CourseHeading>{t.coursesBachelor}</CourseHeading><Stack>{t.bachelorCourses.map(x => <StackTag key={x}>{x}</StackTag>)}</Stack><Body>{t.teachingNote}</Body></div></TwoCol></Section>
      <Section id="publications"><SectionHead><div><Eyebrow>{t.scientific}</Eyebrow><H2>{t.pubTitle}</H2></div><SectionIntro>{t.pubIntro}</SectionIntro></SectionHead><CourseHeading>{t.journals}</CourseHeading><Timeline>{t.publications.map(milestone)}</Timeline><CourseHeading style={{ marginTop: 42 }}>{t.conferences}</CourseHeading><Timeline>{t.conferencePubs.map(milestone)}</Timeline><HeroActions><Button href="https://scholar.google.com/citations?user=Bzi--3IAAAAJ&hl=en" target="_blank" rel="noreferrer">{t.scholar} <FiArrowUpRight /></Button><Button $light href="https://github.com/dahouda2pro" target="_blank" rel="noreferrer">{t.github} <FiArrowUpRight /></Button></HeroActions></Section>
      <Section id="experience"><SectionHead><div><Eyebrow>{t.careerHistory}</Eyebrow><H2>{t.experienceTitle}</H2></div><SectionIntro>{t.experienceIntro}</SectionIntro></SectionHead><Timeline>{t.career.map(milestone)}</Timeline></Section>
      <Section id="education"><SectionHead><div><Eyebrow>{t.educationBackground}</Eyebrow><H2>{t.qualifications}</H2></div></SectionHead><Timeline>{t.degrees.map(milestone)}</Timeline></Section>
      <Section id="skills"><SectionHead><div><Eyebrow>{t.toolkit}</Eyebrow><H2>{t.skillsTitle}</H2></div><SectionIntro>{t.skillsIntro}</SectionIntro></SectionHead><TwoCol><div><CourseHeading>{t.technicalSkills}</CourseHeading><Stack>{t.skills.map(x => <StackTag key={x}>{x}</StackTag>)}</Stack><Body>{t.strengths}</Body></div><div><CourseHeading>{t.certifications}</CourseHeading><Timeline>{t.certs.map((x, i) => milestone(['', x, ''], i))}</Timeline><CourseHeading style={{ marginTop: 32 }}>{t.languages}</CourseHeading><Stack>{t.langs.map(x => <StackTag key={x}>{x}</StackTag>)}</Stack></div></TwoCol></Section>
      <Section id="research-projects"><SectionHead><div><Eyebrow>{t.researchDev}</Eyebrow><H2>{t.researchProjects}</H2></div><SectionIntro>{t.researchProjectsIntro}</SectionIntro></SectionHead><ProjectGrid>{t.researchProjects.map((p, i) => <Project key={i}><div className="top"><FiLayers size={23} /><span>{p[0]}</span></div><h3>{p[1]}</h3><p>{p[2]}</p><div className="tags"><span>{p[3]}</span><span>{p[4]}</span></div></Project>)}</ProjectGrid></Section>
      <Section id="contact" style={{ borderBottom: 0, paddingBottom: 45 }}>
        <Contact><div><Eyebrow>{t.start}</Eyebrow><H2 style={{ fontSize: 32 }}>{t.build}</H2><SectionIntro>{t.open}</SectionIntro></div>
        <span style={{ fontSize: 12, color: "#718096", fontWeight: 600 }}>
          <a href="mailto:dahouda37@gmail.com" style={{ color: "#2468c7", fontWeight: 700, textDecoration: "none" }}>dahouda37@gmail.com</a>
          <a href="mailto:dahouda37@hanyang.ac.kr" style={{ color: "#2468c7", fontWeight: 700, textDecoration: "none" }}>dahouda37@hanyang.ac.kr</a>
        </span></Contact></Section>
      <Footer><span>© {new Date().getFullYear()} Dahouda Mwamba Kasongo. {t.rights}</span><span><a href="https://www.linkedin.com/in/dahouda2mwamba/" target="_blank" rel="noreferrer">{t.linkedin}</a><a href="https://www.researchgate.net/profile/Dahouda-Mwamba" target="_blank" rel="noreferrer">{t.researchgate}</a><a href="https://github.com/dahouda2pro" target="_blank" rel="noreferrer">GitHub</a><a href="https://scholar.google.com/citations?user=Bzi--3IAAAAJ&hl=en" target="_blank" rel="noreferrer">{t.scholarLink}</a></span></Footer>
    </Container>
  </>;
};
export default Home;
