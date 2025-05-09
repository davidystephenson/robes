import { Thead, Tr, Th, Tbody, Td, HStack } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import ButtonRobe from './ButtonRobe'
import IconButtonRobe from './IconButtonRobe'
import InputRobe from './InputRobe'
import LayoutRobe from './LayoutRobe'
import LinkRobe from './LinkRobe'
import RobesProvider from './RobesProvider'
import TableRobe from './TableRobe'
import ImpressedRobe from './ImpressedRobe'
import IconImpressedRobe from './IconImpressedRobe'
import { useState } from 'react'
import LongRowmanceRobe from './LongRowmanceRobe'
import { ColorSwitchRobe } from '.'

const rows = Array.from({ length: 10000 }, (_, i) => {
  return {
    name: `Item ${i + 1}`,
    email: `Email ${i + 1}`
  }
})

function App() {
  const [filtered, setFiltered] = useState(rows)
  function filter(props: {
    query?: string,
  }) {
    const filtered = rows.filter(row => {
      if (!props.query) {
        return true
      }
      return row.name.includes(props.query)
    })
    setFiltered(filtered)
  }

  return (
    <RobesProvider>
      <LayoutRobe navbar={{
        profile: {
          button: {
            error: 'Test',
          },
        },
      }}>
        <ColorSwitchRobe />
        <LinkRobe href='#'>Home</LinkRobe>
        <form>
          <InputRobe />
          <HStack>
            <ButtonRobe type='submit'>Submit</ButtonRobe>
            <IconButtonRobe icon={<FaSearch />} aria-label='Search' />
            <ImpressedRobe error='Test'>Test</ImpressedRobe>
            <IconImpressedRobe
              icon={<FaSearch />}
              aria-label='Search'
              error='Test'
            />
          </HStack>
          <TableRobe>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Size</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Dorothy</Td>
                <Td>Small</Td>
              </Tr>
            </Tbody>
          </TableRobe>
          <LongRowmanceRobe
            data={filtered}
            Cells={({ row }) => {
              return (
                <>
                  <Td>{row.name}</Td>
                  <Td>{row.email}</Td>
                </>
              )
            }}
            style={{ height: '300px' }}
            columns={['name', 'email']}
            filter={filter}
          />
        </form>
      </LayoutRobe>
    </RobesProvider>
  )
}

export default App
