import { Row, Col, Image } from "antd";
import styles from "./Header.module.css";
import data from "../../data/resource.json";
import myFoto from "../../data/my_foto.png";

const Header = () => {
  return (
    <>
      <Row align="middle" justify="center" style={{ marginBottom: "48px" }}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "24px"
          }}
        >
          <Image preview={false} height={150} width={150} src={myFoto} />
        </Col>
        <Col span={12}>
          <div className={styles.name}>
            {data.name.lastName} {data.name.firstName}
          </div>
          <div className={styles.position}>{data.position}</div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
