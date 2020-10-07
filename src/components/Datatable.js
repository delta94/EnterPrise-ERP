import React from "react";
import "./Datatable.css";

function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div className="datatable">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            {data[0] &&
              columns.map((heading) => <th bgcolor="white">{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
