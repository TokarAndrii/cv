import React from "react";
import { Row, Col } from "antd";

const Experience = ({ experience }) => {
  return (
    <>
      {experience.map((experienceItem) => {
        return (
          <>
            <Row style={{ marginBottom: "12px" }}>
              <Col span={12}>
                <h4 style={{ marginBottom: 0, textTransform: "uppercase" }}>
                  {experienceItem.position}
                </h4>
                <h4>'{experienceItem.company}'</h4>
              </Col>
              <Col span={12}>
                <Row justify="end">
                  <h4>
                    {new Date(experienceItem.period.from).toLocaleDateString(
                      "en-GB",
                      {
                        year: "numeric",
                        month: "long"
                      }
                    )}
                  </h4>
                </Row>
              </Col>
            </Row>
            <Row>
              <h4>Projects:</h4>
              {experienceItem.projects.map((project) => {
                return (
                  <>
                    <Col span={24}>About: {project.description}</Col>
                    <Col span={24}>Duties: {project.duties}</Col>
                    <Col>Technologies: {project.technologies.join(", ")}</Col>
                    <Col>Links: {project.links.join(", ")}</Col>
                  </>
                );
              })}
            </Row>
          </>
        );
      })}
    </>
  );
};

export default Experience;
