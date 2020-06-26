import React, { useState } from "react";
import Table from "./components/Table";
import { employees } from "./employees.json";

function App() {
  const [sortedEmployees, setSortedEmployees] = useState(employees);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSort(column, isIncreasing) {
    console.log(`Sorting by ${column}, isIncreasing is ${isIncreasing}`);
    let newlySortedEmployees = [...sortedEmployees];

    function compareValues(a, b) {
      a = a[column];
      b = b[column];
      if (typeof a === "string") {
        a.toUpperCase();
        b.toUpperCase();
      }
      if (isIncreasing) return a > b ? 1 : -1;
      return b > a ? 1 : -1;
    }

    newlySortedEmployees = newlySortedEmployees.sort(compareValues);

    setSortedEmployees(newlySortedEmployees);
  }

  function handleFilter({ target }) {
    setSearchTerm(target.value);
    console.log(`Filter employees by name contains "${target.value}"`);
    let newlySortedEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(target.value.toLowerCase())
    );
    setSortedEmployees(newlySortedEmployees);
    document
      .querySelectorAll("th")
      .forEach((th) =>
        th.classList.remove(
          "isSorted",
          "isSorted-increasing",
          "isSorted-decreasing"
        )
      );
  }

  return (
    <div className="container">
      <h1 style={{ margin: "4rem 0rem" }}>Employees</h1>
      <Table
        employees={sortedEmployees}
        handleSort={handleSort}
        handleFilter={handleFilter}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
