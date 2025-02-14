import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import pydown from "../../Assets/Projects/pydown.png";
import hospital from "../../Assets/Projects/hospital.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="StrokeCare"
              description="A simple hospital system that enanbles users to get predictions of there stroke status from a trained model"
              ghLink="https://github.com/Ericode254/HospitalSystemClient.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Edumeet"
              description="Edumeet is a platform where students can get access to events happening in their respective instutions and give feedback"
              ghLink="https://github.com/Ericode254/EdumeetClient.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pydown}
              isBlog={false}
              title="PyDown"
              description="PyDown is a command line application that enables you to download video/audio form youtube and also you can play the video directly from your terminal"
              ghLink="https://github.com/Ericode254/PyDown.git"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card"> */}
          {/*   <ProjectCard */}
          {/*     imgPath={leaf} */}
          {/*     isBlog={false} */}
          {/*     title="Edumeet" */}
          {/*     description="Edumeet is a platform that enables teachers or mentors to host meetings that students can react to and submit their attendance" */}
          {/*     ghLink="" */}
          {/*     // demoLink="https://plant49-ai.herokuapp.com/" */}
          {/*   /> */}
          {/* </Col> */}

          {/* <Col md={4} className="project-card"> */}
          {/*   <ProjectCard */}
          {/*     imgPath={suicide} */}
          {/*     isBlog={false} */}
          {/*     title="Ai For Social Good" */}
          {/*     description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention." */}
          {/*     ghLink="https://github.com/soumyajit4419/AI_For_Social_Good" */}
          {/*   /> */}
          {/* </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="A face recognition application that can be able to detect faces"
              ghLink="https://github.com/Ericode254/FaceDetection.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
