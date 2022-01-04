import React, { useState, useRef } from "react";
import MaterialTable from "material-table";
import "./Report.css";

export default function UserList() {
  const [columns, setColumns] = useState([
    { title: "Invoice ID", field: "ID" },
    { title: "User", field: "user" },
    { title: "Product Title", field: "product" },
    { title: "Type", field: "type" },
    { title: "Status", field: "status" },
    { title: "Amount", field: "amount" },
    { title: "Description", field: "description" },
    { title: "AddedDate", field: "added", type: "date" },
  ]);

  const [data, setData] = useState([
    {
      ID: "1ZB134",
      user: "Baran",
      product: "HP Printer",
      type: "sold",
      status: "debt",
      amount: "$234.34",
      description: "Hp description",
      added: "12.01.2022",
    },
    {
      ID: "1ZB134",
      user: "Baran",
      product: "HP Printer",
      type: "sold",
      status: "debt",
      amount: "$234.34",
      description: "Hp description",
      added: "12.01.2022",
    },
    {
      ID: "1ZB134",
      user: "Baran",
      product: "HP Printer",
      type: "sold",
      status: "debt",
      amount: "$234.34",
      description: "Hp description",
      added: "12.01.2022",
    },
    {
      ID: "1ZB134",
      user: "Baran",
      product: "HP Printer",
      type: "sold",
      status: "debt",
      amount: "$234.34",
      description: "Hp description",
      added: "12.01.2022",
    },
    {
      ID: "1ZB134",
      user: "Baran",
      product: "HP Printer",
      type: "sold",
      status: "debt",
      amount: "$234.34",
      description: "Hp description",
      added: "12.01.2022",
    },
  ]);

  return (
    <>
      <div className="reportBox">
        <div className="reportLg">
          <h3 className="reportLgTitle">Report</h3>
          <div className="forms">
            <form>
              <div className="form_one">
                <div>User ID:</div>
                <input type="text" />
                <div>Status:</div>
                <input type="text" />
              </div>

              <div className="form_two">
                <div>Product ID:</div>
                <input type="text"></input>
                <div>From Date:</div>
                <input type="date"></input>
              </div>

              <div className="form_three">
                <div>Transaction ID:</div>
                <input type="text"></input>
                <div>To Date:</div>
                <input type="date"></input>
              </div>
            </form>
            <div className="reportbtn">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
          <h3>Report:</h3>
          <div className="ReportTable">
          <MaterialTable
            title="Report Details:"
            columns={columns}
            data={data}
            options={{
              paging: false,
              headerStyle: {
                backgroundColor: "#E74C3C",
                fontWeight: 600,
                fontSize: "20px",
                color: "white",
              },
              rowStyle: {
                fontWeight: 600,
              },
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);

                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                  }, 1000);
                }),
            }}
          />
          </div>
        </div>
      </div>
    </>
  );
}
