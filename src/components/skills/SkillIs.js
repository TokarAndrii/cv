import { Row, Col } from "antd";
import styles from "./Skills.module.css";
import data from "../../data/resource.json";

const Skills = () => {
  return Object.keys(data.skills).map((skill) => {
    return (
      <Row className={styles.row}>
        <Col>
          <span className={styles.sectionName}>
            {data.skills[skill].keyName}:
          </span>{" "}
          {data.skills[skill].values.map((value, index) => {
            return (
              <span>
                {value}
                {index !== data.skills[skill].values.length - 1 && ", "}
              </span>
            );
          })}
        </Col>
      </Row>
    );
  });
};

export default Skills;
