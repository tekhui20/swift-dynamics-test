import { Button, Divider, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Formdata from "../../Components/test2/Formdata";
import Tabledata from "../../Components/test2/Tabledata";
import { useEffect } from "react";
import { actionDataUpdate } from "../../Store/Reducers/Test2Slice";

const { Title } = Typography;

const Test2 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("data")) {
      dispatch(
        actionDataUpdate(JSON.parse(localStorage.getItem("data") || ""))
      );
    }
  }, []);

  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <Link to="/">
        <Button style={{ position: "absolute", top: 40, right: 5 }}>
          {t("home")}
        </Button>
      </Link>
      <Title>{t("layout&style")}</Title>
      <Formdata />
      <Divider />
      <Tabledata />
    </Space>
  );
};

export default Test2;
