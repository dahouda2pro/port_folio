import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { FiArrowUpRight, FiGitBranch, FiDatabase, FiBarChart2, FiTruck, FiCode, FiBookOpen, FiMail, FiLayers, FiActivity, FiEye } from 'react-icons/fi';

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
const Nav = styled.nav`
 display:flex;align-items:center;gap:30px;
 a{font-size:15px;font-weight:600;color:#58677c;text-decoration:none;transition:.2s}
 a:hover{color:#2868c7}
 @media(max-width:720px){gap:14px;a{font-size:13px} a:nth-child(3){display:none}}
`;
const Button = styled.a`
 display:inline-flex;align-items:center;gap:9px;padding:13px 18px;border-radius:8px;
 background:${p=>p.$light?'#fff':'#2468c7'};color:${p=>p.$light?'#1d3555':'#fff'};
 border:1px solid ${p=>p.$light?'#dce5f0':'#2468c7'};font-size:15px;font-weight:700;text-decoration:none;
 transition:.2s; &:hover{transform:translateY(-2px);box-shadow:0 8px 24px #1e4e891c}
`;
const Eyebrow=styled.div`display:flex;align-items:center;gap:10px;color:#3978d5;font-size:13px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;
 &:before{content:"";width:24px;height:1px;background:#3978d5}`;
const Hero=styled.section`
 display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:center;padding:100px 0 94px;
 @media(max-width:800px){grid-template-columns:1fr;gap:38px;padding:68px 0}
`;
const H1=styled.h1`font-size:clamp(42px,6vw,72px);line-height:1.04;letter-spacing:-.065em;color:#14243b;margin:22px 0 20px;
 span{color:#3978d5}`;
const Lead=styled.p`font-size:19px;line-height:1.8;color:#617087;max-width:660px;margin:0 0 28px`;
const HeroActions=styled.div`display:flex;gap:12px;flex-wrap:wrap;margin-top:30px`;
const ProfilePanel=styled.div`
 background:linear-gradient(145deg,#f3f7fc,#eaf1fa);border:1px solid #e2eaf4;border-radius:20px;
 min-height:380px;padding:28px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;
 &:before{content:"";position:absolute;width:260px;height:260px;border-radius:50%;border:1px solid #d5e2f1;right:-80px;top:-80px;box-shadow:0 0 0 28px #ffffff30,0 0 0 58px #ffffff25}
`;
const Monogram=styled.div`width:112px;height:112px;border-radius:24px;background:#fff;display:grid;place-items:center;color:#2468c7;font-size:36px;font-weight:800;letter-spacing:-.07em;box-shadow:0 12px 35px #234b7b12;position:relative`;
const PanelCaption=styled.div`position:relative;color:#51647d;font-size:15px;line-height:1.8;max-width:290px;
 strong{display:block;color:#1b2e49;font-size:18px;margin-bottom:7px}`;
