import { useState } from "react";
import { useAppSelector } from "../../Store/store";
import { Button, Table } from "antd";
import {
  Person,
  actionSetEdit,
  actionSetEditData,
  deletePerson,
} from "../../Store/Reducers/Test2Slice";
import type { TableProps } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

type ColumnsType<T extends object> = TableProps<T>["columns"];

const Tabledata = () => {
  const Data = useAppSelector((state) => state.test2.data);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = useState<Person[]>([]);

  const columns: ColumnsType<Person> = [
    {
      title: t("name"),
      dataIndex: "fname",
      render: (_, record) => <p>{record.fname + " " + record.lname}</p>,
      sorter: (a, b) => (a.fname < b.fname ? -1 : a.fname > b.fname ? 1 : 0),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("gender"),
      dataIndex: "gender",
      render: (v) => <p>{t(v)}</p>,
      sorter: (a, b) => (a.fname < b.fname ? -1 : a.fname > b.fname ? 1 : 0),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("mobile"),
      dataIndex: "mobile",
      render: (_, record) => <p>{"+" + record.mobileprefix + record.mobile}</p>,
      sorter: (a, b) => (a.fname < b.fname ? -1 : a.fname > b.fname ? 1 : 0),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("nationality"),
      dataIndex: "nationality",
      render: (v) => <p>{t(v)}</p>,
      sorter: (a, b) => (a.fname < b.fname ? -1 : a.fname > b.fname ? 1 : 0),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: t("manage"),
      dataIndex: "",
      render: (_, record) => (
        <>
          <a
            style={{ color: "#000" }}
            onClick={() => {
              console.log("record", record);
              dispatch(actionSetEdit(true));
              dispatch(actionSetEditData(record));
            }}
          >
            {t("edit")}
          </a>{" "}
          <a
            style={{ color: "#000" }}
            onClick={() => dispatch(deletePerson({ id: record.id || 0 }))}
          >
            {t("delete")}
          </a>
        </>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Person[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRow(selectedRows);
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        style={{ marginLeft: "-73%" }}
        onClick={() => {
          selectedRow.map((item) => {
            dispatch(deletePerson({ id: item.id || 0 }));
          });
        }}
      >
        {t("delete")}
      </Button>
      <Table
        style={{ width: "80%" }}
        pagination={{ position: ["topRight"], pageSize: 5 }}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={Data}
      />
    </div>
  );
};

export default Tabledata;
