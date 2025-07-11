import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import pydown from "../../Assets/Projects/pydown.png";
import hospital from "../../Assets/Projects/hospital.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import devtechblog from "../../Assets/Projects/devtechblog.png"
import interviewer from "../../Assets/Projects/interviewer.png"

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
              description="PyDown is a command line application that enables you to download video/audio from youtube and also you can play the video directly from your terminal"
              ghLink="https://github.com/Ericode254/PyDown.git"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devtechblog}
              isBlog={false}
              title="devtechblog"
              description="Devtechblog is my own personal blog where i talk about tech and linux and also note taking as a crucial part of learning"
              ghLink="https://github.com/Ericode254/neo-blog-scribe.git"
              demoLink="https://devtechblog.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interviewer}
              isBlog={false}
              title="Interviewer"
              description="Interviewer is a platform where recruitors can signup and host interviews for their interviewees without physically meeting"
              ghLink="https://github.com/Ericode254/Interviewer.git"
              demoLink="https://interviewhost.netlify.app/"
            />
          </Col>

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
