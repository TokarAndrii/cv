import { Row, Col } from "antd";

const EducationItem = ({ training, nameEducational, year }) => (
  <Row style={{ marginBottom: "12px" }}>
    <Col span={14}>
      <h4 style={{ marginBottom: 0 }}>{training}</h4>
    </Col>
    <Col span={14}>'{nameEducational}'</Col>
    <Col span={14}>{year}</Col>
  </Row>
);

export default EducationItem;