const Stats=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:20px 0;border-top:1px solid #e9edf3;border-bottom:1px solid #e9edf3;
 @media(max-width:560px){grid-template-columns:1fr;gap:16px}`;
const Stat=styled.div`strong{display:block;color:#172b46;font-size:23px;letter-spacing:-.04em}span{font-size:13px;color:#78869a}`;
const Section=styled.section`padding:82px 0;border-bottom:1px solid #e9edf3;scroll-margin-top:95px;
 @media(max-width:640px){padding:60px 0}`;
const SectionHead=styled.div`display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:34px;
 @media(max-width:640px){display:block}`;
const H2=styled.h2`font-size:clamp(29px,4vw,42px);letter-spacing:-.055em;color:#172b46;margin:13px 0 0`;
const SectionIntro=styled.p`max-width:500px;color:#718096;font-size:16px;line-height:1.8;margin-top:12px`;
const ExpertiseGrid=styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:14px;
 @media(max-width:900px){grid-template-columns:repeat(2,1fr)} @media(max-width:440px){grid-template-columns:1fr}`;
const Skill=styled.article`padding:24px;border:1px solid #e7edf4;border-radius:13px;background:#fff;transition:.2s;
 &:hover{border-color:#b9cde6;transform:translateY(-3px);box-shadow:0 12px 30px #203e6510}
 svg{color:#3978d5;font-size:22px}h3{font-size:17px;color:#1c304b;margin:17px 0 8px}p{font-size:14px;line-height:1.75;color:#78869a}`;
const ProjectGrid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:18px;
 @media(max-width:700px){grid-template-columns:1fr}`;
const Project=styled.article`padding:26px;border:1px solid #e5ebf3;border-radius:14px;background:#fff;
 .top{display:flex;justify-content:space-between;align-items:center;color:#3978d5}
 h3{font-size:20px;letter-spacing:-.025em;color:#1b2e49;margin:20px 0 10px}
 p{font-size:15px;line-height:1.8;color:#718096;min-height:70px}
 .tags{display:flex;gap:7px;flex-wrap:wrap;margin-top:18px}
 .tags span{font-size:12px;color:#526982;background:#f1f5fa;padding:6px 9px;border-radius:20px}`;
const TwoCol=styled.div`display:grid;grid-template-columns:1fr 1fr;gap:60px;
 @media(max-width:760px){grid-template-columns:1fr;gap:34px}`;
const Body=styled.p`font-size:16px;line-height:1.9;color:#66768c;margin-top:18px`;
const Timeline=styled.div`border-left:1px solid #dce5f0;margin:26px 0 0 7px;padding-left:25px;display:grid;gap:26px`;
const Milestone=styled.div`position:relative;&:before{content:"";position:absolute;left:-31px;top:5px;width:10px;height:10px;border-radius:50%;background:#3978d5;border:3px solid #e8f0fa}
 small{font-size:12px;color:#3978d5;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
 h3{font-size:17px;color:#1d304a;margin:6px 0}p{font-size:14px;color:#77859a;line-height:1.7}`;
const Stack=styled.div`display:flex;flex-wrap:wrap;gap:9px;margin-top:22px`;
const StackTag=styled.span`border:1px solid #e1e8f1;border-radius:7px;padding:10px 13px;color:#53657c;font-size:13px;background:#fff`;
const Contact=styled.div`background:#f2f6fb;border:1px solid #e4ebf4;border-radius:18px;padding:38px;display:flex;align-items:center;justify-content:space-between;gap:25px;
 @media(max-width:700px){display:block;padding:27px}`;
const Footer=styled.footer`padding:30px 0 42px;display:flex;justify-content:space-between;gap:20px;color:#8793a4;font-size:13px;
 a{color:#64748b;text-decoration:none;margin-left:16px} @media(max-width:560px){display:block;line-height:2.2}`;
const projects=[
 {icon:FiBarChart2,title:'Mining KPI Intelligence',desc:'An operational analytics workflow for consolidating mining data, transforming source files and monitoring business-critical KPIs through reporting and dashboards.',tags:['Python','SQL Server','Pandas','Power BI','ETL']},
 {icon:FiActivity,title:'Predictive Cycle Time Modelling',desc:'Machine learning experimentation on haulage-cycle data, including feature engineering, categorical encoding and model evaluation to support operational decision-making.',tags:['XGBoost','Scikit-learn','TensorFlow','Feature Engineering']},
 {icon:FiEye,title:'Computer Vision for Vehicle Analytics',desc:'Video analytics workflow for detecting and counting vehicles in recorded traffic footage, with frame processing, inference and progress monitoring.',tags:['PyTorch','OpenCV','Computer Vision','Video Analytics']},
 {icon:FiLayers,title:'Enterprise Data Pipeline Platform',desc:'Orchestrated data ingestion and transformation workflows integrating structured data sources, reusable Kedro pipelines and scheduled Airflow execution.',tags:['Kedro','Apache Airflow','SQL Server','Python']},
 {icon:FiDatabase,title:'Intelligent PDF Data Extraction',desc:'Batch document-processing pipeline combining PDF conversion, image preprocessing, OCR, field extraction, validation and structured output storage.',tags:['Tesseract OCR','OpenCV','MinIO','Pandas']},
 {icon:FiGitBranch,title:'Enterprise Knowledge Assistant',desc:'A retrieval-oriented assistant concept for querying internal documents through a language-model backend and an API-driven application interface.',tags:['Ollama','FastAPI','React','RAG']},
];
export default function Home(){
 return <>
  <Head><title>Dahouda Mwamba Kasongo, Ph.D. | AI & Data Science</title><meta name="description" content="Professional portfolio of Dahouda Mwamba Kasongo, Ph.D. — Senior Data Scientist and AI Engineer focused on applied AI, data engineering and mining intelligence."/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="theme-color" content="#ffffff"/></Head>
  <Container>
   <Header><Brand href="#home"><Image src="/images/profile.jpg" alt="Dahouda Mwamba Kasongo" width={100} height={100} priority /><span>DAHOUDA.</span></Brand><Nav><a href="#about">About</a><a href="#expertise">Expertise</a><a href="#projects">Projects</a><a href="#career">Career</a><a href="#teaching">Teaching</a><a href="#publications">Publications</a><a href="#contact">Contact</a></Nav></Header>
   <Hero id="home">
    <div><Eyebrow>Applied AI · Data Science · Engineering</Eyebrow><H1>Turning complex data into <span>intelligent solutions.</span></H1><Lead>I am Dahouda Mwamba Kasongo, Ph.D. — a Senior Data Scientist and AI Engineer building data platforms, machine learning systems and practical AI solutions for industrial challenges.</Lead><HeroActions><Button href="#projects">Explore selected work <FiArrowUpRight/></Button><Button $light href="#contact">Get in touch <FiMail/></Button></HeroActions></div>
    <ProfilePanel><Monogram>DMK</Monogram><PanelCaption><strong>Research-minded. Engineering-driven.</strong>Connecting software engineering, applied machine learning and data engineering to deliver solutions that work in real operational environments.</PanelCaption><div style={{position:'relative',fontSize:13,color:'#6f8097',letterSpacing:'.1em',fontWeight:700}}>LUBUMBASHI · DEMOCRATIC REPUBLIC OF THE CONGO</div></ProfilePanel>
   </Hero>
   <Stats><Stat><strong>Ph.D.</strong><span>Software Engineering</span></Stat><Stat><strong>AI + Data</strong><span>Research and industrial applications</span></Stat><Stat><strong>End-to-end</strong><span>From data pipelines to deployment</span></Stat></Stats>
   <Section id="about"><SectionHead><div><Eyebrow>Profile</Eyebrow><H2>About me</H2></div><SectionIntro>A blend of academic research, software engineering and applied data science.</SectionIntro></SectionHead><TwoCol><div><Body>I am a software engineer and data scientist with a Ph.D. in Software Engineering from Hanyang University, South Korea. My work focuses on applying artificial intelligence and modern data engineering practices to solve complex, real-world problems.</Body><Body>In the mining and industrial context, I work across data analytics and reporting, ETL development, KPI monitoring, machine learning and computer vision. I also enjoy teaching, mentoring and helping teams build practical technical capabilities.</Body></div><div><H2 style={{fontSize:24,marginTop:0}}>What drives my work</H2><Body>Build reliable data foundations. Develop models that answer meaningful operational questions. Turn prototypes into maintainable systems. Share knowledge through research, teaching and collaboration.</Body></div></TwoCol></Section>
   <Section id="expertise"><SectionHead><div><Eyebrow>Capabilities</Eyebrow><H2>Areas of expertise</H2></div><SectionIntro>Technical capabilities spanning the full lifecycle of data and intelligent applications.</SectionIntro></SectionHead><ExpertiseGrid>
    <Skill><FiGitBranch/><h3>Artificial Intelligence</h3><p>Machine learning, deep learning, predictive modelling, model evaluation and applied AI.</p></Skill>
    <Skill><FiDatabase/><h3>Data Engineering</h3><p>ETL pipelines, data integration, SQL databases, orchestration and medallion architecture.</p></Skill>
    <Skill><FiBarChart2/><h3>Analytics & BI</h3><p>KPI frameworks, operational reporting, data quality, dashboards and decision support.</p></Skill>
    <Skill><FiTruck/><h3>Industrial Intelligence</h3><p>Mining analytics, fleet-cycle analysis, computer vision and operational optimization.</p></Skill>
   </ExpertiseGrid><Stack>{['Python','SQL','Pandas','Scikit-learn','TensorFlow / Keras','PyTorch','XGBoost','OpenCV','Kedro','Apache Airflow','Docker','MinIO','FastAPI','Power BI','React'].map(x=><StackTag key={x}>{x}</StackTag>)}</Stack></Section>
   <Section id="projects"><SectionHead><div><Eyebrow>Selected work</Eyebrow><H2>Projects & applications</H2></div><SectionIntro>Representative work based on my professional focus. Some industrial implementations are private and are presented here at a high level.</SectionIntro></SectionHead><ProjectGrid>{projects.map((p)=><Project key={p.title}><div className="top"><p.icon size={23}/><FiArrowUpRight/></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></Project>)}</ProjectGrid></Section>
   <Section id="experience"><SectionHead><div><Eyebrow>Background</Eyebrow><H2>Education & experience</H2></div><SectionIntro>Academic foundations and professional practice.</SectionIntro></SectionHead><TwoCol><div><H2 style={{fontSize:23,marginTop:0}}>Education</H2><Timeline><Milestone><small>Doctoral degree</small><h3>Ph.D. in Software Engineering</h3><p>Hanyang University · Seoul, South Korea</p></Milestone><Milestone><small>Master's degree · 2020</small><h3>M.S. in Software Engineering</h3><p>Hanyang University · Seoul, South Korea</p></Milestone><Milestone><small>Undergraduate</small><h3>B.S. in Information Systems Engineering</h3><p>University Protestant of Lubumbashi · D.R. Congo</p></Milestone></Timeline></div><div><H2 style={{fontSize:23,marginTop:0}}>Professional focus</H2><Timeline><Milestone><small>Current</small><h3>Senior Data Scientist</h3><p>Mining industry · Data analytics, reporting, ETL pipelines, KPI monitoring and applied machine learning.</p></Milestone><Milestone><small>Academic experience</small><h3>Associate Professor</h3><p>Teaching, academic supervision, course development and technical mentoring.</p></Milestone><Milestone><small>Ongoing initiative</small><h3>AI Lab development</h3><p>Supporting applied AI initiatives, experimentation and knowledge sharing.</p></Milestone></Timeline></div></TwoCol></Section>
   <Section id="research"><SectionHead><div><Eyebrow>Knowledge sharing</Eyebrow><H2>Research & academic profile</H2></div><SectionIntro>Research themes and academic contributions documented in my CV.</SectionIntro></SectionHead><TwoCol><div><FiBookOpen color="#3978d5" size={25}/><Body>My research spans machine learning, deep learning, neural architecture search, feature extraction, hyperparameter optimization, image classification, wireless communication networks and intelligent systems. My doctoral research focused on NASNet-based feature extraction with a modular neural network for image classification with hyperparameter optimization.</Body></div><div><FiCode color="#3978d5" size={25}/><Body>My applied research includes automated Big Data analysis model recommendation, model selection, feature engineering, hyperparameter tuning, anomaly detection in time-series data and software development for simulation systems.</Body></div></TwoCol></Section>
   <Section id="teaching"><SectionHead><div><Eyebrow>Academic contributions</Eyebrow><H2>Teaching & academic appointments</H2></div><SectionIntro>University teaching, visiting appointments and technical courses listed in my CV.</SectionIntro></SectionHead><TwoCol><div><H2 style={{fontSize:23,marginTop:0}}>Visiting professor</H2><Body>UNILU (Math-Info), UDBL (ESIS), UHN, ISTL, Maria Malkia, ISTA/Kolwezi and UJKOL.</Body><H2 style={{fontSize:23,marginTop:30}}>Master's-level courses</H2><Stack>{['Advanced Machine Learning','Deep Learning','Advanced Database','Data Mining and Big Data','Verification of Models','Software Testing'].map(x=><StackTag key={x}>{x}</StackTag>)}</Stack></div><div><H2 style={{fontSize:23,marginTop:0}}>Bachelor's-level courses</H2><Stack>{['Artificial Intelligence in Computer Networks','Artificial Intelligence','Software Engineering','Machine Learning','AI Programming','Cloud Computing','Object-Oriented Programming','Web Programming'].map(x=><StackTag key={x}>{x}</StackTag>)}</Stack><Body>Teaching assistant appointments also included Web and Internet Technology, Introduction to Java Android Programming and AI research for wireless communication.</Body></div></TwoCol></Section>
   <Section id="publications"><SectionHead><div><Eyebrow>Scientific output</Eyebrow><H2>Publications & conference papers</H2></div><SectionIntro>Bibliographic records transcribed from my CV. Google Scholar provides the live author profile and citation information.</SectionIntro></SectionHead><H2 style={{fontSize:23,marginTop:0}}>Journal publications</H2><Timeline>
    <Milestone><small>2023 · Electronics</small><h3>Machine Learning-Based Solutions for Handover Decisions in Non-Terrestrial Networks</h3><p>MK Dahouda, S Jin, I Joe · Electronics 12 (8), 1759</p></Milestone>
    <Milestone><small>2022 · Electronics</small><h3>Optimal Power Allocation with Sectored Cells for Sum-Throughput Maximization in Wireless-Powered Communication Networks Based on Hybrid SDMA/NOMA</h3><p>J Maeng, MK Dahouda, I Joe · Electronics 11 (6), 844</p></Milestone>
    <Milestone><small>2022 · IEEE Access</small><h3>Neural Architecture Search Net-Based Feature Extraction With Modular Neural Network for Image Classification of Copper/Cobalt Raw Minerals</h3><p>MK Dahouda, I Joe · IEEE Access 10, 72253–72262</p></Milestone>
    <Milestone><small>2022 · Wireless Personal Communications</small><h3>A NOMA-Combined Hybrid Approach for SDMA Improvement in Wireless Powered Communication Networks</h3><p>J Maeng, MK Dahouda, I Joe · Wireless Personal Communications 122 (1), 877–895</p></Milestone>
    <Milestone><small>2021 · IEEE Access</small><h3>A deep-learned embedding technique for categorical features encoding</h3><p>MK Dahouda, I Joe · IEEE Access 9, 114381–114391</p></Milestone>
    <Milestone><small>2023 · IEEE Access</small><h3>Character Behavior Automation using Deep Reinforcement Learning</h3><p>H Lee, MK Dahouda, I Joe · IEEE Access 11, 101435–101442</p></Milestone>
   </Timeline><H2 style={{fontSize:23,marginTop:44}}>Conference papers</H2><Timeline>
    <Milestone><small>2025</small><h3>Explanatory LSTM-AE-based Anomaly Detection for Time Series Data in Marine Transportation</h3><p>MK Dahouda, I Joe · The CV lists IEEE Access 10; bibliographic details should be checked against the publisher record.</p></Milestone>
    <Milestone><small>2020</small><h3>Ensemble Machine Learning Models for Simulating the Missile Defense System</h3><p>S Jin, MK Dahouda, I Joe · Data Science and Algorithms in Systems</p></Milestone>
    <Milestone><small>2020</small><h3>A DTN Gateway-Based Architecture for Web Access in Space Internet</h3><p>MK Dahouda, D Lim, K Lee, I Joe · Intelligent Algorithms in Software Engineering</p></Milestone>
    <Milestone><small>2020</small><h3>DTN-SMTP: A Novel Mail Transfer Protocol with Minimized Interactions for Space Internet</h3><p>D Lee, J Kang, MK Dahouda, I Joe, K Lee · Computational Science and Its Applications (ICCSA 2020)</p></Milestone>
    <Milestone><small>2021</small><h3>Mongolian Automatic License Plate Recognition System with Convolutional Neural Networks</h3><p>Authors as listed in the CV · Korean Society publication, 19 (1), 31–34</p></Milestone>
    <Milestone><small>2021</small><h3>A Deep Learning-based for Spanish and English Sentiment Analysis</h3><p>Authors as listed in the CV · Korean Society publication, 19 (1), 14–16</p></Milestone>
    <Milestone><small>Year not specified in CV</small><h3>Language-based Classification of Words using Deep Learning</h3><p>ND Zacharia, MK Dahouda, I Joe · Proceedings of the Korea Information Processing Society Conference, 411–414</p></Milestone>
   </Timeline><HeroActions><Button href="https://scholar.google.com/citations?user=Bzi--3IAAAAJ&hl=en" target="_blank" rel="noreferrer">View Google Scholar <FiArrowUpRight/></Button><Button $light href="https://github.com/dahouda2pro" target="_blank" rel="noreferrer">Explore GitHub <FiArrowUpRight/></Button></HeroActions></Section>
   <Section id="career"><SectionHead><div><Eyebrow>Career history</Eyebrow><H2>Professional experience</H2></div><SectionIntro>Positions, research appointments, internships and professional training recorded in my CV.</SectionIntro></SectionHead><Timeline>
    <Milestone><small>September 2025 – Present</small><h3>Senior Data Scientist · Kamoto Copper Company (KCC)</h3><p>Mining industry · Data science and analytics.</p></Milestone>
    <Milestone><small>February 2023 – Present · Dates as stated in CV</small><h3>Associate Professor · Protestant University of Lubumbashi</h3><p>University teaching and academic activities.</p></Milestone>
    <Milestone><small>October – November 2022</small><h3>Teaching Assistant · AI research for wireless communication</h3></Milestone>
    <Milestone><small>May – August 2022</small><h3>Back-end Web Developer · Metamix NFT Marketplace</h3></Milestone>
    <Milestone><small>April 2020 – 2023</small><h3>Researcher · Automated Big Data analysis model recommendation</h3><p>Machine learning, deep learning models and hyperparameter optimization.</p></Milestone>
    <Milestone><small>February – April 2019</small><h3>Grand Challenge of Artificial Intelligence Competition · Korea</h3></Milestone>
    <Milestone><small>September 2018</small><h3>Master's Student · Mobile Network Intelligence Lab, Hanyang University</h3></Milestone>
    <Milestone><small>April – June 2017</small><h3>Teaching Assistant · MULOLWA ISIM, Lubumbashi</h3><p>Web and Internet Technology.</p></Milestone>
    <Milestone><small>March – April 2017</small><h3>Teaching Assistant · Protestant University of Lubumbashi</h3><p>Introduction to Java Android Programming.</p></Milestone>
    <Milestone><small>December 2015 – January 2016</small><h3>Intern · Kamoto Copper Company (KCC), Kolwezi</h3><p>Computer Network Department · Technician.</p></Milestone>
    <Milestone><small>February – March 2013</small><h3>Professional Training · Afrinet Company, Lubumbashi</h3><p>IT Department · Technician.</p></Milestone>
    <Milestone><small>November – December 2011 and November – December 2010</small><h3>Professional Training · Vodacom (Vodanet ISP), Lubumbashi</h3><p>Technician.</p></Milestone>
   </Timeline></Section>
   <Section id="education"><SectionHead><div><Eyebrow>Academic background</Eyebrow><H2>Education & qualifications</H2></div></SectionHead><Timeline>
    <Milestone><small>2020 – 2023</small><h3>Doctorate · Computer Software Engineering</h3><p>Hanyang University, Korea. Research: “NASNet-based Feature Extraction with Modular Neural Network for Image Classification with HPO”.</p></Milestone>
    <Milestone><small>2018 – 2020</small><h3>Master's · Computer Software Engineering</h3><p>Hanyang University, Korea. Thesis: “A DTN gateway-based architecture for web access in the Internet space”.</p></Milestone>
    <Milestone><small>2017 – 2018</small><h3>Korean Proficiency Test · TOPIK Level 3</h3><p>Sunmoon University, Korea.</p></Milestone>
    <Milestone><small>2008 – 2016</small><h3>Bachelor's Degree · Computer Science</h3><p>Protestant University of Lubumbashi, D.R. Congo. The CV summary describes this as Information Systems Engineering, while the education section labels it Computer Science. Project: “Study of the establishment of an information sharing platform between the territorial divisions of a city”.</p></Milestone>
    <Milestone><small>1999 – 2006</small><h3>Scientific Section Diploma</h3><p>Kiwele High School, Lubumbashi, D.R. Congo.</p></Milestone>
    <Milestone><small>1992 – 1998</small><h3>Primary School Certificate</h3><p>Malkia Wa Amani Primary School, Lubumbashi, D.R. Congo.</p></Milestone>
   </Timeline></Section>
   <Section id="skills"><SectionHead><div><Eyebrow>Technical toolkit</Eyebrow><H2>Skills, certifications & languages</H2></div><SectionIntro>Skills and professional development recorded in my CV, together with technologies used in my applied work.</SectionIntro></SectionHead><TwoCol><div><H2 style={{fontSize:23,marginTop:0}}>Technical skills</H2><Stack>{['Microsoft Word','Microsoft Excel','PowerPoint','Outlook','MySQL','PHP','SQL','Python','React.js','Next.js','UML','HTML','CSS','WordPress','Windows 7/8/10','Linux','Windows Server','End User Computing – Level 1 / Basic Support Service Desk','Machine Learning','Deep Learning','TensorFlow','Keras','OpenCV','Kedro','Apache Airflow','MinIO','Power BI'].map(x=><StackTag key={x}>{x}</StackTag>)}</Stack><Body>CV-listed strengths: communication, decision-making through analysis of alternatives, and generating and integrating new ideas into practical results.</Body></div><div><H2 style={{fontSize:23,marginTop:0}}>Certifications & training</H2><Timeline><Milestone><h3>Advanced NLP with Python for Machine Learning</h3></Milestone><Milestone><h3>Applied Machine Learning: Algorithms</h3></Milestone><Milestone><h3>Building and Deploying Deep Learning Applications with TensorFlow</h3></Milestone><Milestone><h3>Building Deep Learning Applications with Keras 2.0</h3></Milestone><Milestone><h3>Deep Learning: Image Recognition</h3></Milestone></Timeline><H2 style={{fontSize:23,marginTop:36}}>Languages</H2><Stack>{['French · Fluent','Lingala · Fluent','Swahili · Fluent','English · Advanced','Korean · Intermediate'].map(x=><StackTag key={x}>{x}</StackTag>)}</Stack></div></TwoCol></Section>
   <Section id="cv-projects"><SectionHead><div><Eyebrow>Research & development</Eyebrow><H2>Research projects</H2></div><SectionIntro>Specific industry and research projects named in my CV.</SectionIntro></SectionHead><ProjectGrid>
    <Project><div className="top"><FiActivity size={23}/><span>2023</span></div><h3>INS Integrated Test Simulator</h3><p>Software development for an integrated navigation equipment test simulator, including navigation equipment simulation and external-object creation simulation.</p><div className="tags"><span>HD Hyundai Global Service Co., Ltd.</span><span>Software Development</span></div></Project>
    <Project><div className="top"><FiLayers size={23}/><span>2020</span></div><h3>Automated Big Data Analysis Model Recommendation</h3><p>Automation technology to characterize data and problems and recommend Big Data analysis models, including model selection, feature engineering, hyperparameter tuning and model deployment.</p><div className="tags"><span>Securelayer Co., Ltd.</span><span>AutoML</span><span>Researcher</span></div></Project>
   </ProjectGrid></Section>
   <Section id="contact" style={{borderBottom:0,paddingBottom:45}}><Contact><div><Eyebrow>Start a conversation</Eyebrow><H2 style={{fontSize:32}}>Let's build something meaningful.</H2><SectionIntro>Open to professional collaborations, applied AI initiatives, research discussions and teaching opportunities.</SectionIntro></div><span style={{fontSize:12,color:"#718096",fontWeight:600}}><a href="mailto:dahouda37@gmail.com" style={{color:"#2468c7",fontWeight:700,textDecoration:"none"}}>dahouda37@gmail.com</a></span></Contact></Section>
   <Footer><span>© {new Date().getFullYear()} Dahouda Mwamba Kasongo. All rights reserved.</span><span><a href="https://www.linkedin.com/in/dahouda2mwamba/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.researchgate.net/profile/Dahouda-Mwamba" target="_blank" rel="noreferrer">ResearchGate</a><a href="https://github.com/dahouda2pro" target="_blank" rel="noreferrer">GitHub</a><a href="https://scholar.google.com/citations?user=Bzi--3IAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a></span></Footer>
  </Container>
 </>;
}
