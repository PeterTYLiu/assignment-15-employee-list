import React from "react";

function TableRow({ employee }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>{employee.location}</td>
    </tr>
  );
}

export default TableRow;
