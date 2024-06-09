import {
  Button,
  DatePicker,
  Form,
  FormProps,
  Input,
  Radio,
  Select,
  Space,
} from "antd";
import {
  EditUpdate,
  Person,
  actionSetEdit,
  addPerson,
} from "../../Store/Reducers/Test2Slice";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../Store/store";
import { useEffect, useState } from "react";

const { Option } = Select;

const Formdata = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const Data = useAppSelector((state) => state.test2.data);
  const Edit = useAppSelector((state) => state.test2.edit);
  const EditData = useAppSelector((state) => state.test2.editData);

  useEffect(() => {
    if (Edit) {
      onReset();
      editData(EditData);
    }
  }, [Edit]);

  const onFinish: FormProps<Person>["onFinish"] = (values) => {
    if (Edit) {
      dispatch(EditUpdate({ ...EditData, ...values }));
      dispatch(actionSetEdit(false));
    } else {
      alert("Save Success");
      let newId = Data[Data.length - 1]?.id || 0;
      dispatch(addPerson({ id: newId + 1, key: newId + 1, ...values }));
    }
    onReset();
  };

  const onFinishFailed: FormProps<Person>["onFinishFailed"] = (errorInfo) => {
    alert("Failed");
  };

  const onReset = () => {
    form.resetFields();
  };

  const editData = (values: Person) => {
    form.setFieldsValue(values);
  };

  return (
    <Space
      style={{
        width: "70%",
        border: "solid red",
        padding: "2%",
        borderRadius: "1em",
        marginLeft: "15%",
      }}
    >
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="inline"
        style={{ gap: 15 }}
        form={form}
      >
        <Form.Item<Person>
          label={t("Title")}
          name="prefix"
          rules={[{ required: true, message: "Please select your title!" }]}
          style={{ width: "17%" }}
        >
          <Select
            options={[
              { value: "mr", label: t("mr") },
              { value: "mrs", label: t("mrs") },
              { value: "ms", label: t("ms") },
            ]}
          />
        </Form.Item>

        <Form.Item<Person>
          label={t("fname")}
          name="fname"
          rules={[{ required: true, message: "Please input your first name!" }]}
          style={{ width: "35%" }}
        >
          <Input />
        </Form.Item>

        <Form.Item<Person>
          label={t("lname")}
          name="lname"
          rules={[{ required: true, message: "Please input your last name!" }]}
          style={{ width: "35%" }}
        >
          <Input />
        </Form.Item>

        <Form.Item<Person>
          label={t("dob")}
          name="dob"
          rules={[{ required: true, message: "Please select your birthday!" }]}
          getValueProps={(value) => ({ value: value && dayjs(Number(value)) })}
          normalize={(value) => value && `${dayjs(value).valueOf()}`}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item<Person>
          label={t("nationality")}
          name="nationality"
          rules={[
            { required: true, message: "Please input your nationality!" },
          ]}
          style={{ width: "50%" }}
        >
          <Select
            options={[
              { value: "thai", label: t("thai") },
              { value: "french", label: t("french") },
              { value: "American", label: t("American") },
            ]}
          />
        </Form.Item>

        <Form.Item<Person>
          label={t("citizenid")}
          name="citizenId"
          style={{ width: "100%" }}
        >
          <Input maxLength={13} style={{ width: "50%" }} />
        </Form.Item>

        <Form.Item<Person>
          label={t("gender")}
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
          style={{ width: "100%" }}
        >
          <Radio.Group>
            <Radio value="male">{t("male")}</Radio>
            <Radio value="female">{t("female")}</Radio>
            <Radio value="unsex">{t("unsex")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Person>
          label={t("mobile")}
          name="mobileprefix"
          rules={[{ required: true }]}
          style={{ width: "30%" }}
        >
          <Select>
            <Option value="66">+66</Option>
            <Option value="1">+1</Option>
            <Option value="33">+33</Option>
          </Select>
        </Form.Item>
        <Form.Item<Person>
          label=""
          name="mobile"
          rules={[
            { required: true, message: "Please input your mobile number!" },
          ]}
          style={{ width: "50%" }}
        >
          <Input />
        </Form.Item>

        <Form.Item<Person>
          label={t("passport")}
          name="passport"
          style={{ width: "100%" }}
        >
          <Input style={{ width: "50%" }} />
        </Form.Item>

        <Form.Item<Person>
          label={t("expected")}
          name="expectedsalary"
          rules={[
            { required: true, message: "Please input your expected salary!" },
          ]}
          style={{ width: "40%" }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            htmlType="button"
            onClick={() => {
              onReset();
              dispatch(actionSetEdit(false));
            }}
          >
            {t("reset")}
          </Button>
        </Form.Item>
        <Form.Item
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button htmlType="submit">{t("submit")}</Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Formdata;
