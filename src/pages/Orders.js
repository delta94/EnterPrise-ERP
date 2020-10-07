import React, { useState, useEffect, forwardRef } from "react";
import Sidebar from "../components/Sidebar";
import "./Orders.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

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

function Orders() {
  const [data, setData] = useState([]); //table data
  const [{ user, user_details }, dispatch] = useStateValue();
  const user_history = useHistory();

  var columns = [
    { title: "Table Id", field: "tableID", hidden: false, editable: "never" },
    { title: "Description", field: "des", editable: "never" },
  ];

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .collection("orders")
      .onSnapshot((snapshot) => {
        const ar = [];
        snapshot.docs.map((doc) => {
          ar.push(doc.data());
          console.log(doc.data());
        });
        setData(ar);
      });
  }, []);

  const handleRowUpdate = () => {
    if (user) {
      user_history.push("./EditTable");
    }
  };

  const handleRowDelete = (oldData, resolve) => {
    // alert("You are not authorized Sorry!");
    //comment below resolve for production
    // resolve();
    //  {
    //   /*
    db.collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(oldData.tableID)
      .delete()
      .then((res) => {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .onSnapshot((snapshot) => {
            const ar = [];
            snapshot.docs.map((doc) => {
              ar.push(doc.data());
              console.log(doc.data());
            });
            setData(ar);
          });
        resolve();
      });
    //  */
    // }
  };

  return (
    <div className="orders">
      <div className="orders__container">
        <Sidebar className="orders__sidebar" />
        <div className="orders__body">
          <h1>Orders 🚀</h1>
          <div className="orders__body__table">
            <MaterialTable
              title=""
              style={({ maxWidth: "100%" }, { width: 1000 })}
              columns={columns}
              data={data}
              icons={tableIcons}
              editable={{
                onRowUpdate: () =>
                  new Promise(() => {
                    handleRowUpdate();
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

export default Orders;
