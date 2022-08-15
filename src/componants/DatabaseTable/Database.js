import React, { useMemo } from "react";
import { useTable } from "react-table";
import database from "./database.json";
import { COLUMNS } from "./columns";
import "./database.css";

export const Database = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => database, []);

  const tabelInstance = useTable({
    columns: columns,
    data: data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tabelInstance;
  return (
    <>
      <center>
        <h2 className="h2 mt-5">Employee DataBase Table</h2>
      </center>

      <table
        className="w3-table-all w3-card-4 m-4 mr-4 ml-3"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th scope="col" {...columns.getHeaderProps()}>
                  {columns.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Database;
