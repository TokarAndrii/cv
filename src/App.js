import { Row, Col, Divider } from "antd";
import CVHeader from "./components/header/";
import ContactItem from "./components/contacts/ContactItem";
import EducationItem from "./components/education/EducationItem";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/SkillIs";
import styles from "./App.module.css";
import "antd/dist/antd.css";
import data from "./data/resource.json";
import locationIcon from "./data/icons/location.svg";
import phoneIcon from "./data/icons/phone.svg";
import emailIcon from "./data/icons/mail.svg";
import githubIcon from "./data/icons/github.svg";
import linkedinIcon from "./data/icons/linkedin.svg";
import skypeIcon from "./data/icons/skype.svg";

//const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div style={{ padding: "24px 48px" }}>
      <Row>
        <Col span={24}>
          <CVHeader />
        </Col>
      </Row>
      <Row gutter={[12, 0]}>
        <Col span={10}>
          <h3 className={styles.sectionName}>Contact</h3>
          <Divider className={styles.divider} />
          <ContactItem
            name="Address"
            data={data.contacts.address}
            icon={locationIcon}
          />
          <ContactItem
            name="Phone"
            data={data.contacts.phone}
            icon={phoneIcon}
          />
          <ContactItem
            name="Email"
            data={data.contacts.email}
            icon={emailIcon}
          />
          <ContactItem
            name="GitHub"
            data={data.contacts.github}
            icon={githubIcon}
          />
          <ContactItem
            name="LinkedIn"
            data={data.contacts.linkedin}
            icon={linkedinIcon}
          />
          <ContactItem
            name="Skype"
            data={data.contacts.skype}
            icon={skypeIcon}
          />
          <div style={{ marginTop: "24px" }}>
            <h3 className={styles.sectionName}>Education</h3>
            <Divider className={styles.divider} />
            {data.education.map((item) => {
              return <EducationItem {...item} />;
            })}
          </div>
          <div style={{ marginTop: "24px" }}>
            <h3 className={styles.sectionName}>Skills</h3>
            <Divider className={styles.divider} />
            <Skills />
          </div>
        </Col>

        <Col span={0.5}>
          <Divider
            className={styles.divider}
            type="vertical"
            style={{ height: "100%", marginTop: "40px" }}
          />
        </Col>

        <Col span={13}>
          <h3 className={styles.sectionName}>Profile</h3>
          <Divider className={styles.divider} />
          <div>{data.profileDescription}</div>

          <div style={{ marginTop: "24px" }}>
            <h3 className={styles.sectionName}>Work Experience</h3>
            <Divider className={styles.divider} />
            <Experience experience={data.experience} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>footer</Col>
      </Row>
    </div>
  );
}

export default App;
