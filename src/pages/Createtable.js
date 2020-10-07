import React, { useState, useEffect, forwardRef } from "react";
import Sidebar from "../components/Sidebar";
import "./Createtable.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import {
  Grid,
  TextField,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Createtable() {
  const [data, setData] = useState([]); //table data
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [tableID, setTableID] = useState("");
  const [des, setDes] = useState("");
  const [{ user, user_details }, dispatch] = useStateValue();

  var columns = [
    { title: "Id", field: "id", hidden: false },
    { title: "Product", field: "product" },
    { title: "Product ID", field: "product_Id" },
    { title: "Quantity", field: "quantity" },
    { title: "Amount", field: "amount" },
  ];

  const theme = createMuiTheme({
    overrides: {
      MuiInputLabel: {
        // Name of the component ⚛️ / style sheet
        root: {
          // Name of the rule
          color: "white",
          "&$focused": {
            // increase the specificity for the pseudo class
            color: "white",
          },
        },
      },
    },
  });

  const create_btn = () => {
    //alert("You are not authorized Sorry!");
    //Comment For Production
    //{
    //  /*
    document.querySelector(".createtable__form").classList.add("hide");
    document
      .querySelector(".createtable__renderTable")
      .classList.add("show_table");
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(tableID)
        .set({
          tableID: tableID,
          des: des,
        });
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(tableID)
        .collection("orderData")
        .onSnapshot((snapshot) => {
          const ar = [];
          snapshot.docs.map((doc) => {
            ar.push(doc.data().data);
            //console.log(doc.data().data);
          });
          setData(ar);
        });
      //  }
      //   */
    }
  };

  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = [];
    if (newData.id === undefined) {
      errorList.push("Please enter first name");
    }
    if (newData.product === undefined) {
      errorList.push("Please enter last name");
    }
    if (newData.product_Id === undefined) {
      errorList.push("Please enter last name");
    }
    if (newData.quantity === undefined) {
      errorList.push("Please enter last name");
    }
    if (newData.amount === undefined) {
      errorList.push("Please enter last name");
    }
    if (errorList.length < 1) {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(tableID)
          .collection("orderData")
          .doc(oldData.id)
          .delete()
          .then(
            db
              .collection("users")
              .doc(user.uid)
              .collection("orders")
              .doc(tableID)
              .collection("orderData")
              .doc(newData.id)
              .set({
                data: newData,
                tableID: tableID,
              })
              .then((res) => {
                db.collection("users")
                  .doc(user.uid)
                  .collection("orders")
                  .doc(tableID)
                  .collection("orderData")
                  .onSnapshot((snapshot) => {
                    const ar = [];
                    snapshot.docs.map((doc) => {
                      ar.push(doc.data().data);
                      //console.log(doc.data().data);
                    });
                    setData(ar);
                  });
                resolve();
                setErrorMessages([]);
                setIserror(false);
              })
          );
      }
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = [];
    if (newData.id === undefined) {
      errorList.push("Please enter first name");
    }
    if (newData.product === undefined) {
      errorList.push("Please enter last name");
    }
    if (newData.product_Id === undefined) {
      errorList.push("Please enter last name");
    }
    if (newData.quantity === undefined) {
      errorList.push("Please enter last name");
    }
    if (newData.amount === undefined) {
      errorList.push("Please enter last name");
    }

    if (errorList.length < 1) {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(tableID)
          .collection("orderData")
          .doc(newData.id)
          .set({
            data: newData,
            tableID: tableID,
          })
          .then((res) => {
            db.collection("users")
              .doc(user.uid)
              .collection("orders")
              .doc(tableID)
              .collection("orderData")
              .onSnapshot((snapshot) => {
                const ar = [];
                snapshot.docs.map((doc) => {
                  ar.push(doc.data().data);
                  //console.log(doc.data().data);
                });
                setData(ar);
              });
            resolve();
            setErrorMessages([]);
            setIserror(false);
          });
      }
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      alert("Please Enter All Details");
      resolve();
    }
  };

  const handleRowDelete = (oldData, resolve) => {
    db.collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(tableID)
      .collection("orderData")
      .doc(oldData.id)
      .delete()
      .then((res) => {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(tableID)
          .collection("orderData")
          .onSnapshot((snapshot) => {
            const ar = [];
            snapshot.docs.map((doc) => {
              ar.push(doc.data().data);
              //console.log(doc.data().data);
            });
            setData(ar);
          });
        resolve();
      });
  };

  return (
    <div classNam="createtable">
      <div className="createtable__container">
        <Sidebar className="createtable__sidebar" />
        <div className="createtable__body">
          <div className="createtable__body__top">
            <h1>Create Table 🚀</h1>
          </div>
          <div className="createtable__form">
            <Typography variant="h6">Create Table</Typography>
            <Grid className="createtable__form__grid" container spacing={3}>
              <ThemeProvider theme={theme}>
                <TextField
                  required
                  label="Table ID"
                  onChange={(e) => setTableID(e.target.value)}
                />
                <TextField
                  required
                  label="Description"
                  onChange={(e) => setDes(e.target.value)}
                />
              </ThemeProvider>
              <button className="createtable__btn" onClick={create_btn}>
                Create
              </button>
            </Grid>
          </div>

          <div
            className="createtable__renderTable hide"
            style={{ maxWidth: "100%" }}
          >
            <MaterialTable
              title=""
              style={({ maxWidth: "100%" }, { width: 1000 })}
              columns={columns}
              data={data}
              icons={tableIcons}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    handleRowUpdate(newData, oldData, resolve);
                  }),
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    handleRowAdd(newData, resolve);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    handleRowDelete(oldData, resolve);
                  }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createtable;
