import { Card, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Home = () => {
  const { t } = useTranslation();
  return (
    <Space
      direction="horizontal"
      size={16}
      style={{ width: "100vw", height: "100vh", justifyContent: "center" }}
    >
      <Link to="/test1">
        <Card title={`${t("test")} 1`} style={{ width: 300 }}>
          <Text>{t("layout&style")}</Text>
        </Card>
      </Link>
      <Link to="/test2">
        <Card title={`${t("test")} 2`} style={{ width: 300 }}>
          <Text>{t("form&table")}</Text>
        </Card>
      </Link>
    </Space>
  );
};

export default Home;
