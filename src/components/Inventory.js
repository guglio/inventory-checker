import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'
import { getInventory } from '../services/'

const ORDER_URL = 'https://www.tesla.com/'

function Table ({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}

const Inventory = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(undefined);

  useEffect(() => {
    const parseResults = data => {
      let returnData = data.reduce((acc, curr) => {
        const {
          VIN,
          TrimName,
          City,
          Model,
          OptionCodeSpecs: {
            C_OPTS: { options }
          }
        } = curr
        return (acc = [
          ...acc,
          {
            id: VIN,
            VIN,
            TrimName,
            City,
            Model,
            options: options.map(c => c.name).join(', ')
          }
        ])
      }, [])

      return returnData
    }

    const inventoryInteval = setInterval(
      () =>
        getInventory().then(res => {
          const { data } = res;
          setData(parseResults(data.results))
          setUpdate(`${new Date()}`)
        }),
      10000
    )

    return () => {
      clearInterval(inventoryInteval)
    }
  }, [])

  const columns = [
    {
      accessor: row => (
        <a
          href={`${ORDER_URL}${row.Model}/order/${row.VIN}`}
          target='_blank'
          rel='noreferrer'
        >
          {row.VIN}
        </a>
      ),
      Header: 'VIN',
      width: '20%'
    },
    { accessor: 'Model', Header: 'Model', width: '20%' },
    { accessor: 'City', Header: 'City', width: '20%' },
    { accessor: 'TrimName', Header: 'TrimName', width: '20%' },
    { accessor: 'options', Header: 'options', width: '20%' }
  ]

  return (
    <div>
      <CssBaseline />
      <Table data={data} columns={columns} />
  <div>Last update: {update}</div>
    </div>
  )
}

export default Inventory
