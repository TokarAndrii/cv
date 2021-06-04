import { Row, Col, Image } from "antd";
import styles from "./ContactItem.module.css";

const ContactItem = ({ name, icon, data }) => (
  <Row align="middle" justify="center" className={styles.wrapper}>
    <Col
      span={4}
      style={{
        display: "flex",
        justifyContent: "start"
      }}
    >
      <Image src={icon} preview={false} width={32} height={32} />
    </Col>
    <Col span={20}>
      <h4 style={{ marginBottom: "0px", color: "rgb(88, 88, 88)" }}>{name}</h4>
      <div>{data}</div>
    </Col>
  </Row>
);

export default ContactItem;
