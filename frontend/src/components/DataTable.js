import React from 'react';
import { useTable } from 'react-table';

const DataTable = ({ data }) => {
  const columns = React.useMemo(() => [
    { Header: 'Title', accessor: 'title' },
    { Header: 'Year', accessor: 'year' },
    { Header: 'Rating', accessor: 'imdb.rating' },
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column,index) => (
              <th key={'th-'+index} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell,index) => (
                <td key={'td-'+index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
