import React from "react";
import TableRow from "./TableRow";

function Table({ employees, handleSort, handleFilter, searchTerm }) {
  function sortColumn({ target }) {
    let columnName = target.innerHTML.toLowerCase();
    let prevSortDirection;
    if (target.classList.contains("isSorted-increasing"))
      prevSortDirection = "increasing";
    if (target.classList.contains("isSorted-decreasing"))
      prevSortDirection = "decreasing";
    document
      .querySelectorAll("th")
      .forEach((th) =>
        th.classList.remove(
          "isSorted",
          "isSorted-increasing",
          "isSorted-decreasing"
        )
      );
    target.classList.add("isSorted");

    if (prevSortDirection === "increasing") {
      handleSort(columnName, false);
      target.classList.add("isSorted-decreasing");
    } else {
      handleSort(columnName, true);
      target.classList.add("isSorted-increasing");
    }
  }

  function handleEmpty() {
    if (!employees.length)
      return (
        <tr>
          <td
            colspan="4"
            style={{ textAlign: "center", color: "#aaa", padding: "2rem" }}
          >
            No results found
          </td>
        </tr>
      );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by employee name"
        value={searchTerm}
        style={{ width: "100%" }}
        onChange={handleFilter}
      />
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th onClick={sortColumn}>ID</th>
            <th onClick={sortColumn}>Name</th>
            <th onClick={sortColumn}>Position</th>
            <th onClick={sortColumn}>Location</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <TableRow employee={employee} key={employee.id} />
          ))}
          {handleEmpty()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
