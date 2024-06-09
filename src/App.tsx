import { Select } from "antd";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

const handleChange = (value: string) => {
  i18next.changeLanguage(value);
};

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Select
        defaultValue={t("en")}
        value={t(i18next.language)}
        style={{ width: 80, position: "absolute", right: 5, top: 5 }}
        onChange={handleChange}
        options={[
          { value: "en", label: t("en") },
          { value: "th", label: t("th") },
        ]}
      />
      <Outlet />
    </>
  );
}

export default App;
