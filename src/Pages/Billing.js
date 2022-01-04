import React, { useState } from "react";
import MaterialTable from "material-table";
import "./Billing.css";

export default function Billing() {
  const [columns, setColumns] = useState([
    { title: "Order ID", field: "ID" },
    { title: "Customer", field: "customer" },
    { title: "Status", field: "status" },
    { title: "Total", field: "total" },
    { title: "AddedDate", field: "added", type: "date" },
    { title: "ModifiedDate", field: "modified", type: "date" },
  ]);

  const [data, setData] = useState([
    {
      ID: "1ZB134",
      customer: "Baran",
      status: "Completed",
      total: "$124.00",
      added: "12.01.2022",
      modified: "12.01.2022",
    },
    {
      ID: "1ZB134",
      customer: "Baran",
      status: "Completed",
      total: "$124.00",
      added: "12.01.2022",
      modified: "12.01.2022",
    },
    {
      ID: "1ZB134",
      customer: "Baran",
      status: "Completed",
      total: "$124.00",
      added: "12.01.2022",
      modified: "12.01.2022",
    },
    {
      ID: "1ZB134",
      customer: "Baran",
      status: "Completed",
      total: "$124.00",
      added: "12.01.2022",
      modified: "12.01.2022",
    },
    {
      ID: "1ZB134",
      customer: "Baran",
      status: "Completed",
      total: "$124.00",
      added: "12.01.2022",
      modified: "12.01.2022",
    },
  ]);

  return (
    <div className="BillingBox">
      <div className="BillingLg">
        <h3 className="BillingLgTitle">Billing and Balance</h3>
        <div className="forms">
          <form>
            <div className="form_one">
              <div>Order ID:</div>
              <input type="text" />
              <div>Order Status:</div>
              <input type="text" />
            </div>

            <div className="form_two">
              <div>Customer:</div>
              <input type="text"></input>
              <div>Added Date:</div>
              <input type="date"></input>
            </div>

            <div className="form_three">
              <div>Total:</div>
              <input type="text"></input>
              <div>Modified Date:</div>
              <input type="date"></input>
            </div>
          </form>
          <div className="Billingbtn">
            <button className="btn btn-danger">Filter</button>
          </div>
        </div>
        <br />
        <h3>Billings</h3>
        <MaterialTable
          title="Billing Details:"
          columns={columns}
          data={data}
          options={{
            paging: false,
            headerStyle: {
              backgroundColor: "#1ABC9C",
              fontWeight: 600,
              fontSize: "20px",
              color: "white",
            },
            rowStyle: {
              fontWeight: 600
              }
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
        <div>
          <br />
          <h3>Balance Management</h3>
          <MaterialTable
          title="Balance:"
          columns={columns}
          data={data}
          options={{
            paging: false,
            headerStyle: {
              backgroundColor: "#1ABC9C",
              fontWeight: 600,
              fontSize: "20px",
              color: "white",
            },
            rowStyle: {
              fontWeight: 600
              }
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
  );
}
