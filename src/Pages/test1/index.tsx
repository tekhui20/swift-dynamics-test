import { Button, Card, Divider, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Store/store";
import { useDispatch } from "react-redux";
import {
  moveObjectLeft,
  moveObjectRight,
  moveRandom,
} from "../../Store/Reducers/Test1Slice";
import { useTranslation } from "react-i18next";
import "../../Components/test1/test1.css";

const { Text, Title } = Typography;

const Test1 = () => {
  const ObjectionList = useAppSelector((state) => state.test1.ObjectList);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [mode, setMode] = useState(true);
  const toggleMode = () => setMode(!mode);

  const Shapes = (input: number) => {
    return (
      <Space
        style={{
          width: "100%",
          justifyContent: input === 0 ? "flex-end" : "flex-start",
          padding: "0 10%",
          boxSizing: "border-box",
        }}
      >
        {ObjectionList.map((item, i) => {
          return (
            (input === 0 ? i < 3 : i > 2) && (
              <Card
                className="card"
                style={{ width: 250 }}
                key={i}
                onClick={() => dispatch(moveRandom())}
              >
                <div id={item.name} className="object" />
              </Card>
            )
          );
        })}
      </Space>
    );
  };

  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <Link to="/">
        <Button style={{ position: "absolute", top: 40, right: 5 }}>
          {t("home")}
        </Button>
      </Link>
      <Title>{t("layout&style")}</Title>
      <Space style={{ width: "100%", justifyContent: "center" }}>
        <Card
          className={`card`}
          style={{ width: 200 }}
          bodyStyle={{
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => {
            dispatch(moveObjectLeft());
          }}
        >
          <div id="trileft" />
          <Text className="text">{t("moveshape")}</Text>
        </Card>
        <Card
          className={`card`}
          style={{ width: 400 }}
          bodyStyle={{
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => {
            toggleMode();
          }}
        >
          <div id="triup" />
          <div id="tridown" />
          <Text className="text">{t("moveposition")}</Text>
        </Card>
        <Card
          className={`card`}
          style={{ width: 200 }}
          bodyStyle={{
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => {
            dispatch(moveObjectRight());
          }}
        >
          <div id="triright" />
          <Text className="text">{t("moveshape")}</Text>
        </Card>
      </Space>
      <Divider />
      {Shapes(mode ? 0 : 1)}
      {Shapes(mode ? 1 : 0)}
    </Space>
  );
};

export default Test1;
