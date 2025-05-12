import ButtonRobe from './ButtonRobe'
import InputRobe from './InputRobe'
import RobesProvider from './RobesProvider'
import { useState } from 'react'
import TestCells from './TestCells'
import LongRowmanceRobe from './LongRowmanceRobe'
import FormRobe from './FormRobe'

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('a')
  }

  return (
    <RobesProvider>
      <FormRobe onSubmit={handleSubmit}>
        <InputRobe name='query' />
        <ButtonRobe type='submit'>Test</ButtonRobe>
      </FormRobe>
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
