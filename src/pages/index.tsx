import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  Box,
  Container,
  Show, Hide, Image, Flex,
  Stack,
  Heading,
  VStack,
  Spacer,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import NavBAr from '../components/NAvBAr';
import { useState } from 'react';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
/* FakeData */
import JSONDATA from '../MOCK_DATA.json'
import { Column } from 'react-table';

type TableData = {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  ip_address: number;
};
type TableProps = {
  data: TableData[];
};


const Index: React.FC<TableProps> = ({ data: TableData }) => {
  // interface TableColumn extends Column {
  //   Header: string;
  //   accessor: string;
  //   getHeaderProps?: (props?: any) => any;
  //   render?: (header: string) => string | React.ReactNode;
  // }
  const [searchValue, setSearchValue] = useState('');


  const data = React.useMemo(() => JSONDATA, [])





  const columns: Column<TableData>[] = useMemo(
    () => [

      // {
      //   Header: 'Column 2',
      //   accessor: 'col2',
      // },
      {
        Header: 'First Name',
        accessor: 'first_name',

      },
      {
        Header: 'Last Name',
        accessor: 'last_name',

      },
      {
        Header: 'Email',
        accessor: 'email',
        // accessor is the "key" in the data
      },
      {
        Header: 'Gender',
        accessor: 'gender',

      },
      {
        Header: 'IP address',
        accessor: 'ip_address',
        // accessor is the "key" in the data
      },

    ], [])





  const tableInstance = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance



  return (
    <Box>
      <Container maxW='container' color='#262626'>
        <NavBAr inputValue={searchValue} setInputValue={setSearchValue} />

        {/* Table */}
        <Hide breakpoint='(max-width: 1000px)'>
          <Box overflowX="auto">
            <TableContainer my='6' >
              <Table variant='simple' {...getTableProps()}>

                <Thead>
                  {
                    headerGroups.map((headerGroup) => (
                      <Tr {...headerGroup.getHeaderGroupProps()}>
                        {
                          headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps()}
                              style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                              }}>{column.render('Header')}
                            </Th>
                          ))
                        }
                      </Tr>
                    ))
                  }
                </Thead>
                {/* 
                <Tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row)         
                    return (
                      <Tr{...row.getRowProps()}>
                      {row.cells.map((cell) => {

                        return(
                          <Td {... cell.getCellProps()}
                        >
                          {cell.render('Cell')}

                        </Td>

                        )
                      })}

                      </Tr>
                    )
                             })} */}


                <Tbody {...getTableBodyProps()}>
                  {rows.slice(1, 100).filter((row) => {
                    if (searchValue === "") {
                      return true;
                    }
                    return row.cells.some((cell) => {
                      return cell.value.toString().toLowerCase().includes(searchValue.toLowerCase());
                    });
                  }).map((row) => {
                    prepareRow(row);
                    return (
                      <Tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <Td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </Td>
                          );
                        })}
                      </Tr>
                    );
                  })}

                  {/* {JSONDATA.slice(1, 100).filter((val: any) => {
                    if (searchValue == " ") {
                      return val
                    }
                    else if (
                      val.first_name.toLowerCase().includes(searchValue.toLocaleLowerCase()) || val.last_name.toLowerCase().includes(searchValue.toLocaleLowerCase()) || val.email.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
                      return val;
                    }
                  }).map((val: any, id: any) => {
                    return (
                      <Tr key={id}>
                        <Td>
                          <Checkbox />
                        </Td>
                        <Td>{val.first_name}</Td>
                        <Td>{val.last_name} </Td>
                        <Td>{val.email}</Td>
                        <Td>{val.gender}</Td>
                        <Td>{val.ip_address}</Td>
                      </Tr>
                    )

                  })} */}


                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Hide>


        {/* //card component */}
        <Show breakpoint='(max-width: 1000px)'>

          {JSONDATA.slice(1, 100).filter((val: any) => {
            if (searchValue == " ") {
              return val
            }
            else if (
              val.first_name.toLowerCase().includes(searchValue.toLocaleLowerCase()) || val.last_name.toLowerCase().includes(searchValue.toLocaleLowerCase()) || val.email.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
              return val;
            }
          }).map((val: any, id: any) => {
            return (
              <Box border="1px " borderColor="silver" borderRadius="md" p="30px" m="20px">

                <Flex>
                  <Box >
                    <Text fontSize='sm'>
                      {val.first_name} {val.last_name}
                    </Text>
                    <Text pt="1" fontSize='xs'>
                      {val.email}
                    </Text>
                    <Text pt="1" fontSize='xs'>
                      {val.ip_address}
                    </Text>
                  </Box>
                  <Spacer />
                  <Box  >
                    <Button colorScheme='gray' fontSize='md' >+</Button>
                  </Box>
                </Flex>






              </Box>
            )
          })}

        </Show>

      </Container>
    </Box >
  );
}

export default Index;
