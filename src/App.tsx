import { Stack } from '@chakra-ui/react'
import ButtonRobe from './ButtonRobe'
import InputRobe from './InputRobe'
import RobesProvider from './RobesProvider'
import { useState } from 'react'
import TestCells from './TestCells'
import LongRowmanceRobe from './LongRowmanceRobe'

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
      <Stack>
        <InputRobe />
        <ButtonRobe>Test</ButtonRobe>
      </Stack>
      <LongRowmanceRobe
        data={filtered}
        Cells={TestCells}
        columns={['Name', 'Email']}
        filter={filter}
      />
    </RobesProvider>
  )
}

export default App
