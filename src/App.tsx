import { Thead, Tr, Th, Tbody, Td, HStack } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import ButtonRobe from './ButtonRobe'
import IconButtonRobe from './IconButtonRobe'
import InputRobe from './InputRobe'
import LayoutRobe from './LayoutRobe'
import LinkRobe from './LinkRobe'
import RobesProvider from './RobesProvider'
import TableRobe from './TableRobe'

function App() {
  return (
    <RobesProvider>
      <LayoutRobe>
        <LinkRobe href='#'>Home</LinkRobe>
        <form>
          <InputRobe />
          <HStack>
            <ButtonRobe type='submit'>Submit</ButtonRobe>
            <IconButtonRobe icon={<FaSearch />} aria-label='Search' />
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
        </form>
      </LayoutRobe>
    </RobesProvider>
  )
}

export default App
