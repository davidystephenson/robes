# Robes

A Chakra UI v2 components library that's easy to put on.

## Installation

```bash
npm install robes
```

## Usage

```tsx
import { ButtonRobe, InputRobe, LayoutRobe, LinkRobe, RobesProvider, TableRobe } from 'robes'
import { Tbody, Td, Thead, Th, Tr } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

<App>
  <RobesProvider>
    <LayoutRobe>
      <LinkRobe href='#'>Home</LinkRobe>
      <form>
        <InputRobe />
        <ButtonRobe type='submit'>Submit</ButtonRobe>
        <IconButtonRobe icon={<FaSearch />} />
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
</App>
```
