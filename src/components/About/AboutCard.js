import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Erick Jillo </span>
            from <span className="purple"> Malindi, Kenya.</span>
            <br />
            I am currently doing freelance jobs as a software developer.
            <br />
            I am mostly a self taught software developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing linux configurations and ricing my system
            </li>
            <li className="about-activity">
              <ImPointRight /> Hanging with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it its bad!"{" "}
          </p>
          <footer className="blockquote-footer">Cory House</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
